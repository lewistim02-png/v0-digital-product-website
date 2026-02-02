import Link from "next/link"
import { BrutalButton } from "@/components/ui/brutal-button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-md space-y-6">
        <h1 className="text-8xl font-black text-black mb-4">404</h1>
        <h2 className="text-3xl font-bold text-black uppercase">Page Not Found</h2>
        <p className="text-xl text-gray-700">Looks like this sneaker walked off the shelf...</p>
        <p className="text-gray-600">The page you're looking for doesn't exist or has been moved.</p>

        <div className="space-y-4 pt-4">
          <Link href="/" className="block">
            <BrutalButton size="lg" className="w-full">
              Back to Homepage
            </BrutalButton>
          </Link>
          <Link href="/#pricing" className="block">
            <BrutalButton size="lg" variant="outline" className="w-full">
              View Courses
            </BrutalButton>
          </Link>
        </div>

        <div className="pt-8 text-sm text-gray-600">
          <p>
            Need help?{" "}
            <a href="mailto:support@kickcard.academy" className="text-red-700 font-bold hover:underline">
              Contact us
            </a>
          </p>
        </div>
        {/* END CHANGE */}
      </div>
    </div>
  )
}
