"use client";

import { Mail, Phone, Linkedin, Copy, Check } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/constants";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export function ContactContent() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <Card>
      <ul className="space-y-4" role="list">
        <li className="flex flex-wrap items-center gap-3">
<Mail className="w-5 h-5 text-[var(--accent)]" aria-hidden />
            <a
              href={`mailto:${site.email}`}
              className="text-[var(--text-primary)] hover:text-[var(--accent)] underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded"
            >
            {site.email}
          </a>
          <Button
            variant="ghost"
            onClick={copyEmail}
            className="inline-flex items-center gap-1.5 text-sm"
            aria-label={copied ? "Copied" : "Copy email"}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[var(--accent)]" aria-hidden />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" aria-hidden />
                Copy
              </>
            )}
          </Button>
        </li>
        <li className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-[var(--accent)]" aria-hidden />
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="text-[var(--text-primary)] hover:text-[var(--accent)] underline underline-offset-2"
          >
            {site.phone}
          </a>
        </li>
        <li className="flex items-center gap-3">
          <Linkedin className="w-5 h-5 text-[var(--accent)]" aria-hidden />
          <a
            href={site.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-primary)] hover:text-[var(--accent)] underline underline-offset-2"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </Card>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <ContactContent />
    </Section>
  );
}
