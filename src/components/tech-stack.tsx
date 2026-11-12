import { content } from "@/data/content"

const categoryLabels: Record<keyof typeof content.techStack, string> = {
  frontend: "Frontend",
  backend: "Backend & Data",
  tools: "Tools & Workflow",
}

export function TechStack() {
  const entries = Object.entries(content.techStack) as Array<
    [keyof typeof content.techStack, string[]]
  >

  return (
    <section id="tech-stack" className="scroll-mt-20 py-12 md:py-16">
      <div className="mb-8">
        <span className="mb-2 block text-xs font-mono font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
          04 / Capabilities
        </span>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Tech Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {entries.map(([category, items]) => (
          <div key={category} className="min-w-0 border-t border-border pt-4">
            <h3 className="mb-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              {categoryLabels[category]}
            </h3>

            <ul className="flex flex-wrap gap-2">
              {items.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-foreground/90"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
