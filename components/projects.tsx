"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const projects = [
  {
    title: "AR Campus Tour",
    category: "AR/VR",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Sustainable Material Study",
    category: "Material Science",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Interactive Installation",
    category: "Mechatronics",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Campus Podcast Series",
    category: "Audio Lab",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Generative Art Exhibition",
    category: "Digital Art",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Product Design Workshop",
    category: "Industrial Design",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} id="projects" className="relative bg-neutral-950 px-4 py-24 md:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight md:text-4xl">
            <span className="text-[#FF5500]">Workshops</span> & Projects
          </h2>
          <p className="max-w-2xl text-neutral-400">
            Explore our latest projects spanning across various design disciplines, showcasing the innovative work of
            our club members.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/50"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="mb-2 inline-block text-xs font-medium uppercase tracking-wider text-[#FF5500]">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button className="rounded-full border border-[#FF5500] px-6 py-2 text-sm font-medium text-[#FF5500] transition-colors hover:bg-[#FF5500] hover:text-white">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
