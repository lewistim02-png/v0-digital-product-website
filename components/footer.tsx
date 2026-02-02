import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="font-black text-lg uppercase mb-4">Kickcard Academy</h3>
            <p className="text-sm text-white/70">
              Master sneaker & trading card reselling with proven strategies from an active seller.
            </p>
          </div>

          <div>
            <h4 className="font-bold uppercase text-sm mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-white/70 hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-white/70 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase text-sm mb-4">Courses</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses/the-lite" className="text-white/70 hover:text-white transition-colors">
                  The Lite
                </Link>
              </li>
              <li>
                <Link href="/courses/the-manual" className="text-white/70 hover:text-white transition-colors">
                  The Manual
                </Link>
              </li>
              <li>
                <Link href="/courses/the-guides" className="text-white/70 hover:text-white transition-colors">
                  The Guides
                </Link>
              </li>
              <li>
                <Link href="/courses/mastery" className="text-white/70 hover:text-white transition-colors">
                  Mastery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase text-sm mb-4">Trust & Security</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                SSL Encrypted
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Secure Checkout
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                30-Day Guarantee
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:support@kickcard.academy" className="text-white/70 hover:text-white transition-colors">
                  support@kickcard.academy
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact Page
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Kickcard Academy. All rights reserved.</p>
          <p className="mt-2">Company Registration: GB123456789</p>
        </div>
      </div>
    </footer>
  )
}
