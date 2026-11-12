import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Logo } from "@/components/logo"
import { content } from "@/data/content"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Logo showWordmark={false} markClassName="h-5 w-5" />
          <p>
            © {new Date().getFullYear()} {content.hero.name}.
          </p>
        </div>

        <nav aria-label="Social and contact links" className="flex flex-wrap items-center gap-5">
          <Link
            href={content.hero.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center gap-1.5 rounded-md outline-none transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>LinkedIn</span>
          </Link>

          <Link
            href={content.hero.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center gap-1.5 rounded-md outline-none transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>GitHub</span>
          </Link>

          <Link
            href={content.hero.social.email}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-md outline-none transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Email</span>
          </Link>
        </nav>
      </div>
    </footer>
  )
}
