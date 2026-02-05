import { LayoutGrid, Database, ClipboardCheck } from "lucide-react";
import { highlights } from "@/lib/constants";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

const icons = [LayoutGrid, Database, ClipboardCheck];

export function Highlights() {
  return (
    <Section id="highlights" title="Highlights">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item, i) => {
          const Icon = icons[i];
          return (
            <Card key={item.title} as="article" accentTop>
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)]">
                  <Icon className="w-5 h-5" aria-hidden />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] text-base">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
