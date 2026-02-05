import { site } from "@/lib/constants";

const lastUpdated = "February 2026";

export function Footer() {
  return (
    <footer
      className="border-t border-[var(--border)] py-8"
      role="contentinfo"
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p>Last updated: {lastUpdated}</p>
      </div>
    </footer>
  );
}
