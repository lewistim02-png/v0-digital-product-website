import { NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  try {
    const { productId, urls } = await request.json()

    if (!productId || !urls || !Array.isArray(urls)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 })
    }

    const supabase = await createServerClient()

    const { error } = await supabase
      .from("products")
      .update({ file_url: JSON.stringify(urls) })
      .eq("id", productId)

    if (error) {
      console.error("[v0] Database error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Update error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to update product URLs" },
      { status: 500 },
    )
  }
}
