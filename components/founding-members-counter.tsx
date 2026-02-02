"use client"

import { useEffect, useState } from "react"
import { createBrowserClient } from "@supabase/ssr"

export function FoundingMembersCounter() {
  const [count, setCount] = useState(8) // Start at 8 as requested
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const supabase = createBrowserClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        )

        const { count: masteryCount, error } = await supabase
          .from("orders")
          .select("*", { count: "exact", head: true })
          .eq("product_id", "3") // Mastery product ID

        if (!error && masteryCount !== null) {
          // Add 8 to the actual count to start from 8
          setCount(Math.min(masteryCount + 8, 50))
        }
      } catch (error) {
        console.error("Error fetching founding members count:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCount()

    // Refresh count every 30 seconds
    const interval = setInterval(fetchCount, 30000)
    return () => clearInterval(interval)
  }, [])

  const spotsRemaining = 50 - count

  return (
    <div className="text-center">
      {isLoading ? (
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mx-auto mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32 mx-auto"></div>
        </div>
      ) : (
        <>
          <div className="text-3xl font-bold text-red-600 mb-1">{count} of 50 Founding Member Spots Taken</div>
          <div className="text-lg text-black">
            Only <span className="font-bold text-red-600">{spotsRemaining} spots remaining</span>
          </div>
        </>
      )}
    </div>
  )
}
