import { cn } from "@/lib/utils";

type TimelineItemProps = {
  title: string;
  subtitle?: string;
  period?: string;
  children: React.ReactNode;
  className?: string;
};

export function TimelineItem({
  title,
  subtitle,
  period,
  children,
  className,
}: TimelineItemProps) {
  return (
    <div className={cn("relative pl-6 border-l-2 border-[var(--border)]", className)}>
      <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-[var(--accent)] border-2 border-[var(--background)]" aria-hidden />
      <div className="pb-2">
        <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)]">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-[var(--text-secondary)] mt-0.5">{subtitle}</p>
        )}
        {period && (
          <p className="text-xs text-[var(--text-muted)] mt-1">{period}</p>
        )}
      </div>
      {children != null && <div className="text-sm text-[var(--text-primary)]">{children}</div>}
    </div>
  );
}

export function Timeline({ children }: { children: React.ReactNode }) {
  return <div className="space-y-8">{children}</div>;
}
