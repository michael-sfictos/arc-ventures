export const siteConfig = {
  name: "ARC Ventures",
  legalName: "ARC Ventures",
  tagline: "AI, robotics, and automation for the physical economy.",
  description:
    "A Greek venture investor backing founders who apply intelligence to real-world assets, infrastructure, operations and scarce resources.",
  email: "hello@arcventures.gr",
  pitchEmail: "pitch@arcventures.gr",
  location: "Athens, Greece",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/investment", label: "Investment" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/team", label: "Team", hidden: true },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "3", label: "Core domains" },
  { value: "0", label: "SaaS-only thesis" },
  { value: "EU", label: "Greece to global" },
  { value: "ARC", label: "Assets, resources, cognition" },
];

export const focusSectors = [
  {
    title: "Energy",
    kicker: "Resilient energy systems",
    description:
      "AI-native systems, robotics, and automation for grids, distributed assets, building efficiency, storage, inspection, and resource-aware operations.",
    signals: ["Grid intelligence", "Asset inspection", "Energy automation"],
  },
  {
    title: "Real Estate",
    kicker: "Buildings as intelligent assets",
    description:
      "Automation for the built environment: construction productivity, building operations, climate resilience, property intelligence, and physical asset optimization.",
    signals: ["Smart buildings", "Construction robotics", "Asset intelligence"],
  },
  {
    title: "Retail",
    kicker: "Intelligent retail systems",
    description:
      "Inventory, supply chains, store operations, demand forecasting, customer experience, autonomous fulfillment, and last-mile delivery.",
    signals: ["Inventory intelligence", "Autonomous operations", "Customer experience"],
  },
];

export const investmentCriteria = [
  {
    title: "Physical-world leverage",
    description:
      "The company touches assets, infrastructure, labor, energy, land, buildings, machines, or measurable resources.",
  },
  {
    title: "AI with a job to do",
    description:
      "Models are part of an operating system, not the product story alone. We look for decisions, actions, savings, safety, or throughput.",
  },
  {
    title: "Automation moat",
    description:
      "Robotics, sensing, workflow control, or closed-loop execution creates a durable edge over dashboards and services.",
  },
  {
    title: "Greek edge, global market",
    description:
      "Built from Greece or with Greek talent, sold into large markets with urgent physical constraints.",
  },
];

export const avoidList = [
  "Horizontal SaaS with no physical asset or operational wedge.",
  "Pure marketplaces that aggregate demand and supply without technical depth.",
  "AI wrappers where the core value is a prompt, not a workflow or system.",
  "Low-urgency productivity tools without measurable resource impact.",
];

export const investmentModel = [
  {
    title: "Pre-seed",
    amount: "EUR 150K-400K",
    description:
      "First institutional capital for technical founders validating a physical-world wedge and a clear commercial buyer.",
  },
  {
    title: "Seed",
    amount: "EUR 500K-1.5M",
    description:
      "Lead or co-lead rounds for teams turning prototypes, pilots, or early revenue into repeatable deployments.",
  },
  {
    title: "Follow-on",
    amount: "Selective reserves",
    description:
      "Support into Seed+ and Series A when the company proves operational traction and capital-efficient scaling.",
  },
];

export type PortfolioCompany = {
  name: string;
  sector: string;
  stage: string;
  description: string;
  logoSrc?: string;
  websiteUrl?: string;
};

export const portfolioCompanies: PortfolioCompany[] = [
  {
    name: "Fractual",
    sector: "Tokenised real-world assets",
    stage: "Launching Q3 2026",
    logoSrc: "/portfolio/FractualAppIcon.svg",
    websiteUrl: "https://www.fractual.com/en",
    description:
      "An investment platform for tokenised real-world assets, built to make asset-backed opportunities easier to access and manage.",
  },
  {
    name: "Investimate",
    sector: "Real estate intelligence",
    stage: "Launching Q3 2026",
    logoSrc: "/portfolio/InvestimateAppIcon.svg",
    websiteUrl: "https://www.investimate.com/en",
    description:
      "A business intelligence tool for real estate assets, helping owners understand performance, risk, and investment decisions.",
  },
  {
    name: "Retail Infrastructure",
    sector: "Autonomous retail operations",
    stage: "Launching Q4 2026",
    description:
      "Autonomous laundromats with last-mile delivery, designed for faster neighborhood laundry operations and better customer convenience.",
  },
  {
    name: "Health Intelligence",
    sector: "Preventive health intelligence",
    stage: "Launching Q4 2026",
    description:
      "A holistic blood testing service that tracks more than 90 biomarkers and delivers fast results directly to your phone.",
  },
  {
    name: "Hospitality Systems",
    sector: "Short-term rental concierge",
    stage: "Launching Q4 2026",
    description:
      "A smart concierge service for the short-term rental market, improving guest support, local discovery, and operator workflows.",
  },
];

/** Partner / associate roster on the Team page. */
export type PartnerAssociateProfile = {
  name: string;
  role: string;
  bio: string;
  linkedinUrl?: string;
  /** Portrait path under `public/` (e.g. `/team/surname.jpg`). Omit until the asset exists. */
  photoSrc?: string;
};

export const partnersAndAssociates: PartnerAssociateProfile[] = [
  {
    name: "Anastasios Papanagiotou",
    role: "Founder & Managing Shareholder, Faraday Norton",
    bio: "Founder and managing shareholder at Faraday Norton, with operating and investment experience across energy transition, real estate, renewables, and utility platforms, including WATT+VOLT and ESC Energy Services Company SA.",
    linkedinUrl: "https://gr.linkedin.com/in/anastasios-papanagiotou-941a5421",
    photoSrc: "/team/anastasios-papanagiotou.jpg",
  },
  {
    name: "Ekin Burak O.",
    role: "Co-Founder, Stealth Startup",
    bio: "Operator-investor with venture, product, and data experience across LAUNCHub Ventures, Ferto, Blueground, QNB Finansbank, and S&P Capital IQ, spanning startup formation, product strategy, business intelligence, and founder networks.",
    linkedinUrl: "https://www.linkedin.com/in/ekinburak/",
  },
  {
    name: "Nasia Xanthi",
    role: "Chief Legal Officer & Director, Real Estate Division, Faraday Norton",
    bio: "Legal and real estate leader at Faraday Norton, with senior counsel experience across banking, energy, telecommunications, government advisory, and property-related transactions.",
    linkedinUrl: "https://gr.linkedin.com/in/nasia-xanthi-9aa24083",
  },
];

export const teamMembers = [
  {
    name: "Founding Partner",
    role: "Physical economy investing",
    bio: "Operator-investor focused on AI, robotics, automation, and companies that can be built from Greece for global markets.",
  },
  {
    name: "Venture Partner",
    role: "Energy and infrastructure",
    bio: "Advisor profile for grid, climate, energy assets, and industrial partnerships.",
  },
  {
    name: "Venture Partner",
    role: "Health, wellness, and built environment",
    bio: "Advisor profile for healthcare operators, wellness platforms, real estate owners, and regulated markets.",
  },
];

export const founderSignals = [
  "You are building hardware-enabled or asset-connected automation.",
  "Your customer owns expensive physical assets: equipment, buildings, or energy infrastructure.",
  "You have a paying pilot or a customer who's asked for one.",
  "You want a Greek base or Greek technical edge while selling globally.",
];
