"use client"

import { useEffect, useState } from "react"
import { BrutalButton } from "@/components/ui/brutal-button"

export function StickyUrgencyBar() {
  const [isVisible, setIsVisible] = useState(false)
  const spotsTaken = 8
  const totalSpots = 50
  const percentage = (spotsTaken / totalSpots) * 100

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1A1A1A] text-white border-t-4 border-[#FF4444] p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="font-bold text-sm md:text-base mb-2">
            ⚠️ Full Access Limited: {spotsTaken} of {totalSpots} Founding Member Spots Taken
          </p>
          <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
            <div className="bg-[#00C853] h-full transition-all duration-500" style={{ width: `${percentage}%` }} />
          </div>
        </div>
        <BrutalButton
          size="sm"
          onClick={() => {
            document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          Secure Your Spot
        </BrutalButton>
      </div>
    </div>
  )
}
