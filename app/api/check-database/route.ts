import { NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server"

export async function POST() {
  try {
    const supabase = await createServerClient()

    // Check if products table exists by trying to query it
    const { error } = await supabase.from("products").select("id").limit(1)

    if (error) {
      // Table doesn't exist or other error
      return NextResponse.json({ ready: false })
    }

    // Table exists
    return NextResponse.json({ ready: true })
  } catch (error) {
    console.error("[v0] Database check error:", error)
    return NextResponse.json({ ready: false })
  }
}
