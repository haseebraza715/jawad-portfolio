import Image from "next/image";
import { FileDown, Linkedin, FileText } from "lucide-react";
import { site } from "@/lib/constants";
import { Button } from "@/components/Button";

function CtaButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button
        href={site.cvPath}
        variant="primary"
        download
        className="inline-flex items-center gap-2"
      >
        <FileDown className="w-4 h-4" aria-hidden />
        Download CV
      </Button>
      <Button
        href="/cv"
        variant="secondary"
        className="inline-flex items-center gap-2"
      >
        <FileText className="w-4 h-4" aria-hidden />
        View CV
      </Button>
      <Button
        href={site.linkedIn}
        variant="secondary"
        external
        className="inline-flex items-center gap-2"
      >
        <Linkedin className="w-4 h-4" aria-hidden />
        LinkedIn
      </Button>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="pt-14 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24 scroll-mt-24 bg-[var(--surface-secondary)]"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start">
          {/* Left: intro (on mobile: description first, then picture) */}
          <div>
            <h1
              id="hero-heading"
              className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-semibold tracking-tight text-[var(--text-primary)] max-w-xl"
            >
              {site.name}
            </h1>
            <p className="mt-2 font-[family-name:var(--font-heading)] text-lg md:text-xl text-[var(--text-primary)] font-medium">
              {site.headline}
            </p>
            <p className="mt-4 text-[var(--text-secondary)] text-sm md:text-base max-w-xl leading-relaxed line-clamp-2">
              {site.summary}
            </p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              {site.location}
            </p>

            {/* Bio */}
            <div className="mt-8">
              <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed max-w-xl">
                Jawad Asif is a Supply Chain and Demand Planning professional with a strong focus on sustainability, supplier compliance, and ERP-driven operations. He is currently completing his M.Sc. in Engineering Management with honors (CGPA 4.8/5) and has hands-on experience supporting supplier audits, KPI reporting, and production and capacity planning across global regions.
              </p>
              <p className="mt-4 text-[var(--text-secondary)] text-sm md:text-base leading-relaxed max-w-xl">
                His work spans structured planning, master data accuracy, and cross-functional coordination, with exposure to SAP-based environments and performance-driven decision support. Based in Berlin, he brings a pragmatic, systems-oriented approach to improving reliability, compliance, and operational efficiency in complex supply chains.
              </p>
            </div>

            {/* Mobile: picture after description, then CTAs */}
            <div className="lg:hidden mt-8">
              <div className="flex justify-center mb-4">
                <div className="relative w-40 h-40 rounded-2xl overflow-hidden flex-shrink-0 aspect-square">
                  <Image
                    src="/headshot.jpeg"
                    alt=""
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                    priority
                    sizes="160px"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <CtaButtons />
              </div>
            </div>
          </div>

          {/* Right (desktop): picture then Download CV + LinkedIn below */}
          <div className="hidden lg:flex flex-col gap-6">
            <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/headshot.jpeg"
                alt=""
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
                sizes="(min-width: 1024px) 320px, 0px"
              />
            </div>
            <CtaButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
