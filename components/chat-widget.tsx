"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    // In a real implementation, this would send the response and get a reply
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-[45] bg-[#FF4444] text-white p-4 rounded-full shadow-lg border-4 border-black hover:scale-105 transition-transform"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
        {!isOpen && (
          <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full border-2 border-black font-bold">
            1
          </span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 md:bottom-24 md:right-6 lg:bottom-28 lg:right-8 z-[45] w-[calc(100vw-2rem)] max-w-80 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="bg-black text-white p-4 flex justify-between items-center">
            <h3 className="font-black">Quick Support</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 max-h-96 overflow-y-auto">
            {!selectedOption ? (
              <>
                <div className="bg-gray-100 p-4 rounded-lg mb-4 border-2 border-black">
                  <p className="text-sm text-black font-medium">
                    👋 Hey! Quick question - are you new to reselling or already selling?
                  </p>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => handleOptionClick("new")}
                    className="w-full text-left bg-white border-2 border-black p-3 text-sm font-bold hover:bg-gray-50 hover:translate-x-[2px] hover:translate-y-[2px] transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  >
                    🌱 I'm completely new
                  </button>
                  <button
                    onClick={() => handleOptionClick("occasional")}
                    className="w-full text-left bg-white border-2 border-black p-3 text-sm font-bold hover:bg-gray-50 hover:translate-x-[2px] hover:translate-y-[2px] transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  >
                    📦 I sell occasionally
                  </button>
                  <button
                    onClick={() => handleOptionClick("profitable")}
                    className="w-full text-left bg-white border-2 border-black p-3 text-sm font-bold hover:bg-gray-50 hover:translate-x-[2px] hover:translate-y-[2px] transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  >
                    💰 I'm already profitable
                  </button>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg border-2 border-black">
                  <p className="text-sm text-black font-medium">
                    Perfect! Based on your experience, I'd recommend checking out our courses page to see which tier
                    matches your goals.
                  </p>
                </div>

                <a
                  href="/#pricing"
                  className="block text-center bg-[#FF4444] text-white py-3 px-4 font-black border-2 border-black hover:bg-red-600"
                >
                  View Courses
                </a>

                <button
                  onClick={() => setSelectedOption(null)}
                  className="text-sm text-gray-600 underline w-full text-center"
                >
                  Start over
                </button>
              </div>
            )}

            <div className="mt-6 pt-4 border-t-2 border-gray-200">
              <p className="text-xs text-gray-600 mb-2">Need direct help?</p>
              <a
                href="mailto:support@kickcard.academy"
                className="text-xs text-black font-bold hover:text-[#FF4444] flex items-center gap-1"
              >
                <Send className="w-3 h-3" />
                support@kickcard.academy
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
