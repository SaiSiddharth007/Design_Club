"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const disciplines = [
  {
    id: "physical",
    title: "Product Design (Physical)",
    areas: [
      {
        name: "Industrial Design",
        description: "Focuses on the creation of innovative and ergonomic physical products.",
      },
      {
        name: "Material Science",
        description: "Explores materials to improve functionality and aesthetics in designs.",
      },
      {
        name: "Mechatronics",
        description: "Integrates electronics and mechanics to build functional prototypes and devices.",
      },
      {
        name: "Architecture and Urban Planning",
        description: "Designing spaces and environments that enhance human experience and sustainability.",
      },
    ],
  },
  {
    id: "digital",
    title: "Digital Product Design",
    areas: [
      {
        name: "Immersive Journalism / Video Creation",
        description: "Telling stories through engaging visual and audio media.",
      },
      {
        name: "AR/VR and Spatial Media",
        description: "Creating interactive and spatially-aware digital environments.",
      },
      {
        name: "Animation and Digital Design",
        description: "Crafting moving visuals for digital narratives and UI.",
      },
      {
        name: "Graphic Designing",
        description: "Visual communication through typography, imagery, and layout.",
      },
      {
        name: "Campus Audio Lab",
        description: "Sound production for podcasts, films, and digital experiences.",
      },
      {
        name: "Digital Production House",
        description: "A centralized media unit to support content creation across all clubs.",
      },
      {
        name: "Generative Art",
        description: "Using algorithms and AI to create dynamic, evolving artworks.",
      },
    ],
  },
]

export function Disciplines() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} id="disciplines" className="relative bg-black px-4 py-24 md:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Our <span className="text-[#FF5500]">Disciplines</span>
          </h2>
          <p className="max-w-2xl text-neutral-400">
            Design Club IIT T offers a diverse range of disciplines that span both physical and digital domains,
            fostering innovation and creativity across multiple fields.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
        >
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-lg font-bold text-white">Disciplines:</span>
            {disciplines.map((discipline) => (
              <span
                key={discipline.id}
                className="rounded-full bg-neutral-900 px-6 py-2 text-sm font-medium text-[#FF5500]"
              >
                {discipline.title}
              </span>
            ))}
          </div>

          {disciplines.map((discipline) => (
            <div key={discipline.id} className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 md:p-8">
              <h3 className="mb-4 text-2xl font-bold">{discipline.title}</h3>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {discipline.areas.map((area, index) => (
                  <div key={index} className="rounded-lg border border-neutral-800 bg-black p-6">
                    <h4 className="mb-2 font-bold text-[#FF5500]">{area.name}</h4>
                    <p className="text-sm text-neutral-400">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-[#FF5500]/10 blur-3xl"></div>
      </div>
    </section>
  )
}
