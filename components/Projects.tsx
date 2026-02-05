import { FolderOpen } from "lucide-react";
import { projects } from "@/lib/constants";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} as="article">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)]">
                <FolderOpen className="w-5 h-5" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)]">
                  {project.title}
                </h3>
                <dl className="mt-3 space-y-1.5 text-sm">
                  <div>
                    <dt className="font-medium text-[var(--text-muted)]">Problem</dt>
                    <dd className="text-[var(--text-primary)]">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-[var(--text-muted)]">Action</dt>
                    <dd className="text-[var(--text-primary)]">{project.action}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-[var(--text-muted)]">Outcome</dt>
                    <dd className="text-[var(--text-primary)]">{project.outcome}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
