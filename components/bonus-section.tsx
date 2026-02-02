import { Gift, TrendingUp, MessageCircle, Calculator } from "lucide-react"

export function BonusSection() {
  const bonuses = [
    {
      title: "Quick Flip List",
      subtitle: "20 Items to Buy Today",
      value: "£97",
      icon: TrendingUp,
      description: "Current high-margin items with exact buy/sell prices",
    },
    {
      title: "Negotiation Scripts",
      subtitle: "That Actually Work",
      value: "£47",
      icon: MessageCircle,
      description: "Word-for-word scripts converting at 32%",
    },
    {
      title: "Tax Optimization Guide",
      subtitle: "For UK Resellers",
      value: "£67",
      icon: Calculator,
      description: "Legal strategies saving £3K+ annually",
    },
  ]

  const totalValue = bonuses.reduce((sum, bonus) => sum + Number.parseInt(bonus.value.replace("£", "")), 0)

  return (
    <section className="py-20 px-4 bg-[#00C853]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-3 bg-white border-4 border-black brutal-shadow-sm font-black uppercase tracking-wide text-xl mb-6">
            <Gift className="w-6 h-6 inline-block mr-2" />
            Order Today & Get These Free
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            £{totalValue} Worth of Bonuses - Absolutely Free
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {bonuses.map((bonus, idx) => (
            <div key={idx} className="bg-white border-4 border-black p-6 brutal-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-[#1A1A1A] border-2 border-black flex items-center justify-center">
                  <bonus.icon className="w-6 h-6 text-white" />
                </div>
                <div className="bg-[#FF4444] border-2 border-black px-3 py-1">
                  <span className="font-black text-white text-sm">{bonus.value} VALUE</span>
                </div>
              </div>
              <h3 className="font-black text-xl uppercase tracking-tight mb-1">{bonus.title}</h3>
              <p className="text-sm font-bold text-black mb-3">{bonus.subtitle}</p>
              <p className="text-sm text-black">{bonus.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border-4 border-black p-8 brutal-shadow-lg text-center">
          <p className="text-2xl font-black uppercase tracking-tight">
            Total Bonus Value: £{totalValue} - FREE with Any Course Purchase
          </p>
        </div>
      </div>
    </section>
  )
}
