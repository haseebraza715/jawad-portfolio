import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { JsonLdPerson } from "@/components/JsonLdPerson";
import { BackToTop } from "@/components/BackToTop";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const baseUrl = "https://jawadasif.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Jawad Asif | Supply Chain, Demand Planning & Sustainability",
  description:
    "M.Sc Engineering Management (CGPA 4.8/5). Supply chain, demand planning, supplier compliance, and sustainability. Based in Berlin.",
  keywords: [
    "Supply Chain",
    "Demand Planning",
    "Sustainability",
    "Supplier Compliance",
    "SAP",
    "ERP",
    "Berlin",
  ],
  authors: [{ name: "Jawad Asif", url: baseUrl }],
  creator: "Jawad Asif",
  openGraph: {
    type: "website",
    url: baseUrl,
    siteName: "Jawad Asif",
    title: "Jawad Asif | Supply Chain, Demand Planning & Sustainability",
    description:
      "M.Sc Engineering Management. Experience in supplier compliance, audits, KPI reporting, and production planning. Berlin.",
    locale: "en_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jawad Asif | Supply Chain, Demand Planning & Sustainability",
    description:
      "M.Sc Engineering Management. Supply chain, demand planning, supplier compliance. Berlin.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexSans.variable} ${inter.variable} antialiased min-h-screen`}
      >
        <ThemeProvider>
          <JsonLdPerson />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
