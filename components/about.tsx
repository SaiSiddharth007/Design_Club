"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="relative bg-neutral-950 px-4 py-24 md:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 grid gap-8 md:grid-cols-2 md:gap-12"
        >
          <div>
            <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight md:text-4xl">
              About <span className="text-[#FF5500]">Design Club</span>
            </h2>
            <p className="text-neutral-400">
              Design Club at IIT T aims to dissolve the boundaries between Engineering, Aesthetics, and Social Sciences.
              We stand as a beacon of creativity and innovation, nurturing both digital and physical design talents.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-32 w-32 rounded-full bg-[#FF5500]"></div>
              <div className="h-32 w-32 rounded-full bg-neutral-800"></div>
              <div className="h-32 w-32 rounded-full bg-neutral-800"></div>
              <div className="h-32 w-32 rounded-full bg-[#FF5500]/30"></div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid gap-8 md:grid-cols-3"
        >
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-6">
            <div className="mb-4 h-12 w-12 rounded-full bg-[#FF5500]/20 p-3">
              <div className="h-full w-full rounded-full bg-[#FF5500]"></div>
            </div>
            <h3 className="mb-2 text-xl font-bold">Engineering</h3>
            <p className="text-sm text-neutral-400">
              Applying technical knowledge to solve design challenges and create functional products.
            </p>
          </div>
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-6">
            <div className="mb-4 h-12 w-12 rounded-full bg-[#FF5500]/20 p-3">
              <div className="h-full w-full rounded-full bg-[#FF5500]"></div>
            </div>
            <h3 className="mb-2 text-xl font-bold">Aesthetics</h3>
            <p className="text-sm text-neutral-400">
              Creating visually appealing designs that communicate effectively and evoke emotion.
            </p>
          </div>
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-6">
            <div className="mb-4 h-12 w-12 rounded-full bg-[#FF5500]/20 p-3">
              <div className="h-full w-full rounded-full bg-[#FF5500]"></div>
            </div>
            <h3 className="mb-2 text-xl font-bold">Social Sciences</h3>
            <p className="text-sm text-neutral-400">
              Understanding human behavior and society to create designs that resonate with users.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
