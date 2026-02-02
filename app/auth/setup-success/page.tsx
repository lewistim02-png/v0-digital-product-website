import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SetupSuccessPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="w-full max-w-md">
        <Card className="bg-black/40 border-gray-800">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <CheckCircle className="h-16 w-16 text-green-500" />
                <Mail className="h-8 w-8 text-pink-500 absolute -bottom-1 -right-1" />
              </div>
            </div>
            <CardTitle className="text-2xl text-white">Check Your Email</CardTitle>
            <CardDescription className="text-gray-300">One more step to access your content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-lg space-y-4">
              <p className="text-gray-300 text-center">
                We've sent a confirmation email to verify your account. Please check your inbox and click the
                confirmation link.
              </p>
              <div className="bg-pink-500/10 border border-pink-500/50 p-4 rounded-lg">
                <p className="text-sm text-gray-300 text-center">
                  <strong className="text-white">Important:</strong> You must confirm your email before you can access
                  your course materials.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-white text-center">After confirming your email:</h4>
              <ol className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold">1.</span>
                  <span>Click the confirmation link in your email</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold">2.</span>
                  <span>Sign in with your email and password</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold">3.</span>
                  <span>Access all your course materials from your dashboard</span>
                </li>
              </ol>
            </div>

            <Button asChild className="w-full bg-pink-600 hover:bg-pink-700 text-white" size="lg">
              <Link href="/auth/login">Go to Sign In Page</Link>
            </Button>

            <p className="text-center text-xs text-gray-400">
              Didn't receive the email? Check your spam folder or contact support.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
