"use client"

import { useState } from "react"
import { ChevronDown, FileText } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Link from "next/link"

export function WhatsInsideExpansion() {
  const [openTier, setOpenTier] = useState<string | null>(null)

  const tiers = {
    lite: {
      title: "THE LITE",
      buyLink: "/courses/the-lite",
      features: [
        "5 Core Chapters, 78 Pages",
        "15 Quick-Start Templates",
        "3 Verified Supplier Contacts",
        "Lifetime Updates Included",
      ],
      chapters: [
        "Getting Started (12 pages)",
        "Finding Profitable Items (18 pages)",
        "Basic Authentication (15 pages)",
        "Listing & Selling (20 pages)",
        "Scaling Basics (13 pages)",
      ],
    },
    manual: {
      title: "THE MANUAL",
      buyLink: "/courses/the-manual",
      features: [
        "10 Chapters, 156 Pages",
        "45 Actionable Templates",
        "12 Supplier Contacts",
        "Lifetime Updates Included",
      ],
      chapters: [
        "Foundations & Mindset (14 pages)",
        "Market Research Mastery (18 pages)",
        "Supplier Sourcing (22 pages)",
        "Authentication Fundamentals (16 pages)",
        "Platform Strategies (19 pages)",
        "Pricing Psychology (15 pages)",
        "Photography & Listings (17 pages)",
        "Customer Service Systems (12 pages)",
        "Financial Management (14 pages)",
        "Scaling Your Business (9 pages)",
      ],
    },
    guides: {
      title: "THE GUIDES",
      buyLink: "/courses/the-guides",
      features: [
        "7 Specialist Guides (400+ pages total)",
        "Advanced Authentication Process",
        "International Shipping Calculator",
        "AI Tools Setup (Save 18 hrs/month)",
        "Pokemon/Sports Card Grading Guide",
      ],
      chapters: [
        "Guide 1: Getting Started When Broke (45 pages)",
        "Guide 2: AI Resellers Playbook (68 pages)",
        "Guide 3: Sneaker Authentication (72 pages)",
        "Guide 4: Financial Management (58 pages)",
        "Guide 5: Photography & Listing Optimization (52 pages)",
        "Guide 6: International Importing Post-Brexit (81 pages)",
        "Guide 7: Trading Card Authentication (64 pages)",
      ],
    },
    mastery: {
      title: "MASTERY",
      buyLink: "/courses/mastery",
      features: [
        "Weekly Live Calls (Thursdays 7PM GMT)",
        "WhatsApp Group Access",
        "1-on-1 Monthly Strategy Call",
        "First Access to Convention Tickets",
        "Private Supplier Database (50+ contacts)",
        "Advanced Automation Scripts",
      ],
      extras: [
        "5 Mastery Modules (200+ pages)",
        "Market trend prediction frameworks",
        "Wholesale contact database",
        "Buyer/supplier negotiation psychology",
        "Systems for serious growth",
        "Hiring & team management",
      ],
    },
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 uppercase tracking-tight text-black">
          What's Inside Each Tier
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(tiers).map(([key, tier]) => (
            <Collapsible
              key={key}
              open={openTier === key}
              onOpenChange={(open) => setOpenTier(open ? key : null)}
              className="bg-white border-4 border-black brutal-shadow"
            >
              <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <h3 className="text-2xl font-black uppercase tracking-tight text-black">{tier.title}</h3>
                <ChevronDown className={`w-6 h-6 transition-transform ${openTier === key ? "rotate-180" : ""}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="border-t-4 border-black p-6 space-y-4">
                <div className="space-y-2">
                  <p className="font-bold uppercase text-sm tracking-wide mb-3 text-black">Key Features:</p>
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#00C853] mt-2 flex-shrink-0" />
                      <span className="text-sm text-black">{feature}</span>
                    </div>
                  ))}
                </div>

                {tier.chapters && (
                  <div className="space-y-2 pt-4 border-t-2 border-gray-200">
                    <p className="font-bold uppercase text-sm tracking-wide mb-3 flex items-center gap-2 text-black">
                      <FileText className="w-4 h-4" />
                      Chapter Breakdown:
                    </p>
                    {tier.chapters.map((chapter, idx) => (
                      <div key={idx} className="pl-6 text-sm text-black">
                        • {chapter}
                      </div>
                    ))}
                  </div>
                )}

                {tier.extras && (
                  <div className="space-y-2 pt-4 border-t-2 border-gray-200">
                    <p className="font-bold uppercase text-sm tracking-wide mb-3 text-black">Plus Mastery Modules:</p>
                    {tier.extras.map((extra, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#FF4444] mt-2 flex-shrink-0" />
                        <span className="text-sm text-black">{extra}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-4">
                  <Link
                    href={tier.buyLink}
                    className="block w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 text-center border-4 border-black brutal-shadow transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                  >
                    Buy Now
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  )
}
