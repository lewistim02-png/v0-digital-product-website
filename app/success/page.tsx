import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Lock, AlertCircle } from "lucide-react"
import Link from "next/link"

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>
}) {
  const params = await searchParams
  const sessionId = params.session_id

  console.log("[v0] Success page - session_id:", sessionId)

  if (!sessionId) {
    console.log("[v0] No session_id provided, redirecting to home")
    redirect("/")
  }

  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  console.log("[v0] Current user:", user?.email || "Not logged in")

  // Get order details
  const { data: order, error: orderError } = await supabase
    .from("orders")
    .select("*, products(*), customers(*)")
    .eq("stripe_session_id", sessionId)
    .single()

  console.log("[v0] Order query result:", { order, orderError })

  if (orderError || !order) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full bg-black/40 border-gray-800">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <AlertCircle className="w-16 h-16 text-red-500" />
            </div>
            <CardTitle className="text-3xl font-bold text-white">Order Not Found</CardTitle>
            <CardDescription className="text-gray-300 text-lg">
              We couldn't find your order. This might be a timing issue.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gray-900/50 p-6 rounded-lg space-y-2 text-gray-300">
              <p>Session ID: {sessionId}</p>
              <p>Error: {orderError?.message || "Order not found in database"}</p>
            </div>
            <div className="space-y-3">
              <Button asChild className="w-full bg-pink-600 hover:bg-pink-700 text-white" size="lg">
                <Link href="/">Return to Home</Link>
              </Button>
              <p className="text-center text-sm text-gray-400">
                If you completed payment, please contact support with your session ID above.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (user) {
    console.log("[v0] User already logged in, redirecting to dashboard")
    redirect("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full bg-black/40 border-gray-800">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="w-16 h-16 text-green-500" />
          </div>
          <CardTitle className="text-3xl font-bold text-white">Payment Successful!</CardTitle>
          <CardDescription className="text-gray-300 text-lg">
            Thank you for your purchase of {order.products.name}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-pink-500/10 border-2 border-pink-500 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <Lock className="w-8 h-8 text-pink-500 flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="font-bold text-xl text-white">Create Your Account to Access Your Content</h3>
                <p className="text-gray-300">
                  To protect your purchase and ensure secure access to your course materials, please create your
                  account. This will give you lifetime access to your content from any device.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-6 rounded-lg space-y-4">
            <h4 className="font-bold text-lg text-white">What You'll Get Access To:</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-1">✓</span>
                <span>{order.products.name} - All course materials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-1">✓</span>
                <span>Secure, protected access from your personal dashboard</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-1">✓</span>
                <span>Lifetime access - download anytime</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-1">✓</span>
                <span>Access from any device with your login</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <Button asChild className="w-full bg-pink-600 hover:bg-pink-700 text-white" size="lg">
              <Link href={`/auth/setup-account?email=${encodeURIComponent(order.customers.email)}`}>
                Create My Account & Access Content
              </Link>
            </Button>
            <p className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-pink-500 hover:underline">
                Sign in here
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
