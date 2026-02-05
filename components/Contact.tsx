"use client";

import { Mail, Phone, Linkedin, Copy, Check } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/constants";

export function ContactContent() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mx-auto max-w-2xl">
      <p className="text-center text-[var(--text-secondary)] text-sm md:text-base mb-8">
        Open to roles in supply chain, demand planning, and sustainability. Reach out for collaboration or opportunities.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {/* Email */}
        <div className="group flex flex-col items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center shadow-[var(--shadow-card)] transition-all duration-200 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--accent)]/30 hover:-translate-y-0.5">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
            <Mail className="w-6 h-6" aria-hidden />
          </span>
          <span className="mt-3 block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Email</span>
          <a href={`mailto:${site.email}`} className="mt-1 block font-medium text-[var(--text-primary)] hover:text-[var(--accent)] truncate w-full">
            {site.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="mt-3 inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-[var(--text-secondary)] hover:bg-[var(--accent-subtle)] hover:text-[var(--accent)] transition-colors"
            aria-label={copied ? "Copied" : "Copy email"}
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        {/* Phone */}
        <a
          href={`tel:${site.phone.replace(/\s/g, "")}`}
          className="group flex flex-col items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center shadow-[var(--shadow-card)] transition-all duration-200 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--accent)]/30 hover:-translate-y-0.5"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
            <Phone className="w-6 h-6" aria-hidden />
          </span>
          <span className="mt-3 block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Phone</span>
          <span className="mt-1 block font-medium text-[var(--text-primary)]">{site.phone}</span>
        </a>

        {/* LinkedIn */}
        <a
          href={site.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center shadow-[var(--shadow-card)] transition-all duration-200 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--accent)]/30 hover:-translate-y-0.5"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-subtle)] text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
            <Linkedin className="w-6 h-6" aria-hidden />
          </span>
          <span className="mt-3 block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">LinkedIn</span>
          <span className="mt-1 block font-medium text-[var(--text-primary)]">Connect</span>
        </a>
      </div>
      <p className="mt-6 text-center text-sm text-[var(--text-muted)]">
        Based in Berlin · Available for remote and on-site roles
      </p>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-14 md:py-20 lg:py-24 scroll-mt-24 bg-[var(--surface-secondary)]" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <h2 id="contact-heading" className="font-[family-name:var(--font-heading)] text-xl font-semibold tracking-tight text-[var(--text-primary)] mb-6 md:mb-8 flex items-center justify-center gap-3">
          <span className="h-6 w-0.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
          Get in touch
        </h2>
        <ContactContent />
      </div>
    </section>
  );
}
