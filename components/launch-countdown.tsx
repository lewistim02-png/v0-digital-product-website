"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function LaunchCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    // Set launch end date to 28 days from now
    const launchEndDate = new Date()
    launchEndDate.setDate(launchEndDate.getDate() + 28)

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const distance = launchEndDate.getTime() - now

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Card className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 border-0">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Launch Pricing Ends In:</h3>
        <div className="flex justify-center gap-4 mb-3">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold">{timeLeft.days}</div>
            <div className="text-sm opacity-90">Days</div>
          </div>
          <div className="text-4xl font-bold">:</div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold">{timeLeft.hours}</div>
            <div className="text-sm opacity-90">Hours</div>
          </div>
          <div className="text-4xl font-bold">:</div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold">{timeLeft.minutes}</div>
            <div className="text-sm opacity-90">Mins</div>
          </div>
          <div className="text-4xl font-bold">:</div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold">{timeLeft.seconds}</div>
            <div className="text-sm opacity-90">Secs</div>
          </div>
        </div>
        <p className="text-lg opacity-95">
          After this countdown, prices increase permanently. Lock in your savings now.
        </p>
      </div>
    </Card>
  )
}
