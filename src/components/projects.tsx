import { ProjectCard } from "@/components/project-card"
import { content } from "@/data/content"

export function Projects() {
  const [featuredProject, ...otherProjects] = content.projects

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b border-border py-12 md:py-16"
    >
      <div className="mb-8">
        <span className="mb-2 block text-xs font-mono font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
          02 / Selected Work
        </span>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Featured Projects
        </h2>
        <p className="mt-2 max-w-[58ch] text-sm text-muted-foreground sm:text-base">
          Web applications, mobile apps, and client websites built for real-world businesses and university communities.
        </p>
      </div>

      <div className="space-y-6">
        {featuredProject && (
          <ProjectCard project={featuredProject} featured />
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
