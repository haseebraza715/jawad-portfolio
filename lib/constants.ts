/**
 * Portfolio content and configuration.
 * All content is exact as provided; do not invent details.
 */

export const site = {
  name: "Jawad Asif",
  headline:
    "Supply Chain | Demand Planning | Sustainability & Supplier Compliance",
  summary:
    "M.Sc Engineering Management (CGPA 4.8/5, Honors). Experience in supplier compliance, audits, KPI reporting, and production/capacity planning across global regions.",
  location: "Berlin, Deutschland",
  email: "jawadasif1493@gmail.com",
  phone: "+36 20 521 6720",
  linkedIn: "https://www.linkedin.com/in/jawadasif1493/",
  cvPath: "/Asif_Jawad_CV.docx",
  /** Short line for Quick Facts (e.g. availability) */
  availability: "Open to opportunities",
} as const;

export const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
] as const;

export const highlights = [
  {
    title: "Planning & Operations",
    description:
      "Demand planning, capacity planning, S&OP support, and production scheduling with a focus on forecast accuracy and OTIF/OTD.",
  },
  {
    title: "SAP & ERP",
    description:
      "Experience with SAP (MM, APO exposure, Ariba), MRP support, master data accuracy, and planning parameters across regions.",
  },
  {
    title: "Compliance & Audits",
    description:
      "Supplier compliance coordination, on-site audits, KPI tracking, and corrective actions for 400+ suppliers globally.",
  },
] as const;

export const experiences = [
  {
    role: "Sustainability & 3PM Supplier Compliance Trainee",
    company: "Henkel",
    location: "Budapest",
    period: "03/2024 – 01/2026",
    tags: ["SAP", "Power BI", "Supplier Audits", "KPI Tracking", "Risk & CAPA"],
    bullets: [
      "Coordinated supplier data and compliance records for 400+ suppliers across regions.",
      "Conducted 20+ on-site supplier plant visits to assess compliance, safety, and readiness.",
      "Consolidated inputs across Europe, APAC, IMEA, and North America to improve master data accuracy.",
      "Supported dashboards, KPI tracking, and audit/performance monitoring for decision-making.",
      "Collaborated with cross-functional stakeholders on operational risks, capacity constraints, and corrective actions.",
    ],
  },
  {
    role: "Assistant Manager Production, Capacity & Supply Chain Planning",
    company: "Style Textile",
    location: "Lahore",
    period: "08/2022 – 08/2023",
    tags: ["Excel", "SAP", "KPI Tracking"],
    bullets: [
      "Managed capacity planning, production scheduling, inventory tracking, and supplier coordination.",
      "Optimized workflows (with McKinsey) reducing rework/waste by 20% and improving OTD.",
      "Maintained ERP planning data, supported S&OP with structured reports, and analyzed KPIs.",
    ],
  },
] as const;

export const projects = [
  {
    title: "Supplier Compliance Visibility Dashboard",
    problem:
      "Fragmented supplier compliance info across regions.",
    action:
      "Consolidated inputs, standardized fields, supported KPI dashboards.",
    outcome:
      "Improved data reliability and faster risk discussions.",
  },
  {
    title: "On-site Audit Readiness Assessments",
    problem:
      "Inconsistent readiness and documentation at supplier plants.",
    action:
      "Conducted visits, validated conditions, shared findings for corrective actions.",
    outcome:
      "Clearer readiness baseline and targeted improvements.",
  },
  {
    title: "Production Planning Workflow Optimization",
    problem:
      "Rework and waste impacting delivery performance.",
    action:
      "Optimized planning workflow, improved reporting for S&OP.",
    outcome:
      "Reduced rework/waste by 20% and improved OTD.",
  },
] as const;

export const skillGroups = [
  {
    title: "Planning & Supply Chain",
    items: [
      "Demand Planning",
      "Forecasting",
      "Scenario Planning",
      "Forecast Accuracy",
      "OTIF/OTD",
      "Root Cause Analysis",
      "S&OE/IBP support",
      "Lifecycle (Phase-in/Phase-out)",
    ],
  },
  {
    title: "Systems & Tools",
    items: [
      "SAP (MM, APO exposure, Ariba)",
      "MRP support",
      "Master Data Accuracy",
      "Planning Parameters (lead times, disaggregation rules)",
      "Power BI",
      "Advanced Excel",
    ],
  },
  {
    title: "Continuous Improvement",
    items: [
      "Lean principles",
      "Workflow redesign",
      "Deviation analysis",
      "Corrective & preventive actions (CAPA)",
    ],
  },
  {
    title: "Languages",
    items: ["English (C1)", "German (A2)", "Hungarian (A1)"],
  },
] as const;

export const education = [
  {
    degree: "M.Sc Engineering Management",
    institution: "Budapest University of Technology and Economics",
    period: "02/2024 – 01/2026",
    note: "CGPA 4.8/5 (Excellent with honors)",
  },
  {
    degree: "B.Sc Chemical Engineering",
    institution: "University of Engineering and Technology Lahore",
    period: "09/2018 – 09/2022",
    note: null,
  },
] as const;

export const awards = [
  "Stipendium Hungaricum Scholarship | 06/2023 – 01/2026",
  "Regional Head of Kaar-e-Kamal Welfare Organization | 01/2021 – 06/2022",
] as const;
