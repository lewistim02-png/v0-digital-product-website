import { Check } from "lucide-react"

export function HeroTrustBadges() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/80 pt-4">
      <div className="flex items-center gap-2">
        <Check className="w-4 h-4 text-[#00C853]" />
        <span className="font-medium">500+ Sales This Year</span>
      </div>
      <div className="flex items-center gap-2">
        <Check className="w-4 h-4 text-[#00C853]" />
        <span className="font-medium">Verified Convention Vendor</span>
      </div>
      <div className="flex items-center gap-2">
        <Check className="w-4 h-4 text-[#00C853]" />
        <span className="font-medium">30-Day Guarantee</span>
      </div>
    </div>
  )
}
