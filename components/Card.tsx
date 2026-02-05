import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article";
  /** Optional accent top border (e.g. for highlight cards) */
  accentTop?: boolean;
};

export function Card({
  children,
  className,
  as: Component = "div",
  accentTop = false,
}: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-2xl border bg-[var(--surface)] p-6 transition-all duration-200 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-px",
        "border-[var(--border-subtle)] shadow-[var(--shadow-card)]",
        accentTop && "border-t-2 border-t-[var(--accent)]",
        className
      )}
    >
      {children}
    </Component>
  );
}
