import { Certificates } from "@/components/certificates"
import { Experience } from "@/components/experience"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { TechStack } from "@/components/tech-stack"

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground selection:bg-emerald-500/20 selection:text-foreground">
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6 lg:px-8">
        <Hero />
        <Experience />
        <Projects />
        <Certificates />
        <TechStack />
      </main>
      <Footer />
    </div>
  )
}
