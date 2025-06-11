"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { LightbulbIcon, GraduationCapIcon, UsersIcon, RocketIcon } from "lucide-react"

export function Importance() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const benefits = [
    {
      icon: <LightbulbIcon className="h-8 w-8 text-[#FF5500]" />,
      title: "Fostering Innovation",
      description:
        "Design clubs create an environment where students can experiment with new ideas and approaches, leading to innovative solutions for real-world problems.",
    },
    {
      icon: <GraduationCapIcon className="h-8 w-8 text-[#FF5500]" />,
      title: "Practical Skill Development",
      description:
        "Students gain hands-on experience with industry-standard tools and methodologies, bridging the gap between theoretical knowledge and practical application.",
    },
    {
      icon: <UsersIcon className="h-8 w-8 text-[#FF5500]" />,
      title: "Interdisciplinary Collaboration",
      description:
        "Design clubs bring together students from various disciplines, fostering cross-pollination of ideas and teaching valuable collaboration skills.",
    },
    {
      icon: <RocketIcon className="h-8 w-8 text-[#FF5500]" />,
      title: "Career Preparation",
      description:
        "Participation in design clubs builds portfolios, provides networking opportunities, and develops the soft skills employers seek in graduates.",
    },
  ]

  return (
    <section ref={ref} className="relative bg-black px-4 py-24 md:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Why Design Clubs Are <span className="text-[#FF5500]">Essential</span>
          </h2>
          <p className="max-w-2xl text-neutral-400">
            Design clubs play a crucial role in the educational ecosystem of any college, providing unique opportunities
            for growth and development that complement traditional academic curricula.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid gap-8 md:grid-cols-2"
        >
          <div className="order-2 space-y-8 md:order-1">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-neutral-900">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">{benefit.title}</h3>
                  <p className="text-neutral-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="order-1 md:order-2">
            <div className="relative h-full rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 md:p-8">
              <blockquote className="mb-8 text-xl font-medium italic text-neutral-300">
                "Design is not just what it looks like and feels like. Design is how it works. In a world driven by
                technology, design is the human touch that makes it all meaningful and accessible."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#FF5500]"></div>
                <div>
                  <div className="font-bold">Steve Jobs</div>
                  <div className="text-sm text-neutral-400">Co-founder of Apple Inc.</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-[#FF5500]/20 blur-xl"></div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 md:p-8"
        >
          <h3 className="mb-6 text-2xl font-bold">The Impact of Designers</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-black p-6">
              <div className="mb-4 text-4xl font-bold text-[#FF5500]">74%</div>
              <p className="text-neutral-400">
                Of companies report that design-driven organizations outperform their competitors
              </p>
            </div>
            <div className="rounded-lg bg-black p-6">
              <div className="mb-4 text-4xl font-bold text-[#FF5500]">2.5x</div>
              <p className="text-neutral-400">
                Higher revenue growth for companies that prioritize design in their business strategy
              </p>
            </div>
            <div className="rounded-lg bg-black p-6">
              <div className="mb-4 text-4xl font-bold text-[#FF5500]">32%</div>
              <p className="text-neutral-400">
                Increase in user satisfaction when products are designed with user-centered approaches
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-[#FF5500]/10 blur-3xl"></div>
      </div>
    </section>
  )
}
