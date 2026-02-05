import { Award } from "lucide-react";
import { Section } from "@/components/Section";
import certificationsData from "@/content/certifications.json";

type Certification = { name: string; issuer: string; issued: string };
const certifications = certificationsData as Certification[];

export function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <article
            key={`${cert.name}-${cert.issued}`}
            className="group flex gap-4 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] p-5 shadow-[var(--shadow-card)] transition-all duration-200 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-px"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)]">
              <Award className="w-5 h-5" aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] text-sm leading-snug">
                {cert.name}
              </h3>
              <p className="mt-1 text-xs text-[var(--text-secondary)]">
                {cert.issuer}
              </p>
              <p className="mt-1.5 text-xs font-medium text-[var(--text-muted)]">
                {cert.issued}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
