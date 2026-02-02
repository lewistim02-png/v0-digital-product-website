interface IPhoneTestimonialProps {
  initial: string
  age: number
  city: string
  profit: string
  quote: string
}

export function IPhoneTestimonial({ initial, age, city, profit, quote }: IPhoneTestimonialProps) {
  return (
    <div className="bg-white border-4 border-black rounded-3xl p-6 brutal-shadow max-w-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-bold text-xl">
          {initial}
        </div>
        <div>
          <p className="font-bold text-black">
            {initial}., {age}
          </p>
          <p className="text-sm text-black">{city}</p>
          {/* END CHANGE */}
        </div>
      </div>

      <div className="bg-[#00C853] text-white px-4 py-2 rounded-lg inline-block mb-4 font-mono font-bold">
        {profit} Profit
      </div>

      <p className="text-black leading-relaxed">{quote}</p>
      {/* END CHANGE */}

      <div className="mt-4 text-xs text-gray-600">via iMessage</div>
    </div>
  )
}
