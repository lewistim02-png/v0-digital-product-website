import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, BookOpen, ArrowRight } from "lucide-react"
import { CheckoutButton } from "@/components/checkout-button"
import { CourseSchema } from "@/components/course-schema"

export const metadata: Metadata = {
  title: "The Lite - Essential Reselling Fundamentals | Kickcard Academy",
  description:
    "Get started with reselling sneakers and cards on a budget. Learn the essential fundamentals for just £37.",
  keywords: "reselling course, sneaker reselling, trading cards, beginner guide, budget reselling course, side hustle",
}

export default function TheLitePage() {
  return (
    <div className="min-h-screen bg-background pb-32">
      <nav className="bg-gray-50 py-3 px-4 border-b-2 border-gray-200">
        <div className="container mx-auto text-sm">
          <a href="/" className="text-gray-600 hover:text-black font-medium">
            Home
          </a>
          <span className="mx-2 text-gray-400">›</span>
          <a href="/#pricing" className="text-gray-600 hover:text-black font-medium">
            Courses
          </a>
          <span className="mx-2 text-gray-400">›</span>
          <span className="text-black font-bold">The Lite</span>
        </div>
      </nav>

      <CourseSchema
        name="The Lite - Essential Reselling Fundamentals"
        description="Get started with reselling sneakers and cards on a budget. Learn platform basics, sourcing strategies, and pricing formulas."
        price="37"
        currency="GBP"
        rating="4.8"
        reviewCount="127"
      />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 !text-black py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-2 bg-red-600/20 border border-red-600 rounded-full text-sm mb-4">
            Perfect for Beginners on a Budget
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-balance">The Lite</h1>
          <p className="text-xl md:text-2xl !text-white">Essential Reselling Fundamentals</p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Start your reselling journey without breaking the bank. Get the core fundamentals from The Manual at an
            affordable price point.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <CheckoutButton productId="4" price={37} className="text-lg px-8">
              Get Started for £37
            </CheckoutButton>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section id="whats-included" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What's Included in The Lite</h2>

          <Card className="border-2 mb-8">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">First 5 Chapters of The Manual</h3>
                    <p className="text-foreground/80">
                      The Real Game, Mindset, Getting Started, Product Selection, and Platform Basics
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Platform Setup Guides</h3>
                    <p className="text-foreground/80">
                      Step-by-step instructions for eBay, Depop, Vinted, and Facebook Marketplace
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Sourcing Starter Strategies</h3>
                    <p className="text-foreground/80">
                      Where to find inventory when you're starting with limited capital
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Basic Pricing Formulas</h3>
                    <p className="text-foreground/80">
                      Simple, proven pricing strategies to ensure profitability from day one
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Lifetime Access</h3>
                    <p className="text-foreground/80">Keep access forever with all future updates included</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-muted/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Upgrade?</h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Get The Lite now for £37, and if you decide to upgrade to The Manual or The Guides later, we'll credit
              your purchase towards the full price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CheckoutButton productId="4" price={37}>
                Get The Lite - £37
              </CheckoutButton>
              <Button variant="outline" asChild>
                <a href="/courses/the-manual">View The Manual (£67)</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Start with The Lite */}
      <section id="why-lite" className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Start with The Lite?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Low Risk Entry</h3>
                <p className="text-foreground/80">
                  Test the waters with a small investment. Perfect for those who want to verify the quality before
                  committing to the complete system.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">No Fluff, Just Essentials</h3>
                <p className="text-foreground/80">
                  Get exactly what you need to start making your first sales without overwhelming advanced strategies
                  you're not ready for yet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Start Your Reselling Journey Today</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get instant access to essential fundamentals for just £37
          </p>
          <CheckoutButton productId="4" price={37} size="lg" className="text-lg px-8">
            Get The Lite Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </CheckoutButton>
          <p className="text-sm text-muted-foreground mt-4">Instant digital delivery • Lifetime access</p>
        </div>
      </section>
    </div>
  )
}
