import Link from "next/link";
import { FileDown, ArrowLeft } from "lucide-react";
import {
  site,
  experiences,
  education,
  skillGroups,
  projects,
  awards,
} from "@/lib/constants";
import certificationsData from "@/content/certifications.json";

type Certification = { name: string; issuer: string; issued: string };
const certifications = certificationsData as Certification[];

export const metadata = {
  title: "CV | Jawad Asif",
  description: "Curriculum Vitae (Asif_Jawad_CV) – Supply Chain, Demand Planning, Sustainability",
};

export default function CVPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-md print:hidden">
        <div className="mx-auto flex max-w-[800px] items-center justify-between gap-4 px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>
          <a
            href={site.cvPath}
            download="Asif_Jawad_CV.docx"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--accent)] bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-white hover:bg-[var(--accent-hover)]"
          >
            <FileDown className="w-4 h-4" />
            Download Asif_Jawad_CV.docx
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-[800px] px-6 py-10 print:py-0">
        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)] p-8 md:p-12 print:shadow-none print:border-0">
          {/* Header — same content as Asif_Jawad_CV.docx */}
          <header className="border-b border-[var(--border)] pb-6 mb-6">
            <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2">
              Web version of Asif_Jawad_CV.docx
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--text-primary)]">
              Jawad Asif
            </h1>
            <p className="mt-1 text-[var(--accent)] font-medium">
              {site.headline}
            </p>
            <p className="mt-3 text-sm text-[var(--text-secondary)] max-w-xl">
              {site.summary}
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-[var(--text-muted)]">
              <li>{site.location}</li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-[var(--accent)]">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-[var(--accent)]">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)]">
                  LinkedIn
                </a>
              </li>
            </ul>
          </header>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-[var(--accent)] mb-4">
              Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={`${exp.company}-${exp.period}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-[var(--text-muted)]">{exp.period}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {exp.company} · {exp.location}
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-[var(--text-primary)] list-disc list-inside">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-[var(--accent)] mb-4">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((ed) => (
                <div key={`${ed.institution}-${ed.period}`}>
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)]">
                    {ed.degree}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{ed.institution}</p>
                  <p className="text-sm text-[var(--text-muted)]">
                    {ed.period}
                    {ed.note ? ` · ${ed.note}` : ""}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-[var(--accent)] mb-4">
              Skills
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {skillGroups.map((g) => (
                <div key={g.title}>
                  <h3 className="font-medium text-[var(--text-primary)] text-sm">{g.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    {g.items.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-[var(--accent)] mb-4">
              Certifications
            </h2>
            <ul className="space-y-2 text-sm">
              {certifications.map((c) => (
                <li key={`${c.name}-${c.issued}`} className="flex flex-wrap items-baseline gap-2">
                  <span className="font-medium text-[var(--text-primary)]">{c.name}</span>
                  <span className="text-[var(--text-muted)]">·</span>
                  <span className="text-[var(--text-secondary)]">{c.issuer}</span>
                  <span className="text-[var(--text-muted)]">({c.issued})</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-[var(--accent)] mb-4">
              Selected Projects
            </h2>
            <div className="space-y-4">
              {projects.map((p) => (
                <div key={p.title}>
                  <h3 className="font-medium text-[var(--text-primary)]">{p.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    <strong>Problem:</strong> {p.problem} <strong>Action:</strong> {p.action}{" "}
                    <strong>Outcome:</strong> {p.outcome}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Awards */}
          <section>
            <h2 className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wider text-[var(--accent)] mb-4">
              Awards
            </h2>
            <ul className="space-y-1 text-sm text-[var(--text-primary)]">
              {awards.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </section>
        </article>
      </main>
    </div>
  );
}
