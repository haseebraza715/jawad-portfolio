import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  download?: boolean;
  external?: boolean;
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  download,
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

  const variants = {
    primary:
      "border-[var(--accent)] bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] hover:border-[var(--accent-hover)]",
    secondary:
      "border-[var(--border)] bg-transparent text-[var(--text-primary)] hover:bg-[var(--accent-subtle)]",
    ghost:
      "border-transparent bg-transparent text-[var(--text-primary)] hover:bg-[var(--accent-subtle)]",
  };

  const combined = cn(base, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combined} download={download}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combined}>
      {children}
    </button>
  );
}
