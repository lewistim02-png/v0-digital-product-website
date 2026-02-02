import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server"

export async function POST(request: NextRequest) {
  try {
    const { productId, fileUrl } = await request.json()

    if (!productId || !fileUrl) {
      return NextResponse.json({ error: "Product ID and file URL required" }, { status: 400 })
    }

    // Update database with file URL
    const supabase = await createServerClient()
    const { error } = await supabase.from("products").update({ file_url: fileUrl }).eq("id", productId)

    if (error) {
      console.error("[v0] Database error:", error)
      return NextResponse.json({ error: "Database update failed" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error:", error)
    return NextResponse.json({ error: "Update failed" }, { status: 500 })
  }
}
