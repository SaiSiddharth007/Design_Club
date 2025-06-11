"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function AboutMe() {
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
          className="grid gap-12 md:grid-cols-2"
        >
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight md:text-4xl">
              About <span className="text-[#FF5500]">Me</span>
            </h2>
            <p className="mb-6 text-neutral-400">
              I'm Sai Siddharth, a design addict, pursuing my B.Tech undergraduate in Civil and Environmental
              Engineering department.
            </p>
            <p className="mb-8 text-neutral-400">
              My passion lies at the intersection of engineering principles and creative design. I believe that great
              design can transform not just how things look, but how they function and impact our world.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-neutral-400">Civil Engineering</div>
              <div className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-neutral-400">Environmental Design</div>
              <div className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-neutral-400">UI/UX</div>
              <div className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-neutral-400">Sustainable Design</div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 md:p-8">
              <div className="mb-8 text-2xl font-bold">
                <span className="text-[#FF5500]">Let's create something</span> crazy together!
              </div>
              <p className="mb-8 text-neutral-400">
                I'm always open to collaborations, design challenges, and innovative projects. Whether you're interested
                in joining Design Club IIT T or have a project idea, I'd love to hear from you.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF5500]/20">
                    <div className="h-4 w-4 rounded-full bg-[#FF5500]"></div>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-400">Email</div>
                    <div className="font-medium">ce24b024@iittp.ac.in</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF5500]/20">
                    <div className="h-4 w-4 rounded-full bg-[#FF5500]"></div>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-400">Phone</div>
                    <div className="font-medium">+91 9550853472</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 -z-10 h-64 w-64 rounded-full bg-[#FF5500]/10 blur-3xl"></div>
            <div className="absolute -top-4 -left-4 -z-10 h-32 w-32 rounded-full bg-[#FF5500]/5 blur-xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
