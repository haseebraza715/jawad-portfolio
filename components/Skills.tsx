import { skillGroups } from "@/lib/constants";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

const skillGroupsWithoutLanguages = skillGroups.filter((g) => g.title !== "Languages");

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-8 lg:gap-12 sm:grid-cols-2">
        {skillGroupsWithoutLanguages.map((group) => (
          <Card key={group.title}>
            <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] text-base mb-3">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2" role="list">
              {group.items.map((item) => (
                <li key={item}>
                  <span className="inline-flex items-center rounded-lg border border-[var(--border)] bg-[var(--tag-bg)] px-2.5 py-1 text-xs text-[var(--tag-text)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
