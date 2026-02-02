export function SuccessTimeline() {
  const milestones = [
    {
      day: "Day 1",
      title: "Set up accounts, understand market basics",
      profit: "£0",
    },
    {
      day: "Week 1",
      title: "First profitable flip",
      profit: "£50-100",
    },
    {
      day: "Week 4",
      title: "5-10 items listed",
      profit: "£500+",
    },
    {
      day: "Week 8",
      title: "Reliable suppliers",
      profit: "£1000+",
    },
    {
      day: "Week 12",
      title: "Systems automated",
      profit: "£2000+",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4 uppercase tracking-tight">Your Next 90 Days</h2>
        <p className="text-center text-black mb-12 max-w-2xl mx-auto">
          This is the realistic path most students follow when they actually implement the system
        </p>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-black"></div>
          <div className="flex justify-between relative">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col items-center" style={{ width: "20%" }}>
                <div className="w-16 h-16 bg-[#FF4444] border-4 border-black rounded-full flex items-center justify-center mb-4 relative z-10 brutal-shadow">
                  <span className="text-white font-black text-lg">{index + 1}</span>
                </div>
                <div className="bg-white border-4 border-black p-4 brutal-shadow text-center">
                  <p className="font-black text-sm uppercase mb-2 text-black">{milestone.day}</p>
                  <p className="text-xs text-black mb-2">{milestone.title}</p>
                  <p className="text-lg font-black text-[#00C853]">{milestone.profit} profit</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#FF4444] border-4 border-black rounded-full flex items-center justify-center brutal-shadow flex-shrink-0">
                  <span className="text-white font-black">{index + 1}</span>
                </div>
                {index < milestones.length - 1 && <div className="w-1 flex-1 bg-black mt-2"></div>}
              </div>
              <div className="bg-white border-4 border-black p-4 brutal-shadow flex-1 mb-2">
                <p className="font-black text-sm uppercase mb-2 text-black">{milestone.day}</p>
                <p className="text-xs text-black mb-2">{milestone.title}</p>
                <p className="text-lg font-black text-[#00C853]">{milestone.profit} profit</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
