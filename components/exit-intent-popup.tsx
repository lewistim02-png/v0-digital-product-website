"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { X, Check } from "lucide-react"

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const [variant, setVariant] = useState<"A" | "B">("A")
  const [isEligible, setIsEligible] = useState(false)
  const [timeOnPage, setTimeOnPage] = useState(0)
  const [countdown, setCountdown] = useState(5)

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const getPageDelay = () => {
    const path = window.location.pathname
    const delays: Record<string, number> = {
      "/": 25000,
      "/pricing": 15000,
      "/courses/the-manual": 10000,
      "/courses/the-guides": 10000,
      "/courses/mastery": 10000,
      "/courses/the-lite": 10000,
      "/blog": 45000,
    }
    return delays[path] || 25000
  }

  useEffect(() => {
    // Test mode
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get("test-exit") === "true") {
      console.log("[v0] Exit intent test mode - showing in 2 seconds")
      setTimeout(() => {
        setIsEligible(true)
        setIsOpen(true)
      }, 2000)
      return
    }

    if (sessionStorage.getItem("hasShownPurchaseIntent") === "true") {
      console.log("[v0] User has shown purchase intent - skipping exit intent")
      return
    }

    // Don't show on excluded pages
    const excludedPaths = ["/checkout", "/success", "/thank-you", "/terms", "/privacy", "/dashboard"]
    if (excludedPaths.some((path) => window.location.pathname.includes(path))) {
      return
    }

    if (window.location.pathname.includes("/courses/")) {
      console.log("[v0] User on course page - skipping exit intent")
      return
    }

    // Check if user is subscribed
    if (localStorage.getItem("subscribed") === "true") {
      return
    }

    // Check if coming from email
    if (urlParams.get("utm_medium") === "email") {
      return
    }

    // Check last shown timestamp (7 day cooldown)
    const lastShown = localStorage.getItem("exitIntentShown")
    if (lastShown) {
      const daysSinceShown = (Date.now() - Number.parseInt(lastShown)) / (1000 * 60 * 60 * 24)
      if (daysSinceShown < 7) {
        return
      }
    }

    // A/B testing variant
    const storedVariant = localStorage.getItem("exitIntentVariant")
    if (storedVariant) {
      setVariant(storedVariant as "A" | "B")
    } else {
      const newVariant = Math.random() < 0.5 ? "A" : "B"
      setVariant(newVariant)
      localStorage.setItem("exitIntentVariant", newVariant)
    }

    // Track time on page
    const timer = setInterval(() => {
      setTimeOnPage((prev) => prev + 1)
    }, 1000)

    // Page-specific eligibility
    const eligibilityTimer = setTimeout(() => {
      setIsEligible(true)
    }, getPageDelay())

    return () => {
      clearInterval(timer)
      clearTimeout(eligibilityTimer)
    }
  }, [])

  useEffect(() => {
    if (!isEligible) return

    let touchStartY = 0
    let lastScrollY = window.scrollY
    let scrollVelocity = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY
      const swipeDistance = touchStartY - touchEndY

      // Detect upward swipe near top
      if (swipeDistance < -50 && window.scrollY < 100 && !isOpen) {
        showPopup()
      }
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      scrollVelocity = lastScrollY - currentScrollY

      // Rapid scroll up near top
      if (scrollVelocity > 50 && currentScrollY < 200 && !isOpen) {
        showPopup()
      }

      lastScrollY = currentScrollY
    }

    const handlePopState = () => {
      if (!isOpen) {
        showPopup()
      }
    }

    if (window.innerWidth < 768) {
      window.addEventListener("touchstart", handleTouchStart)
      window.addEventListener("touchend", handleTouchEnd)
      window.addEventListener("scroll", handleScroll)
      window.addEventListener("popstate", handlePopState)

      return () => {
        window.removeEventListener("touchstart", handleTouchStart)
        window.removeEventListener("touchend", handleTouchEnd)
        window.removeEventListener("scroll", handleScroll)
        window.removeEventListener("popstate", handlePopState)
      }
    }
  }, [isEligible, isOpen])

  useEffect(() => {
    if (!isEligible) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (isOpen) return

      // Detect exit velocity (rapid upward movement)
      if (e.clientY <= 0 && e.movementY < -50) {
        showPopup()
      }
    }

    if (window.innerWidth >= 768) {
      document.addEventListener("mouseout", handleMouseLeave)
      return () => document.removeEventListener("mouseout", handleMouseLeave)
    }
  }, [isEligible, isOpen])

  const showPopup = () => {
    setIsOpen(true)
    localStorage.setItem("exitIntentShown", Date.now().toString())

    // Track analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "exit_intent_shown", {
        variant: variant,
        time_on_page: timeOnPage,
      })
    }
  }

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      window.scrollTo(0, Number.parseInt(scrollY || "0") * -1)
    }

    return () => {
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
    }
  }, [isOpen])

  useEffect(() => {
    if (isSuccess && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (isSuccess && countdown === 0) {
      setIsOpen(false)
    }
  }, [isSuccess, countdown])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Please enter your email address")
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName: firstName || undefined,
          tags: ["free-course-exit-intent", "potential-customer"],
          formId: "exit-intent-course",
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 409 || data.error?.includes("already")) {
          setError("You're already subscribed! Check your email for the course.")
        } else {
          setError("Oops! Something went wrong. Please try again.")
        }
        setIsLoading(false)
        return
      }

      setIsSuccess(true)
      localStorage.setItem("subscribed", "true")

      // Track conversion
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "exit_intent_conversion", {
          variant: variant,
          time_on_page: timeOnPage,
        })
      }
    } catch (err) {
      console.error("[v0] Exit intent subscription error:", err)
      setError("Oops! Something went wrong. Please try again.")
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "exit_intent_closed", {
        variant: variant,
        time_on_page: timeOnPage,
      })
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  if (!isOpen) return null

  const headlines = {
    A: "WAIT! You're Leaving Money on the Table 💰",
    B: "Before You Go: Get My £100 Flip Blueprint Free",
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
    >
      <div
        className="relative w-full max-w-[500px] bg-white border-4 border-black p-6 md:p-8 animate-in slide-in-from-bottom-4 duration-400"
        style={{ boxShadow: "8px 8px 0px #1A1A1A" }}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded transition-colors"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#00C853] rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-3">Check Your Email!</h3>
            <p className="text-gray-700 mb-3 text-base">
              Your first lesson is on the way (check spam if you don't see it in 2 minutes).
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Your exclusive <span className="font-bold text-[#FF4444]">£30 discount code</span> will arrive with lesson
              5.
            </p>
            <p className="text-gray-500 text-xs">This popup will close in {countdown} seconds...</p>
          </div>
        ) : (
          <>
            <h2
              id="exit-intent-title"
              className="text-xl md:text-2xl font-bold mb-3 leading-tight text-black"
              style={{ animation: timeOnPage > 3 ? "shake 0.5s ease-in-out" : "none" }}
            >
              {headlines[variant]}
            </h2>

            <p className="text-base text-gray-700 mb-6">
              Get my 5-day free email course and learn how to make your first £100 flip this week (no experience needed)
            </p>

            <ul className="space-y-3 mb-6">
              {[
                "Day 1: 3 items under £50 that flip for £100+ TODAY",
                "Day 2: 10-second fake check that saves you £1000s",
                "Day 3: My exact pricing formula (never guess again)",
                "Day 4: The supplier message that gets 40% off",
                "Day 5: Your hour-by-hour first week blueprint",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm md:text-base text-gray-800">
                  <Check className="w-5 h-5 flex-shrink-0 text-[#00C853] mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full px-4 py-3 md:py-4 border-2 border-black text-base focus:outline-none focus:ring-2 focus:ring-[#FF4444]"
                style={{ fontSize: "16px" }}
              />

              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name (optional)"
                className="w-full px-4 py-3 md:py-4 border-2 border-black text-base focus:outline-none focus:ring-2 focus:ring-[#FF4444]"
                style={{ fontSize: "16px" }}
              />

              {error && (
                <div className="p-3 bg-red-50 border-2 border-red-500 text-red-700 text-sm font-medium">{error}</div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#FF4444] text-white font-bold text-base md:text-lg py-4 md:py-5 border-4 border-black uppercase tracking-wide transition-all hover:bg-[#E63939] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{
                  boxShadow: "4px 4px 0px #1A1A1A",
                }}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Subscribing...
                  </>
                ) : (
                  "Send My Free Course + £30 Discount Code"
                )}
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-4 text-center">
              Join 2,847+ resellers who started with this free course
            </p>
            <div className="text-red-500 text-sm font-bold mt-2 flex items-center justify-center gap-1 animate-pulse">
              <span>⏰</span>
              <span>This offer expires when you leave this page</span>
            </div>
            <p className="text-xs text-center text-gray-500 mt-3">No spam, ever. Unsubscribe anytime.</p>
          </>
        )}
      </div>
    </div>
  )
}
