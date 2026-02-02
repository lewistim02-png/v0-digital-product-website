import { Lock } from "lucide-react"

export function FounderCredibility() {
  const stats = [
    { label: "3+ Years Active Selling", highlight: false },
    { label: "£20,000 Current Inventory", highlight: true },
    { label: "500+ Verified Transactions", highlight: false },
    { label: "Vendor at Major UK Conventions", highlight: false },
    { label: "£8-12K Monthly Turnover", highlight: true },
    { label: "Built Multiple 6-Figure Businesses", highlight: false },
  ]

  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-6">
          <h2 className="text-3xl md:text-4xl font-black text-center uppercase tracking-tight bg-[#FF4444] text-white px-6 py-3 border-4 border-black brutal-shadow">
            Why Listen to Me?
          </h2>
        </div>
        <p className="text-center text-black text-lg mb-8 max-w-2xl mx-auto font-medium">
          I'm not here to flex cars or show lifestyle. Here are the facts about my operation:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white border-4 border-black p-6 brutal-shadow-lg text-center hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all ${
                stat.highlight ? "bg-[#00C853]/10" : ""
              }`}
            >
              <p className="font-black text-xl uppercase tracking-wide text-black">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 text-base font-bold text-black bg-[#FAFAFA] border-2 border-black px-6 py-3 max-w-fit mx-auto">
          <Lock className="w-5 h-5" />
          <span>Identity Verified by Stripe</span>
        </div>
      </div>
    </section>
  )
}
