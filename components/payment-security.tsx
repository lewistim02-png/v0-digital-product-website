import { Lock } from "lucide-react"

export function PaymentSecurity() {
  return (
    <div className="bg-[#FAFAFA] border-4 border-black p-8 brutal-shadow-lg mt-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="flex gap-3">
            <div className="bg-white border-2 border-black px-4 py-2 font-bold text-sm">VISA</div>
            <div className="bg-white border-2 border-black px-4 py-2 font-bold text-sm">MASTERCARD</div>
            <div className="bg-white border-2 border-black px-4 py-2 font-bold text-sm">AMEX</div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Lock className="w-4 h-4 text-[#00C853]" />
          <span className="font-medium">SSL Encrypted • 256-bit Security</span>
        </div>
      </div>

      <div className="mt-6 text-center">
        <div className="inline-block bg-[#00C853] border-4 border-black px-8 py-4 brutal-shadow">
          <p className="text-white font-black text-lg uppercase tracking-wide">
            30-Day Money Back Guarantee - No Questions Asked
          </p>
        </div>
      </div>
    </div>
  )
}
