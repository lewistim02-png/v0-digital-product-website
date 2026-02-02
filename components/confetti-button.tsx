"use client"

import type React from "react"

import { BrutalButton } from "./ui/brutal-button"
import { useState } from "react"

interface ConfettiButtonProps {
  children: React.ReactNode
  onClick?: () => void
  size?: "default" | "sm" | "lg"
  className?: string
}

export function ConfettiButton({ children, onClick, size = "default", className }: ConfettiButtonProps) {
  const [showConfetti, setShowConfetti] = useState(false)

  const handleClick = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 1000)

    if (onClick) onClick()
  }

  return (
    <div className="relative inline-block">
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#FF4444] animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}
      <BrutalButton onClick={handleClick} size={size} className={className}>
        {children}
      </BrutalButton>
    </div>
  )
}
