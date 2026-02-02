"use client"

import { useState } from "react"
import { Calculator, TrendingUp } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { BrutalButton } from "./ui/brutal-button"

export function ResultsCalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState([10])
  const [startingCapital, setStartingCapital] = useState([500])

  // Conservative calculations based on 20-30% profit margins
  const calculateMonthly = () => {
    const hours = hoursPerWeek[0]
    const capital = startingCapital[0]

    // Conservative estimate: £15-25 profit per hour for beginners
    const minProfit = Math.floor(hours * 4 * 15) // weekly hours × 4 weeks × £15
    const maxProfit = Math.floor(hours * 4 * 25) // weekly hours × 4 weeks × £25

    // Capital allows for more inventory turnover
    const capitalBonus = Math.floor(capital * 0.4) // 40% monthly return on capital

    return {
      month1Min: minProfit,
      month1Max: maxProfit + capitalBonus,
      month3Min: Math.floor(minProfit * 2.5),
      month3Max: Math.floor((maxProfit + capitalBonus) * 3),
    }
  }

  const results = calculateMonthly()

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#FAFAFA] border-4 border-black brutal-shadow-xl p-8 md:p-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calculator className="w-8 h-8" />
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Calculate Your Potential</h2>
          </div>

          <p className="text-center text-black mb-8 text-lg">
            See realistic projections based on your time and starting capital
          </p>

          <div className="space-y-8 mb-8">
            <div>
              <div className="flex justify-between mb-3">
                <label className="font-bold uppercase text-sm tracking-wide">Hours Per Week</label>
                <span className="font-black text-2xl">{hoursPerWeek[0]}</span>
              </div>
              <Slider value={hoursPerWeek} onValueChange={setHoursPerWeek} min={2} max={20} step={1} className="mb-2" />
              <div className="flex justify-between text-xs text-black">
                <span>2 hrs (side hustle)</span>
                <span>20 hrs (part-time)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-3">
                <label className="font-bold uppercase text-sm tracking-wide">Starting Capital</label>
                <span className="font-black text-2xl">£{startingCapital[0]}</span>
              </div>
              <Slider
                value={startingCapital}
                onValueChange={setStartingCapital}
                min={50}
                max={1000}
                step={50}
                className="mb-2"
              />
              <div className="flex justify-between text-xs text-black">
                <span>£50 (minimal)</span>
                <span>£1,000 (accelerated)</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border-4 border-black p-6 brutal-shadow">
              <p className="text-sm font-bold uppercase tracking-wide text-black mb-2">Month 1 Projection</p>
              <p className="text-3xl font-black text-[#00C853]">
                £{results.month1Min} - £{results.month1Max}
              </p>
              <p className="text-xs text-black mt-2">Conservative estimate for beginners</p>
            </div>

            <div className="bg-white border-4 border-black p-6 brutal-shadow">
              <p className="text-sm font-bold uppercase tracking-wide text-black mb-2">Month 3 Projection</p>
              <p className="text-3xl font-black text-[#FF4444]">
                £{results.month3Min} - £{results.month3Max}
              </p>
              <p className="text-xs text-black mt-2">As you build inventory & expertise</p>
            </div>
          </div>

          <div className="bg-[#FF4444] border-4 border-black p-6 brutal-shadow mb-6">
            <div className="flex items-start gap-3 text-white">
              <TrendingUp className="w-6 h-6 flex-shrink-0 mt-1 text-white" />
              <p className="text-sm font-bold text-white leading-relaxed">
                These are conservative projections. Many students exceed these numbers by month 2-3. Your actual results
                depend on effort, market conditions, and following the system.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <BrutalButton size="lg">Start Earning This Amount</BrutalButton>
          </div>
        </div>
      </div>
    </section>
  )
}
