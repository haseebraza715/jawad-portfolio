import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  /** When true, section does not add its own container (for use inside page-level grids) */
  noContainer?: boolean;
};

export function Section({ id, title, children, className, noContainer }: SectionProps) {
  const content = (
    <>
      {title && (
        <h2
          id={id ? `${id}-heading` : undefined}
          className="font-[family-name:var(--font-heading)] text-xl font-semibold tracking-tight text-[var(--text-primary)] mb-6 md:mb-8 flex items-center gap-3"
        >
          <span className="h-6 w-0.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
          {title}
        </h2>
      )}
      {children}
    </>
  );

  if (noContainer) {
    return (
      <section
        id={id}
        className={cn("scroll-mt-24", className)}
        aria-labelledby={title ? `${id}-heading` : undefined}
      >
        {content}
      </section>
    );
  }

  return (
    <section
      id={id}
      className={cn("py-14 md:py-20 lg:py-24 scroll-mt-24", className)}
      aria-labelledby={title ? `${id}-heading` : undefined}
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        {content}
      </div>
    </section>
  );
}
