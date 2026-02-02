"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { X, Clock } from "lucide-react"
import { BrutalButton } from "@/components/ui/brutal-button"

export function EnhancedExitIntent() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [hasShown, setHasShown] = useState(false)
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60) // 24 hours in seconds

  useEffect(() => {
    const shown = sessionStorage.getItem("exitPopupShown")
    if (shown) {
      setHasShown(true)
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true)
        setHasShown(true)
        sessionStorage.setItem("exitPopupShown", "true")
      }
    }

    // Mobile: trigger after 30 seconds
    const mobileTimer = setTimeout(() => {
      if (!hasShown && window.innerWidth < 768) {
        setIsOpen(true)
        setHasShown(true)
        sessionStorage.setItem("exitPopupShown", "true")
      }
    }, 30000)

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      clearTimeout(mobileTimer)
    }
  }, [hasShown])

  useEffect(() => {
    if (!isOpen) return

    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(interval)
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      setIsOpen(false)
    } catch (error) {
      console.error("Subscription error:", error)
    }
  }

  const hours = Math.floor(timeLeft / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = timeLeft % 60

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-lg border-4 border-black">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100"
        >
          <X className="h-5 w-5" />
        </button>
        <DialogHeader>
          <div className="bg-[#FF4444] text-white px-4 py-2 -mx-6 -mt-6 mb-4 border-b-4 border-black">
            <DialogTitle className="text-2xl md:text-3xl font-black uppercase">
              WAIT! Don't Leave Empty-Handed
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div className="bg-[#00C853]/10 border-4 border-[#00C853] p-6">
            <h3 className="font-black text-xl mb-2 uppercase">Special Exit Offer:</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#00C853] font-bold">✓</span>
                <span>FREE Chapter 1: "Your First £100 in 7 Days"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C853] font-bold">✓</span>
                <span>£20 Discount Code (Valid for any course)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00C853] font-bold">✓</span>
                <span>Weekly profit tips straight to your inbox</span>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-4 border-black h-12 text-base"
            />
            <BrutalButton type="submit" className="w-full" size="lg">
              Send My Free Chapter + Discount
            </BrutalButton>
          </form>

          <div className="flex items-center justify-center gap-2 text-sm bg-[#FF4444]/10 border-2 border-[#FF4444] p-3">
            <Clock className="w-4 h-4 text-[#FF4444]" />
            <span className="font-bold">
              Offer expires in: {hours}h {minutes}m {seconds}s
            </span>
          </div>

          <p className="text-xs text-center text-gray-600">
            One-time offer. We'll never spam you. Unsubscribe anytime.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
