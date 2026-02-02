"use client"

import { useEffect, useState } from "react"
import { Eye } from "lucide-react"

export function LiveViewerNotification() {
  const [isVisible, setIsVisible] = useState(false)
  const [viewerCount, setViewerCount] = useState(3)

  useEffect(() => {
    // Show/hide notification every 30-60 seconds
    const showInterval = setInterval(
      () => {
        setIsVisible(true)
        setViewerCount(Math.floor(Math.random() * 5) + 2) // 2-6 viewers

        // Hide after 8 seconds
        setTimeout(() => setIsVisible(false), 8000)
      },
      Math.random() * 30000 + 30000,
    ) // Random interval 30-60s

    return () => clearInterval(showInterval)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-24 left-4 z-50 bg-white border-4 border-black p-4 brutal-shadow-sm animate-slide-in-left">
      <div className="flex items-center gap-2">
        <Eye className="w-5 h-5 text-[#FF4444] animate-pulse" />
        <p className="font-bold text-sm">🔥 {viewerCount} people viewing this now</p>
      </div>
    </div>
  )
}
