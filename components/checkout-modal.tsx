"use client"

import type React from "react"

import { useState } from "react"
import { X, Lock, CheckCircle2 } from "lucide-react"
import { createCheckoutSession } from "@/app/actions/checkout"

interface CheckoutModalProps {
  product: "lite" | "manual" | "guides" | "mastery"
  onClose: () => void
}

const products = {
  lite: {
    name: "The Lite",
    price: "£37",
    description: "Essential fundamentals + 3 bonus guides",
    features: ["80-page foundation guide", "3 specialist bonus guides", "Lifetime updates", "30-day guarantee"],
  },
  manual: {
    name: "The Manual",
    price: "£67",
    description: "Complete 10-chapter reselling foundation",
    features: ["156-page complete manual", "45 copy-paste templates", "12 supplier contacts", "Lifetime updates"],
  },
  guides: {
    name: "The Guides",
    price: "£147",
    description: "The Manual + 7 specialist guides",
    features: [
      "Everything in The Manual",
      "7 deep-dive specialist guides",
      "Priority email support",
      "Bonus resources pack",
    ],
  },
  mastery: {
    name: "Mastery",
    price: "£297",
    description: "Everything + 1-on-1 support & community",
    features: [
      "Everything in The Guides",
      "Weekly 1-on-1 Q&A calls",
      "Private Discord community",
      "First access to new content",
    ],
  },
}

export function CheckoutModal({ product, onClose }: CheckoutModalProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const selectedProduct = products[product]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !name) {
      setError("Please fill in all fields")
      return
    }

    setLoading(true)
    try {
      const { url } = await createCheckoutSession(product, email)
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error("Checkout error:", error)
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4">
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-md w-full p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-black hover:text-gray-600" aria-label="Close">
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-black text-black mb-6">Complete Your Order</h2>

        <div className="bg-gray-50 border-4 border-black p-6 mb-6">
          <h3 className="font-black text-black text-xl">{selectedProduct.name}</h3>
          <p className="text-gray-700 text-sm mt-2">{selectedProduct.description}</p>
          <p className="text-4xl font-black text-[#FF4444] mt-4">{selectedProduct.price}</p>

          <ul className="mt-4 space-y-2">
            {selectedProduct.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-black">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-black mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-[#FF4444]"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-black mb-2">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-[#FF4444]"
              placeholder="John Smith"
            />
          </div>

          {error && <div className="bg-red-50 border-2 border-red-500 p-3 text-sm text-red-700">{error}</div>}

          <div className="bg-yellow-50 border-2 border-yellow-400 p-4 flex items-start gap-3">
            <Lock className="w-5 h-5 text-yellow-700 flex-shrink-0" />
            <div>
              <p className="text-black font-bold text-sm">Secure Checkout</p>
              <p className="text-gray-700 text-xs mt-1">Payment processed by Stripe • 256-bit encryption</p>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FF4444] text-white py-4 font-black text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50"
          >
            {loading ? "Processing..." : "Continue to Payment →"}
          </button>
        </form>

        <p className="text-xs text-gray-600 mt-4 text-center">
          30-day money-back guarantee • Instant access • Lifetime updates
        </p>
      </div>
    </div>
  )
}
