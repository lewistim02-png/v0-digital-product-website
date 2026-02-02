import { neon } from "@neondatabase/serverless"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    console.log("[v0] Connecting to database...")

    const sql = neon(process.env.SUPABASE_POSTGRES_URL!)

    console.log("[v0] Querying products...")
    const products = await sql`
      SELECT * FROM products 
      ORDER BY price_gbp
    `

    console.log("[v0] Found products:", products.length)

    // Format the response to show what files each product has
    const fileReport = products.map((product) => ({
      name: product.name,
      price: `£${product.price_gbp}`,
      stripe_price_id: product.stripe_price_id,
      has_file_url: !!product.file_url,
      file_count: product.file_url ? (Array.isArray(product.file_url) ? product.file_url.length : 1) : 0,
      files: product.file_url,
    }))

    return NextResponse.json(
      {
        success: true,
        products: fileReport,
        total_products: products.length,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Error checking files:", error)
    return NextResponse.json(
      {
        error: "Failed to check files",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
