"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedStatProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
  duration?: number
}

export function AnimatedStat({ value, label, prefix = "", suffix = "", duration = 2000 }: AnimatedStatProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const steps = 60
    const increment = value / steps
    const stepDuration = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, value, duration])

  return (
    <div ref={ref} className="bg-white border-4 border-black p-6 brutal-shadow text-center">
      <div className="text-4xl font-black mb-2 text-[#1A1A1A] font-mono count-up">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm font-bold uppercase tracking-wide text-[#2C2C2C]">{label}</div>
    </div>
  )
}
