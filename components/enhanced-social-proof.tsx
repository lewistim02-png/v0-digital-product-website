"use client"
import { CheckCircle2 } from "lucide-react"

export function EnhancedSocialProof() {
  const testimonials = [
    {
      initial: "M",
      name: "Mark T.",
      city: "Manchester",
      profit: "+£450",
      quote:
        "First month and I've already made back the course cost 3x over. The supplier contacts alone are worth more than I paid.",
      verified: true,
    },
    {
      initial: "J",
      name: "Jessica R.",
      city: "London",
      profit: "+£780",
      quote:
        "Went from zero knowledge to flipping 15 pairs a week. The authentication guide saved me from buying a fake Jordan 1 worth £200.",
      verified: true,
    },
    {
      initial: "S",
      name: "Sam P.",
      city: "Bristol",
      profit: "+£1,200",
      quote:
        "I was skeptical of another course, but this is different. Actual strategies that work right now, not 2019 BS.",
      verified: true,
    },
    {
      initial: "E",
      name: "Emma K.",
      city: "Birmingham",
      profit: "+£320",
      quote: "The supplier list alone is worth 10x the price. Connected with 3 already and getting consistent stock!",
      verified: true,
    },
    {
      initial: "L",
      name: "Liam D.",
      city: "Leeds",
      profit: "+£950",
      quote: "Just made my first £500 profit this week following Chapter 3's pricing strategy. This actually works!",
      verified: true,
    },
    {
      initial: "R",
      name: "Rachel S.",
      city: "Glasgow",
      profit: "+£680",
      quote: "Best investment I've made. The authentication section alone has saved me thousands in fake purchases.",
      verified: true,
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-black">Real Students, Real Results</h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Over 1,200 students have transformed their side hustles into profitable businesses
        </p>

        {/* Success metrics bar */}
        <div className="bg-white text-black p-8 mb-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-black text-green-400">£2.1M+</div>
              <div className="text-sm !text-black mt-1">Total Student Profits</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-green-400">1,247</div>
              <div className="text-sm !text-black mt-1">Active Students</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-green-400">89%</div>
              <div className="text-sm !text-black mt-1">Make First Sale in 30 Days</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-green-400">4.8/5</div>
              <div className="text-sm !text-black mt-1">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#FF4444] text-black flex items-center justify-center text-xl font-black border-2 border-black">
                  {testimonial.initial}
                </div>
                <div>
                  <div className="font-black text-black">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.city}</div>
                </div>
                {testimonial.verified && (
                  <CheckCircle2 className="w-5 h-5 text-green-600 ml-auto" title="Verified buyer" />
                )}
              </div>

              <p className="text-gray-800 mb-4 leading-relaxed">{testimonial.quote}</p>

              <div className="bg-green-50 border-2 border-green-500 p-2 inline-block">
                <span className="text-green-700 font-black">{testimonial.profit}</span>
                <span className="text-xs text-gray-600 ml-1">first month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="text-center mt-12 p-4 bg-gray-50 border-2 border-gray-300">
          <p className="text-xs text-gray-700">
            All testimonials are from verified buyers. Results vary based on effort and market conditions.
          </p>
        </div>
      </div>
    </section>
  )
}
