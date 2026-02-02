import { Check, X } from "lucide-react"

export function ComparisonMatrix() {
  const features = [
    ["Active inventory (not retired)", true, false, false],
    ["Current year strategies (2025)", true, false, true],
    ["Actual supplier contacts included", true, false, false],
    ["Authentication training", true, true, false],
    ["Pricing formulas & calculators", true, false, false],
    ["Live Q&A sessions", true, false, false],
    ["Money-back guarantee", true, true, true],
    ["Community access", true, false, true],
    ["1-on-1 coaching available", true, false, false],
    ["Updated for current market", true, false, false],
    ["Real case studies (this year)", true, false, false],
    ["Tax optimization guide", true, false, false],
    ["International shipping guide", true, false, false],
    ["AI automation setup", true, false, false],
    ["Convention vendor proof", true, false, false],
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4 uppercase tracking-tight text-black">
          How We Stack Up
        </h2>
        <p className="text-center text-black mb-12 text-lg">
          Not all reselling courses are created equal. Here's an honest comparison.
        </p>
        {/* END CHANGE */}

        <div className="overflow-x-auto">
          <table className="w-full border-4 border-black bg-white">
            <thead>
              <tr className="border-b-4 border-black bg-[#FAFAFA]">
                <th className="text-left p-4 font-black uppercase tracking-wide min-w-[300px] text-black">Feature</th>
                <th className="text-center p-4 font-black uppercase tracking-wide bg-[#00C853]/10 min-w-[120px] text-black">
                  Kickcard
                </th>
                <th className="text-center p-4 font-black uppercase tracking-wide min-w-[120px] text-black">
                  Competitor A
                </th>
                <th className="text-center p-4 font-black uppercase tracking-wide min-w-[120px] text-black">
                  Competitor B
                </th>
                {/* END CHANGE */}
              </tr>
            </thead>
            <tbody>
              {features.map((row, idx) => (
                <tr key={idx} className="border-b-2 border-black hover:bg-gray-50">
                  <td className="p-4 font-medium text-black">{row[0]}</td>
                  {/* END CHANGE */}
                  <td className="p-4 text-center bg-[#00C853]/5">
                    {row[1] ? (
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-[#00C853] border-2 border-black">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    ) : (
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-[#FF4444] border-2 border-black">
                        <X className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {row[2] ? (
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-[#00C853] border-2 border-black">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    ) : (
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-[#FF4444] border-2 border-black">
                        <X className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {row[3] ? (
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-[#00C853] border-2 border-black">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    ) : (
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-[#FF4444] border-2 border-black">
                        <X className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-[#1A1A1A] border-4 border-black p-6 brutal-shadow text-white text-center">
          <p className="font-bold text-lg">
            Bottom line: Most courses teach what USED to work. We teach what works RIGHT NOW.
          </p>
        </div>
      </div>
    </section>
  )
}
