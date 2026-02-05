export function SectionTitle({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="font-[family-name:var(--font-heading)] text-xl font-semibold tracking-tight text-[var(--text-primary)] mb-6 md:mb-8 flex items-center gap-3"
    >
      <span className="h-6 w-0.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
      {children}
    </h2>
  );
}
