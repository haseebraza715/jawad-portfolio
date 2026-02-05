import { Languages as LanguagesIcon } from "lucide-react";
import { skillGroups } from "@/lib/constants";
import { Card } from "@/components/Card";

const languagesGroup = skillGroups.find((g) => g.title === "Languages");
const languages = languagesGroup?.items ?? [];

export function LanguagesContent() {
  return (
    <Card>
      <ul className="space-y-3" role="list">
        {languages.map((lang) => (
          <li
            key={lang}
            className="flex gap-3 text-sm text-[var(--text-primary)]"
          >
            <LanguagesIcon
              className="mt-0.5 w-4 h-4 shrink-0 text-[var(--accent)]"
              aria-hidden
            />
            <span>{lang}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
