import { Award, CheckCircle2, Code2, Linkedin, Terminal } from "lucide-react"
import { cn } from "@/lib/utils"
import type { CertificateItem } from "@/data/content"

interface CertificateCardProps {
  certificate: CertificateItem
  featured?: boolean
}

function IssuerMark({ issuer }: { issuer: string }) {
  if (issuer === "Microsoft") {
    return (
      <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0" aria-hidden="true">
        <rect x="1" y="1" width="6.5" height="6.5" fill="#F25022" />
        <rect x="8.5" y="1" width="6.5" height="6.5" fill="#7FBA00" />
        <rect x="1" y="8.5" width="6.5" height="6.5" fill="#00A4EF" />
        <rect x="8.5" y="8.5" width="6.5" height="6.5" fill="#FFB900" />
      </svg>
    )
  }

  const Icon =
    issuer === "LinkedIn"
      ? Linkedin
      : issuer === "freeCodeCamp"
        ? Code2
        : issuer === "PwC"
          ? Terminal
          : Award

  return (
    <Icon
      className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400"
      strokeWidth={1.75}
      aria-hidden="true"
    />
  )
}

export function CertificateCard({
  certificate,
  featured = false,
}: CertificateCardProps) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card shadow-xs dark:shadow-none",
        featured
          ? "grid grid-cols-1 lg:grid-cols-[1.3fr_1fr]"
          : "flex flex-col justify-between p-6"
      )}
    >
      <div className={cn("flex min-w-0 flex-col justify-between", featured && "p-6")}>
        <div className="min-w-0">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-muted-foreground">
            <span className="inline-flex items-center gap-2 uppercase tracking-widest">
              <IssuerMark issuer={certificate.issuer} />
              <span>
                {featured
                  ? `${certificate.issuer} · ${certificate.category}`
                  : certificate.issuer}
              </span>
            </span>
            <time>{certificate.date}</time>
          </div>

          <h3
            className={cn(
              "font-semibold tracking-tight text-foreground",
              featured ? "text-xl sm:text-2xl" : "text-lg"
            )}
          >
            {certificate.title}
          </h3>

          <p className="mt-2.5 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
            {certificate.description}
          </p>
        </div>

        <ul
          aria-label={`Topics covered in ${certificate.title}`}
          className="mt-6 flex flex-wrap gap-2"
        >
          {certificate.highlights.map((item) => (
            <li
              key={item}
              className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {featured && (
        <dl className="flex flex-col justify-between gap-5 border-t border-border bg-muted/45 p-6 dark:bg-background/60 lg:border-t-0 lg:border-l">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            <CheckCircle2
              className="h-4 w-4 shrink-0"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <span>Verified Credential</span>
          </div>

          <div className="space-y-4">
            <div>
              <dt className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Issuing Organization
              </dt>
              <dd className="mt-1 text-sm font-medium text-foreground">
                {certificate.issuer}
              </dd>
            </div>

            <div>
              <dt className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Issued Date
              </dt>
              <dd className="mt-1 text-sm font-medium text-foreground">
                {certificate.date}
              </dd>
            </div>

            {certificate.credentialId && (
              <div>
                <dt className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Credential ID
                </dt>
                <dd className="mt-1 break-all font-mono text-sm font-medium text-foreground">
                  {certificate.credentialId}
                </dd>
              </div>
            )}
          </div>
        </dl>
      )}
    </article>
  )
}
