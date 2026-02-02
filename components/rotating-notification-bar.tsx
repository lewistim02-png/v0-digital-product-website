"use client"

import { useEffect, useState } from "react"

export function RotatingNotificationBar() {
  const messages = [
    "⚠️ Price increases to £297 after 100 members",
    "🎯 27 spots remaining at founder pricing",
    "✅ Jake from London just enrolled 10 minutes ago",
    "📈 Students made £45,000 combined last month",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-[#FF4444] text-white text-center py-3 px-4 font-bold text-sm md:text-base border-b-4 border-black">
      <div className="max-w-6xl mx-auto animate-fade-in">{messages[currentIndex]}</div>
    </div>
  )
}
