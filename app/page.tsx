import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { EducationContent } from "@/components/Education";
import { CertificationsContent } from "@/components/Certifications";
import { AwardsContent } from "@/components/Awards";
import { ContactContent } from "@/components/Contact";
import { TwoColumnSection } from "@/components/TwoColumnSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-6 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>
      <Nav />
      <main className="min-h-screen">
        <Hero />
        <Highlights />
        <Experience />
        <Projects />
        <Skills />
        <TwoColumnSection
          leftId="education"
          leftTitle="Education"
          leftChildren={<EducationContent />}
          rightId="certifications"
          rightTitle="Certifications"
          rightChildren={<CertificationsContent />}
        />
        <TwoColumnSection
          leftId="awards"
          leftTitle="Awards"
          leftChildren={<AwardsContent />}
          rightId="contact"
          rightTitle="Contact"
          rightChildren={<ContactContent />}
        />
      </main>
      <Footer />
    </>
  );
}
