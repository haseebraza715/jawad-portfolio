"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { navLinks, site } from "@/lib/constants";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((l) => l.href.slice(1));

export function Nav() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => setOpen(false);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleNavClick();
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--nav-bg)] border-b border-[var(--nav-border)]">
      <nav
        className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-6 py-4 md:px-10"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)] text-sm font-bold text-white shrink-0">
            J
          </span>
          <span>Jawad Asif</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className={cn(
                "text-sm font-medium transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 py-1 relative",
                activeId === link.href.slice(1)
                  ? "text-[var(--accent)] after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-[var(--accent)] after:rounded-full"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cv"
            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded py-1"
          >
            View CV
          </Link>
          <Button href={site.cvPath} variant="primary" download>
            Download CV
          </Button>
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--accent-subtle)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button href={site.cvPath} variant="primary" download>
            CV
          </Button>
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-[var(--border)] text-[var(--text-primary)]"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="p-2 rounded-lg border border-[var(--border)] text-[var(--text-primary)]"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "md:hidden border-t border-[var(--border)] bg-[var(--surface)]",
          open ? "block" : "hidden"
        )}
        role="region"
        aria-label="Mobile menu"
      >
        <div className="mx-auto max-w-[1120px] px-6 py-4 md:px-10 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className={cn(
                "block py-2 text-sm font-medium rounded-lg px-2",
                activeId === link.href.slice(1)
                  ? "text-[var(--accent)] bg-[var(--accent-subtle)]"
                  : "text-[var(--text-primary)] hover:bg-[var(--accent-subtle)]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
