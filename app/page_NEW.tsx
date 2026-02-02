import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { CourseSchema, OrganizationSchema, ProductSchema, FAQSchema, ReviewSchema } from "./schema"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">KA</div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#sample-content" className="hover:text-primary">Course</Link>
            <Link href="#testimonials" className="hover:text-primary">Proof</Link>
            <Link href="#faq" className="hover:text-primary">FAQ</Link>
            <Link href="/courses/the-manual">
              <Button>Get Started</Button>
            </Link>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Link href="/courses/the-manual">
              <Button size="sm">Start Now</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Ticker Tape */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <span className="inline-block px-4">📈 Jordan 4 Black Cat: +£45 profit today</span>
          <span className="inline-block px-4">🃏 Pokemon 151 Box: +£120 this week</span>
          <span className="inline-block px-4">👟 Yeezy Slides: +£25 flip</span>
          <span className="inline-block px-4">⚡ Travis Scott Low: +£180 profit</span>
          <span className="inline-block px-4">💎 Charizard VMAX: +£95 sold</span>
          <span className="inline-block px-4">🔥 Dunk Low Panda: +£35 quick flip</span>
          <span className="inline-block px-4">📈 Jordan 4 Black Cat: +£45 profit today</span>
          <span className="inline-block px-4">🃏 Pokemon 151 Box: +£120 this week</span>
          <span className="inline-block px-4">👟 Yeezy Slides: +£25 flip</span>
          <span className="inline-block px-4">⚡ Travis Scott Low: +£180 profit</span>
          <span className="inline-block px-4">💎 Charizard VMAX: +£95 sold</span>
          <span className="inline-block px-4">🔥 Dunk Low Panda: +£35 quick flip</span>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-12 md:py-24">
          <div className="flex flex-col items-center text-center space-y-8">
            <img 
              src="/kickcard-academy-logo.png" 
              alt="Kickcard Academy Logo" 
              className="w-24 h-24 md:w-32 md:h-32"
            />
            
            <h1 className="text-4xl md:text-6xl font-bold max-w-4xl">
              The Complete Sneaker & Trading Card Reselling Course
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              You don't need thousands to start. I'll show you how to turn £100-200 into consistent £1,000+ monthly income—even if you're working full-time and have just 2-4 hours per week.
            </p>

            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 max-w-2xl">
              <p className="text-lg font-semibold">
                ⚠️ Warning: This complete course includes my actual supplier contacts and pricing formulas. Limited to 100 serious resellers only.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl text-left">
              <div className="flex items-start space-x-2">
                <span className="text-2xl">📚</span>
                <span className="text-sm font-medium">31 PDFs, 60MB</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-2xl">📞</span>
                <span className="text-sm font-medium">Real supplier contacts</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-2xl">💰</span>
                <span className="text-sm font-medium">Proven pricing formulas</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-2xl">🎓</span>
                <span className="text-sm font-medium">Lifetime updates</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/courses/the-manual">
                <Button size="lg" className="text-lg px-8">
                  Start Your £100 to £1,000 Journey — £197
                </Button>
              </Link>
              <Link href="/courses/the-manual">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  View Pricing Options
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>1,247 Students</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Instant Access</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>30-Day Guarantee</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold">500+ Sales</div>
                  <div className="text-sm text-muted-foreground">This Year</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold">Verified</div>
                  <div className="text-sm text-muted-foreground">Convention Vendor</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold">30-Day</div>
                  <div className="text-sm text-muted-foreground">Guarantee</div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg p-6 max-w-2xl w-full">
              <p className="text-lg font-bold mb-2">Limited Time: 73 spots left at launch price</p>
              <p className="text-sm">🔥 Limited Time: First 100 students get founder pricing - Only 73 spots left</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="/courses/the-manual" className="flex-1">
                  <Button size="lg" variant="secondary" className="w-full">
                    Start Your Journey — £197
                  </Button>
                </Link>
                <Link href="/courses/the-guides" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full bg-white text-orange-600 hover:bg-gray-50">
                    See All Options →
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
                <span>✅ SSL Secured Checkout</span>
                <span>✅ 1,247 Students Enrolled</span>
                <span>✅ 30-Day Money Back</span>
                <span>✅ Lifetime Updates</span>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: Why Kickcard Academy is Different */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Why Kickcard Academy is Different
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Most courses give you generic American advice. We're built for the UK market with advantages competitors don't have.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* UK-Focused */}
              <Card className="border-2 border-blue-200">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">🇬🇧</div>
                  <h3 className="text-2xl font-bold mb-3">UK-FOCUSED (Not American)</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>6.4MB Post-Brexit Importing Guide</strong> - Navigate customs, VAT, duty calculations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>Geographic Arbitrage</strong> - Source from US, sell to EU (and reverse)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>Competitive Barrier</strong> - 80% of UK resellers avoid cross-border complexity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>UK Market Data</strong> - £1.4B sneakers + £800M trading cards annually</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm italic">While others struggle with Brexit paperwork, you'll unlock inventory they can't access.</p>
                </CardContent>
              </Card>

              {/* Dual-Market Protection */}
              <Card className="border-2 border-purple-200">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">🔄</div>
                  <h3 className="text-2xl font-bold mb-3">DUAL-MARKET PROTECTION</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>Counter-Cyclical Income</strong> - When one market slows, the other picks up</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>Real Example:</strong> Christmas = sneaker boom, cards quiet; February = cards explode, sneakers drop</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>Risk Diversification</strong> - Market crashes in one category won't wipe you out</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>Overlapping Skills</strong> - Authentication, photography, customer service transfer between both</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm italic">I watched sneaker-only resellers lose everything when Nike flooded the market. You'll be protected.</p>
                </CardContent>
              </Card>

              {/* AI & Automation Edge */}
              <Card className="border-2 border-green-200">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold mb-3">AI & AUTOMATION EDGE</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>25-Page AI Reseller's Playbook</strong> - 18 months of tested strategies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>Discord Bots</strong> - Notify (£50/mo) + Endurance (£35/mo) for restock alerts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>CheckCheck AI</strong> - £20/week, saves 8+ hours, charge 10-15% more</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span><strong>TikTok Trend Mining</strong> - Predicted Carhartt WIP explosion, Pokemon PSA 9 surge</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm italic">"Made £200 profit while sleeping on Dunk Low Panda restock" - Real student example</p>
                </CardContent>
              </Card>

              {/* 13 Platform Mastery */}
              <Card className="border-2 border-orange-200">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-2xl font-bold mb-3">13 PLATFORM MASTERY</h3>
                  <div className="space-y-3 text-muted-foreground text-sm">
                    <div>
                      <p className="font-semibold mb-1">Sneaker Platforms:</p>
                      <p>GOAT (1.8MB) | StockX (2.3MB) | KLEKT (1.4MB) | Laced (2.3MB)</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Trading Card Platforms:</p>
                      <p>COMC (2.6MB) | PWCC (2.5MB) | TCGPlayer (3.4MB)</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">General Reselling:</p>
                      <p>eBay (2.5MB) | Depop (2.3MB) | Grailed (1.8MB)</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Marketing & Strategy:</p>
                      <p>Instagram (2.1MB) | Live Selling (1.9MB) | Multi-Platform (2.4MB)</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm italic">Competitors charge £30-50 per platform separately. You get all 13 with 2.2MB guides each.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* NEW: What You're Actually Getting */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              What You're Actually Getting
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Not just theory - 31 PDFs, 60MB, 400+ pages of actionable content
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* The Manual */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">THE MANUAL</h3>
                  <p className="text-sm text-muted-foreground mb-4">11 Chapters, 156+ Pages</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Market Overview (£1.4B sneakers, £800M cards)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Getting Started with £100-200</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Sourcing Strategies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Selling Platforms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Pricing Strategies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Building Your Brand</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Scaling Your Business</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Social Media Strategy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Success Stories & Advanced Tactics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* The Guides */}
              <Card className="border-2 border-blue-200">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">THE GUIDES</h3>
                  <p className="text-sm text-muted-foreground mb-4">7 Specialized Guides, 18MB</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Getting Started When Broke (944KB)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span><strong>AI Reseller's Playbook (3.1MB)</strong> ⭐</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Sneaker Authentication (401KB)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Financial Management (1.2MB)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Photography & Listing (1.9MB)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span><strong>Post-Brexit Importing (6.4MB)</strong> 🇬🇧</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Trading Card Authentication (947KB)</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-xs italic">⭐ EXCLUSIVE - Most courses don't cover AI tools<br/>🇬🇧 UK EXCLUSIVE - Post-Brexit advantage</p>
                </CardContent>
              </Card>

              {/* Mastery Modules */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">MASTERY MODULES</h3>
                  <p className="text-sm text-muted-foreground mb-4">13 Platforms, 28MB</p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold mb-1">Sneaker Platforms:</p>
                      <p className="text-xs">GOAT (1.8MB), StockX (2.3MB), KLEKT (1.4MB), Laced (2.3MB)</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Trading Card Platforms:</p>
                      <p className="text-xs">COMC (2.6MB), PWCC (2.5MB), TCGPlayer (3.4MB)</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">General Reselling:</p>
                      <p className="text-xs">eBay (2.5MB), Depop (2.3MB), Grailed (1.8MB)</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Marketing & Strategy:</p>
                      <p className="text-xs">Instagram (2.1MB), Live Selling (1.9MB), Multi-Platform (2.4MB), Branding (2.2MB)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6">
                <p className="text-3xl font-bold mb-2">TOTAL: 31 PDFs | 60MB | 400+ Pages</p>
                <p className="text-sm">Compare that to Udemy's 37 minutes of video...</p>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: Competitor Comparison Table */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Kickcard Academy vs. The Competition
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              More content than Udemy, cheaper than cook groups, one-time payment vs. Eric Michael's £3,500/year
            </p>

            <div className="overflow-x-auto">
              <table className="w-full max-w-5xl mx-auto bg-white rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <tr>
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">Kickcard Academy</th>
                    <th className="p-4 text-center">Udemy Courses</th>
                    <th className="p-4 text-center">Cook Groups</th>
                    <th className="p-4 text-center">Eric Michael</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Price</td>
                    <td className="p-4 text-center bg-green-50"><strong>£397 one-time</strong></td>
                    <td className="p-4 text-center">£20</td>
                    <td className="p-4 text-center">£600/year</td>
                    <td className="p-4 text-center">£3,500/year</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Sneakers</td>
                    <td className="p-4 text-center bg-green-50">✅</td>
                    <td className="p-4 text-center">✅</td>
                    <td className="p-4 text-center">✅</td>
                    <td className="p-4 text-center">❌</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Trading Cards</td>
                    <td className="p-4 text-center bg-green-50">✅</td>
                    <td className="p-4 text-center">❌</td>
                    <td className="p-4 text-center">❌</td>
                    <td className="p-4 text-center">✅</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">UK-Focused</td>
                    <td className="p-4 text-center bg-green-50">✅</td>
                    <td className="p-4 text-center">❌</td>
                    <td className="p-4 text-center">❌</td>
                    <td className="p-4 text-center">❌</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Post-Brexit Guide</td>
                    <td className="p-4 text-center bg-green-50">✅ 6.4MB</td>
                    <td className="p-4 text-center">❌</td>
                    <td className="p-4 text-center">❌</td>
                    <td className="p-4 text-center">❌</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">AI Tools Training</td>
                    <td className="p-4 text-center bg-green-50">✅ 25 pages</td>
                    <td className="p-4 text-center">❌</td>
                    <td className="p-4 text-center">Partial</td>
                    <td className="p-4 text-center">❌</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Platform Guides</td>
                    <td className="p-4 text-center bg-green-50"><strong>13 (28MB)</strong></td>
                    <td className="p-4 text-center">1-2 (&lt;5MB)</td>
                    <td className="p-4 text-center">N/A</td>
                    <td className="p-4 text-center">1-2</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Content Size</td>
                    <td className="p-4 text-center bg-green-50"><strong>60MB</strong></td>
                    <td className="p-4 text-center">&lt;5MB</td>
                    <td className="p-4 text-center">N/A</td>
                    <td className="p-4 text-center">Unknown</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Lifetime Access</td>
                    <td className="p-4 text-center bg-green-50">✅</td>
                    <td className="p-4 text-center">✅</td>
                    <td className="p-4 text-center">❌</td>
                    <td className="p-4 text-center">❌</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Supplier Contacts</td>
                    <td className="p-4 text-center bg-green-50">✅</td>
                    <td className="p-4 text-center">❌</td>
                    <td className="p-4 text-center">❌</td>
                    <td className="p-4 text-center">✅</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg font-semibold mb-4">Bottom line: More value than all of them combined.</p>
              <Link href="/courses/the-manual">
                <Button size="lg" className="text-lg px-8">
                  Get Started — £197
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* NEW: Value Stack Visualization */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              What You're Really Getting
            </h2>

            <div className="max-w-2xl mx-auto">
              <Card className="border-2 border-blue-200">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>11-Chapter Manual (156+ pages)</span>
                      <span className="font-bold">£97</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>7 Specialized Guides (£21 each)</span>
                      <span className="font-bold">£147</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>13 Platform Modules (£20 each)</span>
                      <span className="font-bold">£260</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Supplier Contacts</span>
                      <span className="font-bold">£50</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Pricing Formulas</span>
                      <span className="font-bold">£30</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Authentication Training</span>
                      <span className="font-bold">£40</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t-2 border-gray-300">
                      <span className="text-lg font-semibold">TOTAL VALUE:</span>
                      <span className="text-lg font-bold">£624</span>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6 text-center">
                      <p className="text-sm mb-2">YOUR PRICE:</p>
                      <p className="text-4xl font-bold mb-2">£397</p>
                      <p className="text-sm">YOU SAVE: £227 (36% OFF)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 text-center">
                <Link href="/courses/the-manual">
                  <Button size="lg" className="text-lg px-8">
                    Get Complete Access Now — £397
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ENHANCED: Guarantee Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-6xl mb-6">💰</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Make £500 or Get Your Money Back
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Follow our system for 90 days. If you don't make at least £500 profit from your first flips, we'll refund every penny. No questions asked.
              </p>
              <p className="text-lg font-semibold mb-4">
                We're that confident in this content.
              </p>
              <p className="text-sm text-muted-foreground italic">
                (Must show proof of completing first 3 chapters and making at least 5 sourcing attempts)
              </p>
            </div>
          </div>
        </section>

        {/* Schema Markup - Hidden but crawlable */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(CourseSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ProductSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ReviewSchema) }}
        />

        {/* Rest of the page continues with existing sections... */}
        {/* I'll add a marker here to indicate where to insert the rest */}
        {/* CONTINUE_FROM_HERE */}
      </main>
    </div>
  )
}
