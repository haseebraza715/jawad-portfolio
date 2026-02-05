import { Trophy } from "lucide-react";
import { awards } from "@/lib/constants";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

export function AwardsContent() {
  return (
    <Card>
      <ul className="space-y-3" role="list">
        {awards.map((award) => (
          <li
            key={award}
            className="flex gap-3 text-sm text-[var(--text-primary)]"
          >
            <Trophy
              className="mt-0.5 w-4 h-4 shrink-0 text-[var(--accent)]"
              aria-hidden
            />
            <span>{award}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function Awards() {
  return (
    <Section id="awards" title="Awards">
      <AwardsContent />
    </Section>
  );
}
