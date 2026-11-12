import { content } from "@/data/content"

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-b border-border py-12 md:py-16"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] lg:gap-12">
        <div>
          <span className="mb-2 block text-xs font-mono font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
            01 / Background
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Experience &amp; Education
          </h2>
        </div>

        <div className="divide-y divide-border">
          {content.experience.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="grid grid-cols-1 gap-1.5 py-6 first:pt-0 md:grid-cols-[190px_1fr] md:gap-8"
            >
              <p className="text-xs font-mono text-muted-foreground sm:text-sm md:pt-1">
                {item.period}
              </p>

              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <h3 className="text-base font-semibold text-foreground sm:text-lg">
                    {item.role}
                  </h3>
                  <span className="text-sm text-muted-foreground">·</span>
                  <span className="text-sm font-medium text-foreground/85">
                    {item.company}
                  </span>
                </div>
                <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.description}
                </p>
              </div>
            </article>
          ))}

          <article className="grid grid-cols-1 gap-1.5 pt-6 md:grid-cols-[190px_1fr] md:gap-8">
            <p className="text-xs font-mono text-muted-foreground sm:text-sm md:pt-1">
              {content.education.period}
            </p>

            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {content.education.degree}
                </h3>
                <span className="text-sm text-muted-foreground">·</span>
                <span className="text-sm font-medium text-foreground/85">
                  {content.education.university}
                </span>
              </div>
              <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
                Thesis: {content.education.thesis}.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
