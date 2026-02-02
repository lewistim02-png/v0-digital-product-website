"use client"

import { useState } from "react"

const sales = [
  { item: "Jordan 4 Black Cat", time: "2 hours ago", profit: "85" },
  { item: "Pokemon Crown Zenith Box", time: "5 hours ago", profit: "120" },
  { item: "Yeezy Slides Onyx", time: "yesterday", profit: "45" },
  { item: "PS5 Controller", time: "3 hours ago", profit: "30" },
  { item: "Nike Dunk Low Panda", time: "6 hours ago", profit: "65" },
  { item: "Charizard VMAX", time: "1 day ago", profit: "95" },
  { item: "Air Force 1 White", time: "4 hours ago", profit: "40" },
  { item: "Supreme Box Logo Tee", time: "8 hours ago", profit: "150" },
]

export function RecentlySoldTicker() {
  const [isPaused, setIsPaused] = useState(false)

  // Double the array to create seamless loop
  const items = [...sales, ...sales]

  return (
    <div className="bg-[#00C853] border-y-4 border-black py-4 overflow-hidden">
      <div
        className={`flex gap-8 ${isPaused ? "" : "ticker-scroll"}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {items.map((sale, index) => (
          <div key={index} className="flex items-center gap-3 whitespace-nowrap flex-shrink-0 px-4">
            <span className="text-2xl">🔥</span>
            <span className="font-bold text-white">{sale.item}</span>
            <span className="text-white/80 text-sm">sold {sale.time}:</span>
            <span className="bg-white text-[#00C853] px-3 py-1 rounded font-black border-2 border-black">
              +£{sale.profit} profit
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
