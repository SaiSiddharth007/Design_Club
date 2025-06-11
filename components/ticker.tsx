"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

const quotes = [
  "Design is intelligence made visible. — Alina Wheeler",
  "Good design is obvious. Great design is transparent. — Joe Sparano",
  "Design creates culture. Culture shapes values. Values determine the future. — Robert L. Peters",
  "Design is not just what it looks like and feels like. Design is how it works. — Steve Jobs",
  "Design is where science and art break even. — Robin Mathew",
  "Design is not a single object or dimension. Design is messy and complex. — Natasha Jen",
  "Design is the silent ambassador of your brand. — Paul Rand",
  "The details are not the details. They make the design. — Charles Eames",
  "Design is thinking made visual. — Saul Bass",
  "Good design is good business. — Thomas Watson Jr.",
]

export function Ticker() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollerRef.current || !contentRef.current) return

    const scrollerContent = Array.from(contentRef.current.children)

    // Duplicate the content for seamless scrolling
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      if (contentRef.current) {
        contentRef.current.appendChild(duplicatedItem)
      }
    })
  }, [])

  return (
    <div className="relative overflow-hidden bg-neutral-950 py-6">
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950 w-full h-full"></div>
      <div ref={scrollerRef} className="scroller relative z-0 max-w-full overflow-hidden">
        <motion.div
          ref={contentRef}
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 30, ease: "linear" }}
        >
          {quotes.map((quote, index) => (
            <div key={index} className="flex-shrink-0 px-8">
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-[#FF5500]"></div>
                <span className="text-lg font-medium text-white">{quote}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
