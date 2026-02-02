import { Shield, Lock, Check } from "lucide-react"
import { BrutalButton } from "./ui/brutal-button"

export function GuaranteeBox() {
  return (
    <section className="py-20 px-4 bg-[#00C853]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border-4 border-black brutal-shadow-xl p-8 md:p-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[#00C853] border-4 border-black brutal-shadow flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-center mb-6 uppercase tracking-tight text-black">
            30-Day Action-Based Guarantee
          </h2>
          {/* END CHANGE */}

          <div className="space-y-4 mb-8">
            {[
              "Try the entire course for 30 days",
              "Follow the system step-by-step",
              "If you don't make a profit, get a full refund",
              "PLUS you keep all the bonuses (£211 value)",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#00C853] border-2 border-black flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg font-bold text-black">{item}</p>
                {/* END CHANGE */}
              </div>
            ))}
          </div>

          <div className="bg-[#FAFAFA] border-2 border-black p-6 mb-8">
            <p className="text-center font-bold text-black">
              <Lock className="w-5 h-5 inline-block mr-2" />
              All I ask is that you actually follow the steps. If you do the work and don't see results, I'll refund
              every penny.
            </p>
            {/* END CHANGE */}
          </div>

          <div className="flex justify-center">
            <BrutalButton size="lg">Get Started Risk-Free</BrutalButton>
          </div>
        </div>
      </div>
    </section>
  )
}
