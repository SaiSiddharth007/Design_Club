"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} id="contact" className="relative bg-black px-4 py-24 md:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="mb-6 text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Get in <span className="text-[#FF5500]">Touch</span>
          </h2>
          <p className="max-w-2xl text-neutral-400">
            Interested in collaborating or joining Design Club IIT T? Reach out to us and become part of our creative
            community.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid gap-12 md:grid-cols-2"
        >
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 md:p-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-neutral-400">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="border-neutral-800 bg-black text-white placeholder:text-neutral-600 focus:border-[#FF5500] focus:ring-[#FF5500]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-neutral-400">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="border-neutral-800 bg-black text-white placeholder:text-neutral-600 focus:border-[#FF5500] focus:ring-[#FF5500]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-400">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  className="border-neutral-800 bg-black text-white placeholder:text-neutral-600 focus:border-[#FF5500] focus:ring-[#FF5500]"
                />
              </div>
              <Button className="w-full bg-[#FF5500] text-white hover:bg-[#FF5500]/90">Send Message</Button>
            </form>
          </div>

          <div className="grid gap-6">
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-6">
              <h3 className="mb-4 text-xl font-bold">Location</h3>
              <p className="text-neutral-400">
                Design Club, Student Activity Center
                <br />
                IIT T Campus
                <br />
                India
              </p>
            </div>
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-6">
              <h3 className="mb-4 text-xl font-bold">Contact Info</h3>
              <p className="text-neutral-400">
                Email: ce24b024@iittp.ac.in
                <br />
                Phone: +91 9550853472
              </p>
            </div>
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-6">
              <h3 className="mb-4 text-xl font-bold">Social Media</h3>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-neutral-800 p-2">
                  <div className="h-full w-full rounded-full bg-[#FF5500]"></div>
                </div>
                <div className="h-10 w-10 rounded-full bg-neutral-800 p-2">
                  <div className="h-full w-full rounded-full bg-[#FF5500]"></div>
                </div>
                <div className="h-10 w-10 rounded-full bg-neutral-800 p-2">
                  <div className="h-full w-full rounded-full bg-[#FF5500]"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-2/3 h-64 w-64 rounded-full bg-[#FF5500]/10 blur-3xl"></div>
      </div>
    </section>
  )
}
