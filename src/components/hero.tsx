import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { content } from "@/data/content"

export function Hero() {
  return (
    <section id="about" className="border-b border-border py-12 md:py-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px] lg:items-end lg:gap-12">
        <div className="min-w-0">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <span
              className="inline-block h-2 w-2 shrink-0 rounded-full bg-emerald-500"
              aria-hidden="true"
            />
            <span>
              {content.hero.role} · {content.experience[0].company}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {content.hero.name}
          </h1>

          <p className="mt-3 max-w-[54ch] text-lg font-medium leading-snug text-foreground/85 sm:text-xl">
            {content.hero.headline}
          </p>

          <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-muted-foreground">
            {content.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="min-h-11 w-full rounded-md px-6 sm:w-auto"
            >
              <Link href={content.hero.social.email}>
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Get in Touch</span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-h-11 w-full rounded-md px-6 sm:w-auto"
            >
              <Link href="#projects">
                <span>View Selected Work</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>

        <dl className="grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3 lg:grid-cols-1 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          <div className="min-w-0">
            <dt className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Current Role
            </dt>
            <dd className="mt-1 text-sm font-medium text-foreground">
              {content.experience[0].role}, {content.experience[0].company}
            </dd>
          </div>

          <div className="min-w-0">
            <dt className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Education
            </dt>
            <dd className="mt-1 text-sm font-medium text-foreground">
              {content.education.degree}, {content.education.university}
            </dd>
          </div>

          <div className="min-w-0">
            <dt className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Core Stack
            </dt>
            <dd className="mt-1 text-sm font-medium text-foreground">
              React, TypeScript, .NET
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
