import { Certificates } from "@/components/certificates"
import { Experience } from "@/components/experience"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { TechStack } from "@/components/tech-stack"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <div className="space-y-24">
          <Experience />
          <Projects />
          <Certificates />
          <TechStack />
        </div>
        <Footer />
      </div>
    </main>
  )
}
