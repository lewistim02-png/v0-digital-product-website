import { Mail, ImageIcon, Video, Package } from "lucide-react"

export function LiveProofSection() {
  return (
    <section className="py-20 px-4 bg-[#FF4444]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border-4 border-black brutal-shadow-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-6 uppercase tracking-tight text-black">
            Want Proof This Actually Works?
          </h2>

          <p className="text-center text-lg mb-8 text-black">
            Tired of fake screenshots? Email us for real, verifiable proof:
          </p>

          <div className="bg-[#1A1A1A] border-4 border-black p-4 brutal-shadow mb-8 text-center">
            <Mail className="w-8 h-8 text-white mx-auto mb-3" />
            <a
              href="mailto:proof@kickcard.academy"
              className="text-2xl font-black text-white hover:text-[#00C853] transition-colors block"
            >
              proof@kickcard.academy
            </a>
          </div>

          <div className="space-y-4">
            <p className="font-black uppercase text-base tracking-wide mb-6 text-black">What You'll Receive:</p>
            {[
              {
                icon: ImageIcon,
                text: "This month's sales screenshots (with timestamps)",
              },
              {
                icon: Package,
                text: "Convention vendor verification & booth photos",
              },
              {
                icon: Video,
                text: "Student success videos & testimonials",
              },
              {
                icon: ImageIcon,
                text: "Live inventory photos from this week",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-[#FAFAFA] border-2 border-black p-4">
                <div className="w-8 h-8 bg-[#00C853] border-2 border-black flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <p className="font-bold text-black">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-yellow-50 border-2 border-black">
            <p className="text-sm text-center font-bold text-black">
              <span className="text-[#FF4444]">Auto-responder sends dated proof within 5 minutes.</span> No BS, no
              delays. If I'm lying about my inventory or sales, you'll know immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
