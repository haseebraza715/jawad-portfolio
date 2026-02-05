import { education } from "@/lib/constants";
import { Section } from "@/components/Section";
import { Timeline, TimelineItem } from "@/components/Timeline";

export function EducationContent() {
  return (
    <Timeline>
      {education.map((entry) => (
        <TimelineItem
          key={`${entry.institution}-${entry.period}`}
          title={entry.degree}
          subtitle={entry.institution}
          period={entry.note ? `${entry.period} · ${entry.note}` : entry.period}
        >
          {null}
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export function Education() {
  return (
    <Section id="education" title="Education">
      <EducationContent />
    </Section>
  );
}
