import { NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  try {
    const { productId, fileUrls } = await request.json()

    if (!productId || !fileUrls || !Array.isArray(fileUrls)) {
      return NextResponse.json({ error: "Product ID and file URLs array are required" }, { status: 400 })
    }

    const supabase = await createServerClient()

    // Delete existing files for this product
    await supabase.from("product_files").delete().eq("product_id", productId)

    // Insert new files
    const filesToInsert = fileUrls.map((url, index) => {
      // Extract filename from URL
      const urlParts = url.split("/")
      const fileName = decodeURIComponent(urlParts[urlParts.length - 1])

      return {
        product_id: productId,
        file_name: fileName,
        file_url: url,
        file_order: index,
      }
    })

    const { error: insertError } = await supabase.from("product_files").insert(filesToInsert)

    if (insertError) {
      console.error("[v0] Database insert error:", insertError)
      return NextResponse.json({ error: "Failed to save files to database" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      filesAdded: fileUrls.length,
    })
  } catch (error) {
    console.error("[v0] Update product files error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
