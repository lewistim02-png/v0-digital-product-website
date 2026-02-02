export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-black text-black mb-4 uppercase">Contact Us</h1>
        <p className="text-xl text-gray-700 mb-12">Have questions? Need support? We're here to help.</p>

        <div className="bg-white border-4 border-black p-8 brutal-shadow mb-8">
          <h2 className="text-2xl font-black text-black mb-4 uppercase">Get In Touch</h2>
          <p className="text-gray-700 mb-6">For support, questions, feedback, or partnership inquiries, email us at:</p>
          <a
            href="mailto:support@kickcard.academy"
            className="text-red-700 font-bold text-2xl hover:text-red-900 transition-colors inline-block mb-6"
          >
            support@kickcard.academy
          </a>
          <p className="text-gray-600 mt-6 text-sm">We typically respond within 24-48 hours during business days.</p>
        </div>

        <div className="bg-white border-4 border-black p-8 brutal-shadow mb-8">
          <h2 className="text-2xl font-black text-black mb-4 uppercase">Want Proof?</h2>
          <p className="text-gray-700 mb-4">
            Tired of fake screenshots? Email us for real, verifiable proof of our results:
          </p>
          <a
            href="mailto:proof@kickcard.academy"
            className="text-red-700 font-bold text-2xl hover:text-red-900 transition-colors inline-block"
          >
            proof@kickcard.academy
          </a>
        </div>

        <div className="bg-[#1A1A1A] text-white border-4 border-black p-8 brutal-shadow">
          <h2 className="text-2xl font-black mb-4 uppercase">Business Hours</h2>
          <div className="space-y-2 text-white/90">
            <p>Monday - Friday: 9:00 AM - 6:00 PM GMT</p>
            <p>Saturday: 10:00 AM - 4:00 PM GMT</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-block bg-[#FF4444] text-black px-8 py-4 font-bold uppercase border-4 border-black brutal-shadow hover:translate-x-1 hover:translate-y-1 transition-transform"
          >
            ← Back to Homepage
          </a>
        </div>
      </div>
    </div>
  )
}
