"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wallet, Clock, TrendingUp, Zap } from "lucide-react"
import { BrutalButton } from "@/components/ui/brutal-button"

export function ObjectionHandler() {
  return (
    <section className="py-20 px-4 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4 uppercase text-black">"But what if..."</h2>
        <p className="text-xl text-center text-black mb-12 font-bold">Every concern you have, answered with proof</p>

        <Tabs defaultValue="money" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto p-0 mb-8">
            <TabsTrigger
              value="money"
              className="bg-white border-4 border-black data-[state=active]:bg-[#FF4444] data-[state=active]:text-white brutal-shadow-sm h-auto py-4 font-bold uppercase"
            >
              <Wallet className="w-5 h-5 mr-2" />
              No Money
            </TabsTrigger>
            <TabsTrigger
              value="time"
              className="bg-white border-4 border-black data-[state=active]:bg-[#FF4444] data-[state=active]:text-white brutal-shadow-sm h-auto py-4 font-bold uppercase"
            >
              <Clock className="w-5 h-5 mr-2" />
              No Time
            </TabsTrigger>
            <TabsTrigger
              value="saturated"
              className="bg-white border-4 border-black data-[state=active]:bg-[#FF4444] data-[state=active]:text-white brutal-shadow-sm h-auto py-4 font-bold uppercase"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Saturated
            </TabsTrigger>
            <TabsTrigger
              value="complex"
              className="bg-white border-4 border-black data-[state=active]:bg-[#FF4444] data-[state=active]:text-white brutal-shadow-sm h-auto py-4 font-bold uppercase"
            >
              <Zap className="w-5 h-5 mr-2" />
              Too Complex
            </TabsTrigger>
          </TabsList>

          <TabsContent value="money" className="mt-8">
            <Card className="border-4 border-black brutal-shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black mb-4 uppercase text-black">"I don't have money to start"</h3>
                <p className="text-black mb-6 text-lg">Our "Broke Sneakerhead" guide shows how to start with £0-£50:</p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-[#FAFAFA] border-2 border-black p-4">
                    <h4 className="font-bold mb-2 text-black">Week 1-2: £0-£50 Start</h4>
                    <ul className="text-sm space-y-2 text-black">
                      <li>• Retail arbitrage on sale items</li>
                      <li>• Facebook Marketplace flips</li>
                      <li>• Card shop clearance deals</li>
                      <li>• Target: £100-£200 profit</li>
                    </ul>
                  </div>
                  <div className="bg-[#FAFAFA] border-2 border-black p-4">
                    <h4 className="font-bold mb-2 text-black">Week 3-4: £200+ Capital</h4>
                    <ul className="text-sm space-y-2 text-black">
                      <li>• StockX bulk buys</li>
                      <li>• Wholesale supplier intro</li>
                      <li>• Convention pre-orders</li>
                      <li>• Target: £400-£600 profit</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-[#00C853] text-white p-4 border-4 border-black mb-4">
                  <p className="font-bold">
                    Real Example: Marcus started with £30 in sale Dunks, turned it into £180 in 2 weeks, now runs £5K+
                    inventory.
                  </p>
                </div>
                <BrutalButton
                  size="lg"
                  onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                >
                  See Full Broke Guide Preview
                </BrutalButton>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="time" className="mt-8">
            <Card className="border-4 border-black brutal-shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black mb-4 uppercase text-black">"I don't have time for this"</h3>
                <p className="text-black mb-6 text-lg">The 15-Minute Daily System (included in all tiers):</p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-4 bg-[#FAFAFA] border-2 border-black p-4">
                    <div className="bg-[#FF4444] text-white font-black px-3 py-1 text-sm">5 MIN</div>
                    <div>
                      <h4 className="font-bold mb-1 text-black">Morning Price Checks</h4>
                      <p className="text-sm text-black">Automated alerts tell you what needs repricing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-[#FAFAFA] border-2 border-black p-4">
                    <div className="bg-[#FF4444] text-white font-black px-3 py-1 text-sm">7 MIN</div>
                    <div>
                      <h4 className="font-bold mb-1 text-black">Listing Optimization</h4>
                      <p className="text-sm text-black">Copy-paste templates for quick updates</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-[#FAFAFA] border-2 border-black p-4">
                    <div className="bg-[#FF4444] text-white font-black px-3 py-1 text-sm">3 MIN</div>
                    <div>
                      <h4 className="font-bold mb-1 text-black">Supplier Check-ins</h4>
                      <p className="text-sm text-black">Quick WhatsApp template messages</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#00C853] text-white p-4 border-4 border-black mb-4">
                  <p className="font-bold">
                    Sarah works full-time as a nurse, runs her reselling on lunch breaks. £800-£1,200/month passive.
                  </p>
                </div>
                <BrutalButton
                  size="lg"
                  onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Time-Saving Systems
                </BrutalButton>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="saturated" className="mt-8">
            <Card className="border-4 border-black brutal-shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black mb-4 uppercase text-black">"The market is saturated"</h3>
                <p className="text-black mb-6 text-lg">Let's look at actual numbers, not feelings:</p>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-6 bg-[#FAFAFA] border-4 border-black">
                    <div className="text-4xl font-black text-[#FF4444] mb-2">£2.2B</div>
                    <div className="text-sm font-bold uppercase">UK Resale Market 2024</div>
                  </div>
                  <div className="text-center p-6 bg-[#FAFAFA] border-4 border-black">
                    <div className="text-4xl font-black text-[#00C853] mb-2">+18%</div>
                    <div className="text-sm font-bold uppercase">Year-Over-Year Growth</div>
                  </div>
                  <div className="text-center p-6 bg-[#FAFAFA] border-4 border-black">
                    <div className="text-4xl font-black text-[#1A1A1A] mb-2">47K</div>
                    <div className="text-sm font-bold uppercase">Active UK Sellers</div>
                  </div>
                </div>
                <div className="bg-white border-4 border-[#FF4444] p-6 mb-4">
                  <h4 className="font-black text-lg mb-3 uppercase text-black">The Real Problem:</h4>
                  <p className="text-black mb-3">
                    It's not that the market is saturated—it's that 90% of sellers are doing it WRONG:
                  </p>
                  <ul className="space-y-2 text-sm text-black">
                    <li>• Chasing hype releases everyone else wants</li>
                    <li>• Using terrible photos and generic descriptions</li>
                    <li>• No authentication knowledge = buying fakes</li>
                    <li>• Zero supplier relationships = paying retail</li>
                  </ul>
                </div>
                <div className="bg-[#00C853] text-white p-4 border-4 border-black mb-4">
                  <p className="font-bold">
                    While &quot;everyone&quot; fights over Jordan 1s, I quietly move £3K in vintage basketball cards
                    monthly. Market knowledge &gt; following the herd.
                  </p>
                </div>
                <BrutalButton
                  size="lg"
                  onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Learn What Actually Works
                </BrutalButton>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="complex" className="mt-8">
            <Card className="border-4 border-black brutal-shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-black mb-4 uppercase text-black">"This seems too complex"</h3>
                <p className="text-black mb-6 text-lg">Here's the exact first week, step-by-step (no guessing):</p>
                <div className="space-y-3 mb-6">
                  {[
                    { day: "Day 1", task: "Read Chapter 1-2", time: "45 min", action: "Understanding the market" },
                    {
                      day: "Day 2",
                      task: "Create eBay + Depop accounts",
                      time: "30 min",
                      action: "Follow setup checklist",
                    },
                    {
                      day: "Day 3",
                      task: "First purchase: Sale rack arbitrage",
                      time: "2 hours",
                      action: "Use provided store list",
                    },
                    {
                      day: "Day 4",
                      task: "Photography + listing",
                      time: "1 hour",
                      action: "Copy-paste templates",
                    },
                    { day: "Day 5", task: "Price optimization", time: "20 min", action: "Use pricing calculator" },
                    { day: "Day 6-7", task: "Monitor + adjust", time: "15 min/day", action: "Check dashboard" },
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-4 bg-[#FAFAFA] border-2 border-black p-4">
                      <div className="bg-[#FF4444] text-white font-black px-4 py-2 text-sm min-w-[80px] text-center">
                        {step.day}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-black">{step.task}</h4>
                        <p className="text-sm text-black">{step.action}</p>
                      </div>
                      <div className="text-sm font-bold text-black">{step.time}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-[#00C853] text-white p-4 border-4 border-black mb-4">
                  <p className="font-bold">
                    Every single step has screenshots, templates, and checklists. You literally can't get lost.
                  </p>
                </div>
                <BrutalButton
                  size="lg"
                  onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                >
                  See Complete Week 1 Plan
                </BrutalButton>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
