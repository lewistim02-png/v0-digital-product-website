import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email, firstName, tags, formId } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }

    const kitApiSecret = process.env.KIT_API_SECRET

    if (!kitApiSecret) {
      console.error("[v0] KIT_API_SECRET not found")
      return NextResponse.json({ error: "Configuration error" }, { status: 500 })
    }

    const kitPayload: any = {
      email_address: email,
      tags: tags || ["lead", "free-course"],
    }

    // Add first name if provided
    if (firstName) {
      kitPayload.first_name = firstName
    }

    // Add custom fields for tracking
    if (formId) {
      kitPayload.fields = {
        form_source: formId,
        signup_date: new Date().toISOString(),
      }
    }

    const response = await fetch("https://api.kit.com/v4/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${kitApiSecret}`,
      },
      body: JSON.stringify(kitPayload),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error("[v0] Kit API error:", errorData)

      if (response.status === 409 || errorData.includes("already subscribed")) {
        return NextResponse.json(
          { error: "You're already subscribed! Check your email for the course." },
          { status: 409 },
        )
      }

      return NextResponse.json({ error: "Failed to subscribe" }, { status: response.status })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Subscribe error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
