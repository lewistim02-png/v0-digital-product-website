import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { createClient } from "@/lib/supabase/server"
import type Stripe from "stripe"

export async function POST(req: Request) {
  const body = await req.text()
  const headersList = await headers()
  const signature = headersList.get("stripe-signature")

  if (!signature) {
    console.log("[v0] Webhook error: No signature")
    return NextResponse.json({ error: "No signature" }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    console.error("[v0] Webhook signature verification failed:", err)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  console.log("[v0] Webhook received event:", event.type)

  // Handle the checkout.session.completed event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session
    const supabase = await createClient()

    console.log("[v0] Processing checkout session:", session.id)

    const { count: totalPurchases } = await supabase
      .from("orders")
      .select("*", { count: "exact", head: true })
      .eq("status", "completed")

    const purchaseNumber = (totalPurchases || 0) + 1

    // Update order status
    const { data: updatedOrder, error: updateError } = await supabase
      .from("orders")
      .update({
        status: "completed",
        stripe_payment_intent_id: session.payment_intent as string,
      })
      .eq("stripe_session_id", session.id)
      .select()

    if (updateError) {
      console.error("[v0] Error updating order:", updateError)
    } else {
      console.log("[v0] Order updated to completed:", session.id)
    }

    try {
      // Get order details with customer and product info
      const { data: order, error: orderError } = await supabase
        .from("orders")
        .select("*, products(*), customers(*)")
        .eq("stripe_session_id", session.id)
        .single()

      if (orderError) {
        console.error("[v0] Error fetching order:", orderError)
      }

      if (order && order.customers && order.products) {
        const customerEmail = order.customers.email
        const customerName = order.customers.name || ""
        const productName = order.products.name
        const productId = order.product_id

        console.log("[v0] Order completed for:", customerEmail, "Product:", productName, "ID:", productId)

        let tag = "customer"
        if (productId === 4) {
          tag = "lite-buyer"
        } else if (productId === 1) {
          tag = "manual-buyer"
        } else if (productId === 2) {
          tag = "guides-buyer"
        } else if (productId === 3) {
          tag = "mastery-buyer"

          const { count: masteryCount } = await supabase
            .from("orders")
            .select("*", { count: "exact", head: true })
            .eq("product_id", 3)
            .eq("status", "completed")

          if (masteryCount && masteryCount <= 50) {
            // Mark as founding member
            await supabase.from("orders").update({ is_founding_member: true }).eq("id", order.id)

            tag = "founding-member"
            console.log("[v0] Founding member #", masteryCount, ":", customerEmail)
          }
        }

        const kitFields: Record<string, string> = {
          product_purchased: productName,
          purchase_date: new Date().toISOString(),
          amount_paid: `£${(order.amount / 100).toFixed(2)}`,
          purchase_number: purchaseNumber.toString(),
        }

        // Add bonus eligibility flag for first 100 buyers
        if (purchaseNumber <= 100) {
          kitFields.eligible_for_bonus = "true"
          console.log("[v0] First 100 buyer #", purchaseNumber, ":", customerEmail)
        }

        // Add subscriber to Kit (only if KIT_API_SECRET is configured)
        if (process.env.KIT_API_SECRET) {
          const kitResponse = await fetch("https://api.kit.com/v4/subscribers", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.KIT_API_SECRET}`,
            },
            body: JSON.stringify({
              email_address: customerEmail,
              first_name: customerName,
              tags: [tag],
              fields: kitFields,
            }),
          })

          if (kitResponse.ok) {
            console.log("[v0] Customer added to Kit:", customerEmail, "with tag:", tag)
          } else {
            const error = await kitResponse.text()
            console.error("[v0] Failed to add customer to Kit:", error)
          }
        }
      }
    } catch (kitError) {
      console.error("[v0] Kit integration error:", kitError)
      // Don't fail the webhook if Kit integration fails
    }
  }

  return NextResponse.json({ received: true })
}
