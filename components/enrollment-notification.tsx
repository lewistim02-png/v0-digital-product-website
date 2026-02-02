"use client"

import { useEffect, useState } from "react"
import { CheckCircle2 } from "lucide-react"

const names = [
  { name: "Jake", city: "London", time: "10 minutes ago" },
  { name: "Sarah", city: "Manchester", time: "23 minutes ago" },
  { name: "Marcus", city: "Bristol", time: "1 hour ago" },
  { name: "Lisa", city: "Birmingham", time: "2 hours ago" },
  { name: "Tom", city: "Leeds", time: "3 hours ago" },
]

export function EnrollmentNotification() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentPerson, setCurrentPerson] = useState(0)

  useEffect(() => {
    const showInterval = setInterval(
      () => {
        setCurrentPerson(Math.floor(Math.random() * names.length))
        setIsVisible(true)

        setTimeout(() => setIsVisible(false), 7000)
      },
      Math.random() * 20000 + 40000,
    ) // Random 40-60s

    return () => clearInterval(showInterval)
  }, [])

  if (!isVisible) return null

  const person = names[currentPerson]

  return (
    <div className="fixed bottom-24 right-4 z-50 bg-[#00C853] text-white border-4 border-black p-4 brutal-shadow-sm animate-slide-in-right max-w-xs">
      <div className="flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-bold text-sm">Someone just enrolled!</p>
          <p className="text-xs opacity-90">
            {person.name} from {person.city} • {person.time}
          </p>
        </div>
      </div>
    </div>
  )
}
