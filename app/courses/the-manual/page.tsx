import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, BookOpen, Target, TrendingUp, Shield, ChevronRight } from "lucide-react"
import Link from "next/link"
import { CheckoutButton } from "@/components/checkout-button"
import type { Metadata } from "next"
import { CourseSchema } from "@/components/course-schema"

export const metadata: Metadata = {
  title: "The Manual - Complete UK Reselling Foundation | Kickcard Academy",
  description:
    "Master the fundamentals of UK sneaker and trading card reselling. 156-page comprehensive manual. £97 one-time payment.",
  openGraph: {
    title: "The Manual - UK Reselling Foundation",
    description: "156-page comprehensive guide to building a profitable UK reselling business",
    type: "website",
  },
}

export default function TheManualPage() {
  return (
    <div className="min-h-screen bg-white">
      <CourseSchema
        name="The Manual - UK Reselling Foundation"
        description="Master the fundamentals of UK sneaker and trading card reselling. 156-page comprehensive manual."
        price="97"
        currency="GBP"
        rating="4.9"
        reviewCount="247"
      />

      <nav className="bg-white border-b-2 border-black px-4 py-3">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-700 hover:text-black font-medium transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/" className="text-gray-700 hover:text-black font-medium transition-colors">
              Courses
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-black font-bold">The Manual</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-b from-gray-50 to-white !text-black py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6">
            <span className="inline-block bg-red-500 text-black px-4 py-2 text-sm font-bold uppercase border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
              Foundation Course
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 !text-black">The Manual</h1>
          <p className="text-xl !text-black mb-8">
            Your complete reselling foundation - 156 pages of proven strategies that took me from zero to £20K inventory
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 border-2 border-gray-700 p-4 text-center">
              <div className="text-2xl font-bold !text-black">156</div>
              <div className="text-sm text-gray-700 font-medium">Pages</div>
            </div>
            <div className="bg-gray-50 border-2 border-gray-700 p-4 text-center">
              <div className="text-2xl font-bold !text-black">10</div>
              <div className="text-sm text-gray-700 font-medium">Chapters</div>
            </div>
            <div className="bg-gray-50 border-2 border-gray-700 p-4 text-center">
              <div className="text-2xl font-bold !text-black">45</div>
              <div className="text-sm text-gray-700 font-medium">Templates</div>
            </div>
            <div className="bg-gray-50 border-2 border-gray-700 p-4 text-center">
              <div className="text-2xl font-bold !text-black">∞</div>
              <div className="text-sm text-gray-700 font-medium">Updates</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-red-50 border-y-4 border-red-200">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Choose Your Package</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* The Manual - Current */}
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
              <div className="absolute -top-3 left-4 bg-green-500 !text-black px-3 py-1 text-xs font-bold uppercase border-2 border-black">
                You're Here
              </div>
              <h3 className="text-xl font-bold text-black mb-2">The Manual</h3>
              <div className="text-3xl font-bold text-black mb-4">£97</div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-black">Complete 156-page manual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-black">45 templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-black">Lifetime updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">✗</span>
                  <span className="text-gray-500">Specialist guides</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">✗</span>
                  <span className="text-gray-500">Community access</span>
                </li>
              </ul>
              <div className="text-center text-sm text-gray-600">Current Selection</div>
            </div>

            {/* The Guides - Upgrade Option */}
            <div className="bg-white border-4 border-red-500 p-6 shadow-[8px_8px_0px_0px_rgba(239,68,68,1)] relative transform md:scale-105">
              <div className="absolute -top-3 left-4 bg-red-500 text-black px-3 py-1 text-xs font-bold uppercase border-2 border-black">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-black mb-2">The Guides</h3>
              <div className="text-3xl font-bold text-red-500 mb-4">£197</div>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-black font-semibold">Everything in Manual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-black">7 specialist guides (400+ pages)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-black">AI automation playbook</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-black">International sourcing guide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">✗</span>
                  <span className="text-gray-500">1-on-1 support</span>
                </li>
              </ul>
              <Link
                href="/courses/the-guides"
                className="block text-center bg-red-500 text-black py-3 font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                Upgrade & Save £97 →
              </Link>
            </div>

            {/* Mastery - Premium Option */}
            <div className="bg-white !text-black p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
              <div className="absolute -top-3 left-4 bg-yellow-400 text-black px-3 py-1 text-xs font-bold uppercase border-2 border-black">
                Best Value
              </div>
              <h3 className="text-xl font-bold mb-2 !text-black">Mastery</h3>
              <div className="text-3xl font-bold !text-black mb-4">£397</div>
              <ul className="space-y-2 text-sm !!text-black mb-6">
                <li className="flex items-start gap-2">
                  <span className="!!text-black font-bold">✓</span>
                  <span className="!!text-black">Everything in Guides</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="!!text-black font-bold">✓</span>
                  <span className="!!text-black">Private Discord community</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="!!text-black font-bold">✓</span>
                  <span className="!!text-black">Weekly live Q&A calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="!!text-black font-bold">✓</span>
                  <span className="!!text-black">1-on-1 monthly coaching</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="!!text-black font-bold">✓</span>
                  <span className="!!text-black">Priority 24hr support</span>
                </li>
              </ul>
              <Link
                href="/courses/mastery"
                className="block text-center bg-yellow-400 text-black py-3 font-bold border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all"
              >
                Go All In →
              </Link>
            </div>
          </div>

          <p className="text-center text-sm text-gray-700 mt-8 font-medium">
            💡 Tip: 73% of successful resellers choose The Guides or higher for the complete system
          </p>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">What You'll Master</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-12 h-12 !text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-3">UK Market Mastery</h3>
                <p>
                  Understand why the UK is perfectly positioned for reselling success. Learn the strategic advantages of
                  Brexit, geographic positioning, and market maturity that give you an edge over 80% of casual sellers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-12 h-12 !text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Business Foundations</h3>
                <p>
                  Set up your business properly from day one. Legal structures, HMRC registration, business banking,
                  insurance, and financial management systems that scale with your growth.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-12 h-12 !text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Sourcing Strategies</h3>
                <p>
                  Master local sourcing (charity shops, car boot sales, Facebook Marketplace), online sourcing (eBay
                  strategies, international importing), retail arbitrage, and building supplier relationships that give
                  you access to inventory others can't find.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-12 h-12 !text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Multi-Platform Selling</h3>
                <p>
                  Optimize your approach for eBay, Vinted, Depop, StockX, and GOAT. Understand buyer psychology on each
                  platform and build a multi-platform strategy that maximizes your reach and profits.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Full Curriculum */}
      <section id="curriculum" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Complete Curriculum</h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            10 comprehensive chapters covering everything from market analysis to scaling your business
          </p>

          <div className="space-y-6">
            {/* Chapter 1 */}
            <Card >
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3">Chapter 1: Market Overview & Opportunity</h3>
                <p className="mb-4">
                  Understand the £2.2 billion UK market opportunity and why now is the perfect time to start.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>
                      UK market size and growth (£1.4B sneakers, £800M trading cards, 15-20% annual growth)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>
                      Strategic advantages: Brexit barriers, geographic positioning, market maturity
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>
                      Realistic earnings: £200-500/month (months 1-3), £500-2,000/month (months 4-12),
                      £2,000-5,000+/month (year 2+)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>
                      Why diversifying across sneakers AND trading cards protects your income
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>Understanding market timing and seasonal patterns</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Chapter 2 */}
            <Card >
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3">Chapter 2: Getting Started</h3>
                <p className="mb-4">
                  Build the legal and operational foundation that makes everything else possible.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>Sole trader vs limited company: which structure is right for you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>HMRC registration step-by-step (free, takes 10 minutes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>
                      Business banking: best options for resellers (Starling, Monzo, traditional banks)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>
                      Essential insurance: public liability, product liability, inventory insurance
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>
                      Three investment tiers: £500 starter, £1,000 growth, £2,000+ serious budget
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>
                      Essential tools: authentication equipment, photography setup, workspace organization
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>Your first purchase strategy and making your first sale</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Chapter 3 */}
            <Card >
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3">Chapter 3: Sourcing Strategies</h3>
                <p className="mb-4">
                  The art of finding gold where others see nothing - your competitive advantage.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>
                      Local sourcing: charity shops, car boot sales, Facebook Marketplace, Gumtree
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>
                      Online sourcing: eBay strategies (misspellings, poor categories, international sites)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>
                      Retail arbitrage: clearance sections, seasonal timing, price matching
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>
                      Building supplier relationships: collectors, small retailers, wholesalers
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>Live auction platforms: WhatNot and Tilt strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>
                      International importing: post-Brexit EU importing, US importing, Asian markets
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>Bulk purchasing and wholesale opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>Seasonal and trend-based sourcing for maximum margins</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Chapter 4 */}
            <Card >
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3">Chapter 4: Selling Platforms</h3>
                <p className="mb-4">
                  Master every major platform and build a multi-platform strategy that maximizes reach.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>
                      eBay mastery: listing optimization, title formulas, pricing psychology, Best Offer strategies
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>
                      Vinted strategies: zero seller fees, casual goldmine, conversational listings
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>
                      Depop for Gen Z: lifestyle-focused selling, aesthetic consistency, social commerce
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>
                      StockX and GOAT: when to use specialist platforms, fee structures, sourcing strategies
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>
                      Multi-platform strategy: making platforms work together, not compete
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Chapter 5 */}
            <Card >
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3">Chapter 5: Pricing Strategies</h3>
                <p className="mb-4">
                  Pricing formulas and market analysis techniques that ensure profitable sales.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>Understanding market dynamics and micro-markets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>
                      Platform-specific pricing psychology (eBay, Vinted, Depop, StockX)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>
                      Charm pricing, bundle pricing, scarcity pricing, premium positioning
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>
                      Timing your pricing strategy: release timing, seasonal patterns, market cycles
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>
                      Advanced techniques: auction strategies, graduated pricing, loss leader pricing
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>Market analysis tools: StockX, GOAT, Terapeak, TCGPlayer</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Plus 5 More Advanced Chapters */}
            <Card className="bg-gray-50 border-white/10">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3 !!text-black">Plus 5 More Advanced Chapters</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2 !!text-black">Chapter 6: Building Your Brand</h4>
                    <p className="text-sm !!text-black">
                      Personal vs business brand, the three pillars (expertise, authenticity, reliability), brand voice,
                      platform-specific strategies, email list building
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 !!text-black">Chapter 7: Growth Strategies</h4>
                    <p className="text-sm !!text-black">
                      When to scale inventory, hiring (VAs, photographers, pickers), three growth paths (product range,
                      platform, team)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 !!text-black">Chapter 8: Tax & Accounting</h4>
                    <p className="text-sm !!text-black">
                      Tax basics, keeping records, quarterly payments, VAT registration, using accountants vs software,
                      maximizing allowable expenses
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 !!text-black">Chapter 9: Customer Service Excellence</h4>
                    <p className="text-sm !!text-black">
                      Handling returns, dealing with difficult customers, building buyer trust through service,
                      templates for common scenarios
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-bold mb-2 !!text-black">Chapter 10: Avoiding Mistakes & Pitfalls</h4>
                    <p className="text-sm !!text-black">
                      15 most common and expensive mistakes (poor authentication, overbuying, wrong platforms, weak
                      photos), scams to watch for, competitive moats
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-4 bg-zinc-50 dark:bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground dark:!text-black">Who This Is For</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card >
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">✓ Perfect For You If:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>You're a complete beginner who's never sold anything online</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>You want to build a legitimate, sustainable business</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>You're willing to put in 10-15 hours per week consistently</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>You want to learn from someone with 40 years of experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 !text-black" />
                    </div>
                    <span>You're based in the UK and want to leverage local advantages</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card >
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">✗ Not For You If:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="!text-black font-bold text-sm">✗</span>
                    </div>
                    <span>You're looking for "get rich quick" schemes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="!text-black font-bold text-sm">✗</span>
                    </div>
                    <span>You want passive income without effort</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="!text-black font-bold text-sm">✗</span>
                    </div>
                    <span>You're not willing to learn authentication skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="!text-black font-bold text-sm">✗</span>
                    </div>
                    <span>You expect results without consistent effort</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="!text-black font-bold text-sm">✗</span>
                    </div>
                    <span>You're not prepared to invest in your business</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">What Makes This Different</h2>
          <div className="space-y-6">
            <Card >
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3">Complete System, Not Fragmented Tips</h3>
                <p>
                  You're not getting random advice from forums or YouTube videos. This is a complete, meticulously
                  designed system that guides you from complete beginner to profitable reseller. Every chapter builds on
                  the previous one, creating a solid foundation for your business.
                </p>
              </CardContent>
            </Card>

            <Card >
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3">40 Years of Real-World Experience</h3>
                <p>
                  This isn't theoretical knowledge or trends read about in forums. It's practical wisdom gained from
                  real-world successes and failures over four decades. You're learning from someone who has navigated
                  every boom and bust cycle, fallen prey to every scam, and made every mistake you can imagine.
                </p>
              </CardContent>
            </Card>

            <Card >
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3">UK-Specific Strategies</h3>
                <p>
                  Most reselling guides are written for the US market. This manual is specifically designed for UK
                  resellers, covering Brexit advantages, UK-specific platforms, HMRC registration, UK tax implications,
                  and geographic positioning between US and European markets.
                </p>
              </CardContent>
            </Card>

            <Card >
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3">Honest, Realistic Expectations</h3>
                <p>
                  No "make £10,000 in your first month" promises. Just realistic projections based on years of
                  experience: £200-500/month in months 1-3, £500-2,000/month in months 4-12, and £2,000-5,000+/month
                  after year one with consistent effort.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white !text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 !text-black">Ready to Start Your Reselling Journey?</h2>
          <p className="text-xl text-zinc-300 mb-8 !text-black">
            Get instant access to all 10 chapters and start building your profitable reselling business today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <CheckoutButton productId="1" price={97} />
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
            <span>✓ Instant digital access</span>
            <span>✓ 50,000+ words of content</span>
            <span>✓ Lifetime updates</span>
            <span>✓ 30-day money-back guarantee</span>
          </div>
        </div>
      </section>
    </div>
  )
}
