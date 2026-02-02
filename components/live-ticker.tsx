"use client"

export function LiveTicker() {
  const deals = [
    "📈 Jordan 4 Black Cat: +£45 profit today",
    "🃏 Pokemon 151 Box: +£120 this week",
    "👟 Yeezy Slides: +£25 flip",
    "⚡ Travis Scott Low: +£180 profit",
    "💎 Charizard VMAX: +£95 sold",
    "🔥 Dunk Low Panda: +£35 quick flip",
  ]

  // Double the array for seamless loop
  const tickerItems = [...deals, ...deals]

  return (
    <div className="bg-[#1A1A1A] text-white py-3 overflow-hidden border-b-4 border-[#FF4444]">
      <div className="ticker-animation flex gap-12 whitespace-nowrap">
        {tickerItems.map((deal, index) => (
          <span key={index} className="font-mono text-sm font-bold">
            {deal}
          </span>
        ))}
      </div>
    </div>
  )
}
