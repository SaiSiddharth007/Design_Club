"use client"

import { motion } from "framer-motion"
import { ArrowDownIcon } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute left-0 top-0 z-10 p-6 md:p-8"
      >
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-[#FF5500]"></div>
          <h1 className="text-lg font-bold uppercase tracking-widest md:text-xl">Design Club IIT T</h1>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="z-10 max-w-4xl text-center"
      >
        <h2 className="mb-6 text-4xl font-bold uppercase tracking-tight md:text-6xl lg:text-7xl">
          Dissolving Boundaries Between <span className="text-[#FF5500]">Engineering</span>,{" "}
          <span className="text-[#FF5500]">Aesthetics</span>, and{" "}
          <span className="text-[#FF5500]">Social Sciences</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-neutral-400 md:text-xl">
          A beacon of creativity and innovation, nurturing both digital and physical design talents.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="flex cursor-pointer flex-col items-center gap-2"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }}
        >
          <span className="text-sm uppercase tracking-widest text-neutral-400">Scroll</span>
          <ArrowDownIcon className="h-6 w-6 text-[#FF5500]" />
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-[#FF5500]/10 blur-3xl"></div>
        <div className="absolute right-1/4 top-2/3 h-96 w-96 rounded-full bg-[#FF5500]/5 blur-3xl"></div>
      </div>
    </section>
  )
}
