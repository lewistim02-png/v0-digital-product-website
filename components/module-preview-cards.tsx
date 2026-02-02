"use client"

import { Lock, FileSpreadsheet, CheckSquare, Bot } from "lucide-react"

export function ModulePreviewCards() {
  const previews = [
    {
      title: "Course Dashboard",
      description: "Clean, organized access to all materials",
      icon: Lock,
      image: "/images/capture1.png",
    },
    {
      title: "Supplier Contact List",
      description: "12+ verified suppliers with intro templates",
      icon: Lock,
    },
    {
      title: "Pricing Calculator",
      description: "Live spreadsheet managing 200+ listings",
      icon: FileSpreadsheet,
      preview: "Excel template with formulas",
    },
    {
      title: "Authentication Checklist",
      description: "47-point verification system",
      icon: CheckSquare,
      preview: "Printable PDF checklist",
    },
    {
      title: "AI Automation Setup",
      description: "Save 18 hours/month on listing creation",
      icon: Bot,
      preview: "Step-by-step automation guide",
    },
  ]

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4 uppercase tracking-tight text-black">
          See What You're Getting
        </h2>
        <p className="text-center text-black mb-12 text-lg font-medium">
          Not just theory - actual tools and resources you'll use daily
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previews.map((preview, idx) => (
            <div
              key={idx}
              className="bg-white border-4 border-black brutal-shadow hover:brutal-shadow-lg transition-all"
            >
              <div className="p-6 space-y-4">
                <div className="w-12 h-12 bg-[#1A1A1A] border-2 border-black flex items-center justify-center">
                  <preview.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-black text-xl uppercase tracking-tight text-black">{preview.title}</h3>
                <p className="text-sm text-black">{preview.description}</p>
                {preview.preview && (
                  <div className="pt-3 border-t-2 border-gray-200">
                    <p className="text-xs uppercase font-bold tracking-wide text-black">{preview.preview}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
