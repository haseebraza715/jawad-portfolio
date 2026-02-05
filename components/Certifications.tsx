import { Award } from "lucide-react";
import { certifications } from "@/lib/constants";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

export function CertificationsContent() {
  return (
    <Card>
      <ul className="space-y-3" role="list">
        {certifications.map((cert) => (
          <li
            key={cert}
            className="flex gap-3 text-sm text-[var(--text-primary)]"
          >
            <Award
              className="mt-0.5 w-4 h-4 shrink-0 text-[var(--accent)]"
              aria-hidden
            />
            <span>{cert}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <CertificationsContent />
    </Section>
  );
}
