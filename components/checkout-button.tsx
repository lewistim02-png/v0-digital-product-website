"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { createCheckoutSession } from "@/app/actions/checkout"
import { Loader2, Lock, AlertCircle } from "lucide-react"

interface CheckoutButtonProps {
  productId: string
  productName: string
  price: string | number
}

export function CheckoutButton({ productId, productName, price }: CheckoutButtonProps) {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [error, setError] = useState("")
  const [touched, setTouched] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setTouched(true)

    if (!email) {
      setError("Please enter your email address")
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    setLoading(true)
    try {
      const result = await createCheckoutSession(productId, email)
      console.log("[v0] Checkout result:", result)

      if (result?.url) {
        // Track purchase intent before redirecting
        if (typeof window !== "undefined") {
          sessionStorage.setItem("hasShownPurchaseIntent", "true")
        }
        console.log("[v0] Redirecting to:", result.url)
        window.location.href = result.url
      } else {
        console.error("[v0] No URL in checkout result:", result)
        setError("Payment redirect URL missing. Please contact support.")
      }
    } catch (error) {
      console.error("Checkout error:", error)
      setError("Something went wrong. Please try again or contact support.")
    } finally {
      setLoading(false)
    }
  }

  const handleEmailBlur = () => {
    setTouched(true)
    if (email && !validateEmail(email)) {
      setError("Please enter a valid email address")
    }
  }

  const priceDisplay = typeof price === "number" ? `£${price}` : price

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-6 text-lg"
          onClick={() => {
            // Track that user clicked buy button (purchase intent)
            if (typeof window !== "undefined") {
              sessionStorage.setItem("hasShownPurchaseIntent", "true")
            }
          }}
        >
          Get Started - {priceDisplay}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black text-black">Get {productName}</DialogTitle>
          <DialogDescription className="text-gray-700">
            Enter your email to proceed to secure checkout
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleCheckout} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-black font-bold">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (error) setError("")
              }}
              onBlur={handleEmailBlur}
              required
              className={`border-2 ${
                touched && error ? "border-red-500 focus:border-red-500" : "border-black"
              } text-black`}
              aria-invalid={error ? "true" : "false"}
              aria-describedby={error ? "email-error" : undefined}
            />
            {touched && error && (
              <div id="email-error" className="flex items-center gap-2 text-red-500 text-sm font-medium">
                <AlertCircle className="w-4 h-4" />
                <span>{error}</span>
              </div>
            )}
          </div>

          <div className="bg-green-50 border-2 border-green-500 p-3 rounded flex items-start gap-3">
            <Lock className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-black font-medium">
              After payment, you'll create a secure account to access your content. This protects your purchase and
              gives you lifetime access from any device.
            </p>
          </div>

          <Button
            type="submit"
            disabled={loading || !email}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-black border-2 border-black py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              `Continue to Checkout`
            )}
          </Button>
          <p className="text-xs text-gray-600 text-center font-medium">
            🔒 Secure payment powered by Stripe • 30-day money-back guarantee
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
