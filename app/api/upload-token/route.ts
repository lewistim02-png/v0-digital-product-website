import { handleUpload, type HandleUploadBody } from "@vercel/blob/client"
import { type NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(request: NextRequest): Promise<NextResponse> {
  console.log("[v0] Upload token request received")
  console.log("[v0] Environment check - BLOB_READ_WRITE_TOKEN exists:", !!process.env.BLOB_READ_WRITE_TOKEN)

  try {
    const body = (await request.json()) as HandleUploadBody
    console.log("[v0] Request body:", JSON.stringify(body))

    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        console.log("[v0] Generating token for:", pathname)
        console.log("[v0] Client payload:", clientPayload)

        // Validate file type
        if (!pathname.endsWith(".pdf")) {
          throw new Error("Only PDF files are allowed")
        }

        return {
          allowedContentTypes: ["application/pdf"],
          maximumSizeInBytes: 50 * 1024 * 1024, // 50MB
        }
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        console.log("[v0] Upload completed:", blob.url)
        console.log("[v0] Token payload:", tokenPayload)
      },
    })

    console.log("[v0] Token generated successfully")
    return NextResponse.json(jsonResponse)
  } catch (error) {
    console.error("[v0] Token generation error:", error)
    console.error("[v0] Error stack:", (error as Error).stack)
    return NextResponse.json({ error: (error as Error).message }, { status: 400 })
  }
}
