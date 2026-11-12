import { CertificateCard } from "@/components/certificate-card"
import { content } from "@/data/content"

export function Certificates() {
  const [featuredCertificate, ...otherCertificates] = content.certificates

  return (
    <section
      id="certificates"
      className="scroll-mt-20 border-b border-border py-12 md:py-16"
    >
      <div className="mb-8">
        <span className="mb-2 block text-xs font-mono font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
          03 / Credentials
        </span>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Certifications
        </h2>
        <p className="mt-2 max-w-[58ch] text-sm text-muted-foreground sm:text-base">
          Verified industry certifications, intensive engineering workshops, and coursework credentials.
        </p>
      </div>

      <div className="space-y-6">
        {featuredCertificate && (
          <CertificateCard certificate={featuredCertificate} featured />
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {otherCertificates.map((cert) => (
            <CertificateCard key={cert.title} certificate={cert} />
          ))}
        </div>
      </div>
    </section>
  )
}
