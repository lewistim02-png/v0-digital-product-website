import { put } from "@vercel/blob"
import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server"

export const runtime = "nodejs"
export const maxDuration = 60

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] Upload request received")

    const formData = await request.formData()
    const file = formData.get("file") as File
    const productId = formData.get("productId") as string

    console.log("[v0] File:", file?.name, "Size:", file?.size, "Product ID:", productId)

    if (!file || !productId) {
      return NextResponse.json({ error: "File and product ID required" }, { status: 400 })
    }

    if (file.size > 50 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large. Maximum size is 50MB" }, { status: 400 })
    }

    console.log("[v0] Uploading to Vercel Blob...")

    // Upload to Vercel Blob
    const blob = await put(file.name, file, {
      access: "public",
    })

    console.log("[v0] Blob uploaded:", blob.url)

    // Update database with file URL
    const supabase = await createServerClient()
    const { error } = await supabase.from("products").update({ file_url: blob.url }).eq("id", productId)

    if (error) {
      console.error("[v0] Database error:", error)
      return NextResponse.json({ error: "Database update failed" }, { status: 500 })
    }

    console.log("[v0] Database updated successfully")

    return NextResponse.json({
      url: blob.url,
      filename: file.name,
      productId,
    })
  } catch (error) {
    console.error("[v0] Upload error:", error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Upload failed",
      },
      { status: 500 },
    )
  }
}
