import { experiences } from "@/lib/constants";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {experiences.map((exp) => (
          <Card key={`${exp.company}-${exp.period}`} as="article">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--text-primary)]">
                {exp.role}
              </h3>
              <span className="text-sm text-[var(--text-muted)]">{exp.period}</span>
            </div>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              {exp.company} · {exp.location}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-[var(--text-primary)] list-disc list-inside marker:text-[var(--accent)]">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="pl-1">
                  {bullet}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
