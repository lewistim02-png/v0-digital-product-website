"use client"

import { useEffect, useState } from "react"
import { BrutalButton } from "@/components/ui/brutal-button"

export function MobileStickyBar() {
  const [message, setMessage] = useState("Claim Your Spot - 73 Left")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)

      // Change message based on scroll position
      const testimonialsSection = document.getElementById("testimonials")
      const faqSection = document.getElementById("faq")
      const pricingSection = document.getElementById("pricing")

      if (testimonialsSection && window.scrollY >= testimonialsSection.offsetTop - 100) {
        setMessage("Join 1000+ Successful Resellers")
      } else if (faqSection && window.scrollY >= faqSection.offsetTop - 100) {
        setMessage("All Questions Answered? Start Now")
      } else if (pricingSection && window.scrollY >= pricingSection.offsetTop - 100) {
        setMessage("Claim Your Spot - 73 Left")
      } else {
        setMessage("Start Learning Today")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible || window.innerWidth >= 768) return null

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t-4 border-black p-4 shadow-lg">
      <BrutalButton
        size="lg"
        className="w-full"
        onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
      >
        {message}
      </BrutalButton>
    </div>
  )
}
