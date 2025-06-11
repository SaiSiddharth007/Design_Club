import { Loader } from "@/components/loader"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Disciplines } from "@/components/disciplines"
import { Projects } from "@/components/projects"
import { Importance } from "@/components/importance"
import { Ticker } from "@/components/ticker"
import { AboutMe } from "@/components/about-me"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Loader />
      <Hero />
      <About />
      <Disciplines />
      <Projects />
      <Importance />
      <Ticker />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  )
}
