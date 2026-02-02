"use server"

import { stripe } from "@/lib/stripe"
import { createClient } from "@/lib/supabase/server"

export async function createCheckoutSession(productId: string, email: string) {
  console.log("[v0] Starting checkout for product:", productId, "email:", email)

  const supabase = await createClient()

  const { data: product, error: productError } = await supabase
    .from("products")
    .select("id, name, description, price, file_url")
    .eq("id", productId)
    .single()

  console.log("[v0] Product query result:", { product, productError })

  if (productError || !product) {
    console.error("[v0] Product not found:", productError)
    throw new Error(
      `Product not found: ${productId}. Please ensure the products table exists and products are seeded in the database.`,
    )
  }

  let { data: customer } = await supabase.from("customers").select("*").eq("email", email).maybeSingle()

  if (!customer) {
    const { data: newCustomer, error: customerError } = await supabase
      .from("customers")
      .insert({ email })
      .select()
      .single()

    if (customerError) {
      console.error("[v0] Customer creation error:", customerError)
      throw customerError
    }
    customer = newCustomer
  }

  console.log("[v0] Customer:", customer.id)

  // Create Stripe checkout session
  try {
    const session = await stripe.checkout.sessions.create({
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: product.name,
              description: product.description || "",
            },
            unit_amount: product.price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}`,
      metadata: {
        product_id: productId,
        customer_id: customer.id,
      },
    })

    console.log("[v0] Stripe session created:", session.id)

    const { error: orderError } = await supabase.from("orders").insert({
      customer_id: customer.id,
      product_id: productId,
      stripe_session_id: session.id,
      amount: product.price,
      status: "pending",
    })

    if (orderError) {
      console.error("[v0] Order creation error:", orderError)
      throw orderError
    }

    console.log("[v0] Order created successfully")

    console.log("[v0] Returning session URL:", session.url)
    return { sessionId: session.id, url: session.url }
  } catch (error) {
    console.error("[v0] Stripe checkout error:", error)
    throw new Error(`Checkout failed: ${error instanceof Error ? error.message : "Unknown error"}`)
  }
}
