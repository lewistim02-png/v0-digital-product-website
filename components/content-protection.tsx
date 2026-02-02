"use client"

import { useEffect, useState } from "react"
import { AlertTriangle } from "lucide-react"

interface ContentProtectionProps {
  userEmail: string
}

export function ContentProtection({ userEmail }: ContentProtectionProps) {
  const [showWarning, setShowWarning] = useState(false)

  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      setShowWarning(true)
      setTimeout(() => setShowWarning(false), 3000)
    }

    // Detect screenshot attempts (Print Screen, Cmd+Shift+3/4/5 on Mac, Win+Shift+S on Windows)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Print Screen
      if (e.key === "PrintScreen") {
        e.preventDefault()
        setShowWarning(true)
        setTimeout(() => setShowWarning(false), 3000)
      }

      // Mac screenshot shortcuts
      if (e.metaKey && e.shiftKey && (e.key === "3" || e.key === "4" || e.key === "5")) {
        setShowWarning(true)
        setTimeout(() => setShowWarning(false), 3000)
      }

      // Windows Snipping Tool
      if (e.metaKey && e.shiftKey && e.key === "s") {
        setShowWarning(true)
        setTimeout(() => setShowWarning(false), 3000)
      }
    }

    // Disable certain keyboard shortcuts
    const handleKeyUp = (e: KeyboardEvent) => {
      // Disable Ctrl+P (Print)
      if ((e.ctrlKey || e.metaKey) && e.key === "p") {
        e.preventDefault()
        setShowWarning(true)
        setTimeout(() => setShowWarning(false), 3000)
      }
    }

    document.addEventListener("contextmenu", handleContextMenu)
    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("keyup", handleKeyUp)

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("keyup", handleKeyUp)
    }
  }, [])

  return (
    <>
      {/* Watermark overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center opacity-5">
        <div className="rotate-[-45deg] text-6xl font-bold text-white whitespace-nowrap select-none">
          {userEmail} • {userEmail} • {userEmail}
        </div>
      </div>

      {/* Warning toast */}
      {showWarning && (
        <div className="fixed top-4 right-4 z-50 bg-red-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-in slide-in-from-top">
          <AlertTriangle className="h-5 w-5" />
          <div>
            <p className="font-semibold">Content Protection Active</p>
            <p className="text-sm">This content is protected and monitored</p>
          </div>
        </div>
      )}

      {/* Copyright notice */}
      <div className="fixed bottom-4 left-4 z-40 bg-black/80 text-white px-4 py-2 rounded-lg text-xs max-w-xs">
        <p className="font-semibold mb-1">⚠️ Copyright Notice</p>
        <p className="text-gray-300">
          This content is licensed to {userEmail}. Unauthorized sharing, distribution, or reproduction is prohibited and
          may result in legal action.
        </p>
      </div>
    </>
  )
}
