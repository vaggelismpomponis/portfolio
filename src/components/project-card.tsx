import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ProjectItem } from "@/data/content"

interface ProjectCardProps {
  project: ProjectItem
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-foreground/30",
        featured
          ? "grid grid-cols-1 lg:grid-cols-[1.25fr_1fr]"
          : "flex flex-col"
      )}
    >
      <div
        className={cn(
          "relative aspect-[16/10] w-full overflow-hidden bg-muted",
          featured
            ? "border-b border-border lg:border-r lg:border-b-0"
            : "border-b border-border"
        )}
      >
        <Image
          src={project.image}
          alt={`Live preview of ${project.title}`}
          width={1280}
          height={800}
          loading="lazy"
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 680px"
              : "(max-width: 768px) 100vw, 560px"
          }
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between p-6">
        <div className="min-w-0">
          <div className="mb-3 flex items-center justify-between gap-2">
            <span className="truncate text-xs font-mono uppercase tracking-widest text-muted-foreground">
              {project.category} · {project.domain}
            </span>

            <div className="flex shrink-0 items-center gap-1">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} source code on GitHub`}
                  className="relative z-10 inline-flex min-h-10 min-w-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}

              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </div>
          </div>

          <h3
            className={cn(
              "font-semibold tracking-tight text-foreground",
              featured ? "text-xl sm:text-2xl" : "text-lg"
            )}
          >
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm after:absolute after:inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {project.title}
            </Link>
          </h3>

          <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        <ul
          aria-label={`Technologies used in ${project.title}`}
          className="mt-6 flex flex-wrap gap-2"
        >
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

