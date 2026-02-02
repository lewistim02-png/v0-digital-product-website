import { Star, TrendingUp, Calendar } from "lucide-react"

export function VerifiedCredibility() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 py-8">
      <div className="flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-[#00C853]" />
        <span className="font-bold">1000+ downloads</span>
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="w-5 h-5 text-black" />
        <span className="font-bold">Last updated: January 2025</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
          ))}
        </div>
        <span className="font-bold">4.9/5 from verified buyers</span>
      </div>
    </div>
  )
}
