import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { CourseSchema, OrganizationSchema, ProductSchema } from "./schema"

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
                <span className="text-sm font-medium">156-page manual</span>
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
                  Start Your £100 to £1,000 Journey — £97
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
                    Start Your Journey — £97
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

        {/* Why Listen to Me - SINGLE INSTANCE */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Listen to Me?
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              I'm not here to flex cars or show lifestyle. Here are the facts about my operation:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3+ Years</div>
                  <div className="text-sm">Active Selling</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">£20,000</div>
                  <div className="text-sm">Current Inventory</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm">Verified Transactions</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">Vendor</div>
                  <div className="text-sm">Major UK Conventions</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">£8-12K</div>
                  <div className="text-sm">Monthly Turnover</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">6-Figure</div>
                  <div className="text-sm">Built Multiple Businesses</div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Identity Verified by Stripe
              </Badge>
            </div>
          </div>
        </section>

        {/* See What You're Getting */}
        <section id="sample-content" className="py-16">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              See What You're Getting
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12">
              Not just theory - actual tools and resources you'll use daily
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">Course Dashboard</h3>
                  <p className="text-muted-foreground mb-4">Clean, organized access to all materials</p>
                  <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                    <span className="text-gray-400">[Dashboard Preview]</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">Supplier Contact List</h3>
                  <p className="text-muted-foreground mb-4">12+ verified suppliers with intro templates</p>
                  <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                    <span className="text-gray-400">[Supplier List Preview]</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">Pricing Calculator</h3>
                  <p className="text-muted-foreground mb-2">Live spreadsheet managing 200+ listings</p>
                  <p className="text-sm text-muted-foreground mb-4">Excel template with formulas</p>
                  <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                    <span className="text-gray-400">[Calculator Preview]</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">Authentication Checklist</h3>
                  <p className="text-muted-foreground mb-2">47-point verification system</p>
                  <p className="text-sm text-muted-foreground mb-4">Printable PDF checklist</p>
                  <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                    <span className="text-gray-400">[Checklist Preview]</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">AI Automation Setup</h3>
                  <p className="text-muted-foreground mb-2">Save 18 hours/month on listing creation</p>
                  <p className="text-sm text-muted-foreground mb-4">Step-by-step automation guide</p>
                  <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                    <span className="text-gray-400">[Automation Guide Preview]</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* A Different Breed */}
        <section className="bg-gray-900 text-white py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              A Different Breed of Course
            </h2>
            <p className="text-lg text-center text-gray-300 mb-12">
              Most courses give you surface-level tips and leave you confused. We give you the complete blueprint with nothing left to chance.
            </p>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed">
                I need to address the elephant in the room: Why should you trust another reselling course?
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Fair question. Here's the difference:
              </p>

              <p className="text-gray-300 leading-relaxed">
                Most "educators" stopped touching inventory the moment their course started selling. They're teaching what USED to work while the market has completely shifted.
              </p>

              <p className="text-gray-300 leading-relaxed">
                I'm actively running a £100K+ inventory. Weekly convention vendor. 500+ transactions this year. This isn't theory—it's documentation of what's working RIGHT NOW.
              </p>

              <p className="text-gray-300 leading-relaxed">
                The guides you're getting aren't what I think might work. They're exactly what I did last week, last month, and what I'm doing tomorrow:
              </p>

              <ul className="space-y-2 text-gray-300">
                <li>My actual authentication checklist (caught 12 fakes last month)</li>
                <li>The pricing spreadsheet managing 200+ active listings</li>
                <li>Live show scripts converting at 32% (vs. industry average 8%)</li>
                <li>Supplier vetting process that filters out 90% of scammers</li>
                <li>Tax structure saving me £3K annually (completely legal)</li>
                <li>Real supplier contacts (not "go find them yourself")</li>
              </ul>

              <p className="text-gray-300 leading-relaxed">
                If you want motivation and mindset content, YouTube is free. If you want the actual blueprint from someone doing this TODAY, continue below.
              </p>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4">
                🎯 Ready to Master Both Sneakers AND Trading Cards?
              </h3>
              <p className="text-gray-300 mb-6">
                Most courses teach one or the other. You're getting both complete systems.
              </p>
              <Link href="/courses/the-manual">
                <Button size="lg" variant="secondary">
                  Get Complete Access Now →
                </Button>
              </Link>
              <p className="text-sm text-gray-400 mt-4">
                ⏰ Founder pricing ends when we hit 100 students (73 spots remaining)
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Your Next 90 Days
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12">
              This is the realistic path most students follow when they actually implement the system
            </p>

            <div className="max-w-4xl mx-auto space-y-8">
              {[
                { week: "Day 1", title: "Set up accounts, understand market basics", profit: "£0 profit" },
                { week: "Week 1", title: "First profitable flip", profit: "£50-100 profit" },
                { week: "Week 4", title: "5-10 items listed", profit: "£500+ profit" },
                { week: "Week 8", title: "Reliable suppliers", profit: "£1000+ profit" },
                { week: "Week 12", title: "Systems automated", profit: "£2000+ profit" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <Card className="flex-1">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{item.week}</h3>
                        <Badge variant="secondary">{item.profit}</Badge>
                      </div>
                      <p className="text-muted-foreground">{item.title}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers - PLACEHOLDER FOR DETAILED CONTENT */}
        <section id="pricing" className="bg-gray-50 py-16">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What's Inside Each Tier
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">THE LITE</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    [Add pricing and features here]
                  </p>
                  <Link href="/courses/the-lite">
                    <Button className="w-full">View Details</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">THE MANUAL</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    [Add pricing and features here]
                  </p>
                  <Link href="/courses/the-manual">
                    <Button className="w-full">View Details</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">THE GUIDES</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    [Add pricing and features here]
                  </p>
                  <Link href="/courses/the-guides">
                    <Button className="w-full">View Details</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-600">
                <CardContent className="pt-6">
                  <Badge className="mb-2">POPULAR</Badge>
                  <h3 className="text-2xl font-bold mb-4">MASTERY</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    [Add pricing and features here]
                  </p>
                  <Link href="/courses/mastery">
                    <Button className="w-full">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why This Works */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Why This Actually Works
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12">
              Most courses give you surface-level tips and leave you confused. We give you the complete blueprint with nothing left to chance.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="text-xl font-bold mb-2">Step-by-Step Instructions</h3>
                  <p className="text-muted-foreground">
                    Every guide walks you through the exact process, in order, with screenshots and examples. You'll never be left wondering "what do I do next?" We hold your hand from Day 1 to your first £1,000 profit.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold mb-2">Depth That Actually Matters</h3>
                  <p className="text-muted-foreground">
                    We don't just tell you "list on eBay." We show you the exact pricing psychology, listing optimization techniques, timing strategies, and negotiation tactics that separate 6-figure sellers from hobbyists.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold mb-2">Actionable, Not Theoretical</h3>
                  <p className="text-muted-foreground">
                    Every page is designed for immediate implementation. Real supplier contacts. Actual pricing formulas. Copy-paste templates. Platform-specific checklists. You'll finish each chapter with concrete actions to take today.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-bold mb-2">Complete System, Zero Gaps</h3>
                  <p className="text-muted-foreground">
                    From finding your first product to scaling to £10K/month, every single step is covered. Authentication, shipping, taxes, customer service, scaling strategies—nothing is left out. This is the only course you'll ever need.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4">The Difference Is In The Details</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                While other courses give you 10 pages of generic advice, our guides contain 100+ pages of granular, platform-specific strategies with real examples, case studies, and templates. You get the exact playbook that's generated over £2M in student profits.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="bg-gray-50 py-16">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Real Students, Real Results
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12">
              Over 1,200 students have transformed their side hustles into profitable businesses
            </p>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">£2.1M+</div>
                  <div className="text-sm text-muted-foreground">Total Student Profits</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1,247</div>
                  <div className="text-sm text-muted-foreground">Active Students</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">89%</div>
                  <div className="text-sm text-muted-foreground">Make First Sale in 30 Days</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">4.8/5</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { initial: "M", name: "Mark T.", location: "Manchester", quote: "First month and I've already made back the course cost 3x over. The supplier contacts alone are worth more than I paid.", profit: "+£450", label: "first month" },
                { initial: "J", name: "Jessica R.", location: "London", quote: "Went from zero knowledge to flipping 15 pairs a week. The authentication guide saved me from buying a fake Jordan 1 worth £200.", profit: "+£780", label: "first month" },
                { initial: "S", name: "Sam P.", location: "Bristol", quote: "I was skeptical of another course, but this is different. Actual strategies that work right now, not 2019 BS.", profit: "+£1,200", label: "first month" },
                { initial: "E", name: "Emma K.", location: "Birmingham", quote: "The supplier list alone is worth 10x the price. Connected with 3 already and getting consistent stock!", profit: "+£320", label: "first month" },
                { initial: "L", name: "Liam D.", location: "Leeds", quote: "Just made my first £500 profit this week following Chapter 3's pricing strategy. This actually works!", profit: "+£950", label: "first month" },
                { initial: "R", name: "Rachel S.", location: "Glasgow", quote: "Best investment I've made. The authentication section alone has saved me thousands in fake purchases.", profit: "+£680", label: "first month" },
              ].map((testimonial, i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                        {testimonial.initial}
                      </div>
                      <div>
                        <div className="font-bold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                      </div>
                    </div>
                    <p className="text-sm mb-4">{testimonial.quote}</p>
                    <Badge variant="secondary">
                      {testimonial.profit} <span className="text-xs ml-1">{testimonial.label}</span>
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              All testimonials are from verified buyers. Results vary based on effort and market conditions.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12">
              Everything you need to know before getting started
            </p>

            <div className="space-y-6">
              {[
                {
                  q: "I have no money to start. Can I still do this?",
                  a: "Absolutely. The Broke Sneakerhead's Guide (included in The Guides package) shows you exactly how to start with just £50. I started with £80 and one pair of shoes from a car boot sale. You can begin by flipping items from charity shops, Facebook Marketplace, or even things you already own. Most students make their course investment back within the first 2-3 flips."
                },
                {
                  q: "How quickly will I see results?",
                  a: "89% of our students make their first profitable flip within 30 days. Most make back the course cost within the first week if they follow the system. Your first flip could happen tomorrow if you find the right opportunity. I teach you exactly what to look for and where to find quick wins while building toward bigger profits."
                },
                {
                  q: "Isn't the market too saturated?",
                  a: "The UK sneaker market alone is worth £2.2 billion and growing 8% yearly. Even capturing 0.001% would be £22,000. There are millions of sneakers and trading cards changing hands daily. The difference is knowing which ones to target, when to buy, and where to sell - which is exactly what I teach. Saturation is an excuse used by people who don't have the right system."
                },
                {
                  q: "Do I need to know about sneakers or trading cards already?",
                  a: "Not at all. The Manual starts from absolute basics. I teach you exactly what to look for, which brands and models to focus on, how to spot fakes, and how to value items correctly. Many successful students knew nothing about sneakers when they started. The system works because it's based on data and proven patterns, not personal taste or prior knowledge."
                },
                {
                  q: "What if I'm not in the UK?",
                  a: "The strategies work globally. 40% of our students are outside the UK. The course includes US and EU supplier alternatives, international shipping guides, and platform-specific strategies for different countries. Whether you're in America, Europe, or Australia, the fundamental principles of buying low and selling high remain the same - I just show you how to adapt them to your local market."
                },
                {
                  q: "Why are you sharing your suppliers and methods?",
                  a: "Simple maths: The UK reselling market is worth billions. Even if all 100 students bought the exact same items as me (which they won't), it wouldn't dent my business. Plus, I focus on premium items (£200+) while most beginners start with £50-150 items. We're fishing in different ponds. I make more from course sales than I'd lose from any competition, and I genuinely enjoy helping others escape the 9-5."
                },
                {
                  q: "What's your refund policy?",
                  a: "30-day money-back guarantee. If you're not completely satisfied with the course content, just email within 30 days for a full refund. No questions asked, no hard feelings. I only want happy students who are getting results. That said, less than 2% of students request refunds because the system works when you actually use it."
                },
                {
                  q: "How much time do I need to invest?",
                  a: "You can start with just 30 minutes a day. That's enough to check opportunities, list items, and manage sales. Most successful students spend 5-10 hours per week once they get going. The beauty is it's completely flexible - you can do this alongside a full-time job, as a student, or as a stay-at-home parent. Scale up or down based on your goals and available time."
                },
                {
                  q: "How do I access the course after purchase?",
                  a: "Immediately after purchase, you'll receive an email with download links for all course materials (PDFs, spreadsheets, templates). Everything is downloadable so you own it forever - no recurring subscriptions or locked portals. You can access the materials on any device, print them out, or save them to your cloud storage. Updates are sent via email whenever I add new content."
                },
                {
                  q: "What if I need help or get stuck?",
                  a: "Email support is included with all packages. Mastery members get priority 24-hour response times plus access to the private Discord community where you can get help from me and other successful students. The course is designed to be self-contained with clear action steps, but if you're stuck, we're here to help. Most questions are answered in the comprehensive troubleshooting section of the manual."
                }
              ].map((faq, i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Got More Questions?</h3>
              <p className="text-muted-foreground mb-6">
                I'm here to help. Email me directly and I'll personally respond within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="mailto:support@kickcard.academy">
                  <Button variant="outline">📧 Email Support</Button>
                </Link>
                <Link href="/courses/the-manual">
                  <Button>Ready to Start →</Button>
                </Link>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg mb-6">All your questions answered? Ready to start making money?</p>
              <Link href="#pricing">
                <Button size="lg">View Course Options →</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container text-center">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Badge variant="secondary" className="text-lg px-4 py-2">£297</Badge>
                <Badge className="text-2xl px-6 py-3 bg-white text-blue-600">£97</Badge>
              </div>
              <p className="text-2xl font-bold mb-8">73 spots left</p>
              <Link href="/courses/the-manual">
                <Button size="lg" variant="secondary" className="text-xl px-12 py-6">
                  Get Started →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stop Dreaming */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Stop Dreaming. Start Earning.
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12">
              Everything you need to build a £1,000+/month reselling business is waiting for you.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="text-2xl font-bold mb-4">The Manual</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-6">£97</div>
                  <Link href="/courses/the-manual">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-600">
                <CardContent className="pt-6 text-center">
                  <Badge className="mb-2">POPULAR</Badge>
                  <h3 className="text-2xl font-bold mb-4">The Guides</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-6">£197</div>
                  <Link href="/courses/the-guides">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="text-2xl font-bold mb-4">Mastery</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-6">£397</div>
                  <Link href="/courses/mastery">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Link href="/courses/the-manual">
                <Button size="lg" className="text-xl px-12">
                  Choose Your Package & Start Today →
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mt-6">
              <span>✅ 30-day money-back guarantee</span>
              <span>📥 Instant download</span>
              <span>♾️ Lifetime updates</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Kickcard Academy</h3>
              <p className="text-sm text-gray-400">
                Master sneaker & trading card reselling with proven strategies from an active seller.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/refund" className="hover:text-white">Refund Policy</Link></li>
                <li><Link href="/#faq" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/courses/the-lite" className="hover:text-white">The Lite</Link></li>
                <li><Link href="/courses/the-manual" className="hover:text-white">The Manual</Link></li>
                <li><Link href="/courses/the-guides" className="hover:text-white">The Guides</Link></li>
                <li><Link href="/courses/mastery" className="hover:text-white">Mastery</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Trust & Security</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>SSL Encrypted</li>
                <li>Secure Checkout</li>
                <li>30-Day Guarantee</li>
              </ul>
              <h4 className="font-semibold mt-6 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="mailto:support@kickcard.academy" className="hover:text-white">support@kickcard.academy</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Page</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 Kickcard Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* SEO Schema Markup */}
      <CourseSchema />
      <OrganizationSchema />
      <ProductSchema />
    </div>
  )
}
