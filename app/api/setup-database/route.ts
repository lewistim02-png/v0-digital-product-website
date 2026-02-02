import { NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server"

export async function POST() {
  try {
    console.log("[v0] Checking database setup...")

    const supabase = await createServerClient()

    const { error: checkError } = await supabase.from("product_files").select("id").limit(1)

    // If table doesn't exist (error code 42P01), provide SQL to run manually
    if (checkError && checkError.code === "42P01") {
      console.log("[v0] product_files table doesn't exist")
      return NextResponse.json(
        {
          needsSetup: true,
          sql: `CREATE TABLE IF NOT EXISTS product_files (
  id BIGSERIAL PRIMARY KEY,
  product_id BIGINT REFERENCES products(id) ON DELETE CASCADE,
  file_name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_product_files_product_id ON product_files(product_id);`,
          message: "Please run this SQL in your Supabase SQL Editor, then refresh this page.",
        },
        { status: 200 },
      )
    }

    // Table exists or other error
    if (checkError) {
      console.error("[v0] Database check error:", checkError)
      return NextResponse.json({ error: checkError.message }, { status: 500 })
    }

    console.log("[v0] Database setup verified - table exists")

    return NextResponse.json({
      success: true,
      message: "Database is ready!",
    })
  } catch (error) {
    console.error("[v0] Setup error:", error)
    return NextResponse.json({ error: error instanceof Error ? error.message : "Setup failed" }, { status: 500 })
  }
}
