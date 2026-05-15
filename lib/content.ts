export const siteConfig = {
  name: "ARC Ventures",
  legalName: "ARC Ventures",
  tagline: "AI, robotics, and automation for the physical economy.",
  description:
    "A Greek venture fund backing founders who apply intelligence to real-world assets, infrastructure, and scarce resources.",
  email: "hello@arcventures.gr",
  pitchEmail: "pitch@arcventures.gr",
  location: "Athens, Greece",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/investment", label: "Investment" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/team", label: "Team" },
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
      "AI-native tools, robotics, and automation for grids, distributed assets, building efficiency, storage, inspection, and resource-aware operations.",
    signals: ["Grid intelligence", "Asset inspection", "Energy automation"],
  },
  {
    title: "Health & Wellness",
    kicker: "Human performance and care",
    description:
      "Technology that improves physical health outcomes, preventative care, diagnostics, rehabilitation, longevity, and the wellness infrastructure around people.",
    signals: ["Diagnostics", "Rehabilitation", "Preventative systems"],
  },
  {
    title: "Real Estate",
    kicker: "Buildings as intelligent assets",
    description:
      "Automation for the built environment: construction productivity, building operations, climate resilience, property intelligence, and physical asset optimization.",
    signals: ["Smart buildings", "Construction robotics", "Asset intelligence"],
  },
];

export const investmentCriteria = [
  {
    title: "Physical-world leverage",
    description:
      "The company touches assets, infrastructure, labor, energy, health, land, buildings, machines, or measurable resources.",
  },
  {
    title: "AI with a job to do",
    description:
      "Models are part of an operating system, not the product story alone. We look for decisions, actions, savings, safety, or throughput.",
  },
  {
    title: "Automation advantage",
    description:
      "Robotics, sensing, workflow control, or closed-loop execution creates a durable advantage over dashboards and services.",
  },
  {
    title: "Greek edge, global market",
    description:
      "Founders can build from Greece or with Greek talent while selling into large international markets with urgent physical constraints.",
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

export const portfolioCompanies = [
  {
    name: "HelioGrid",
    sector: "Energy",
    stage: "Concept portfolio",
    description:
      "Autonomous inspection and optimization for distributed solar, storage, and grid-edge assets.",
  },
  {
    name: "Kinesis Health",
    sector: "Health & Wellness",
    stage: "Concept portfolio",
    description:
      "Computer vision and robotics-assisted rehabilitation for clinics and wellness operators.",
  },
  {
    name: "AtlasBuilt",
    sector: "Real Estate",
    stage: "Concept portfolio",
    description:
      "AI field operations for construction progress, building performance, and asset maintenance.",
  },
  {
    name: "FoundryOS",
    sector: "Industrial Automation",
    stage: "Concept portfolio",
    description:
      "Closed-loop automation software for small factories modernizing physical production workflows.",
  },
];

/** Partner / associate roster on the Team page (replace placeholders when finalized). */
export type PartnerAssociateProfile = {
  name: string;
  tier: "Partner" | "Associate";
  bio: string;
  /** Portrait path under `public/` (e.g. `/team/surname.jpg`). Omit until the asset exists. */
  photoSrc?: string;
};

export const partnersAndAssociates: PartnerAssociateProfile[] = [
  {
    name: "Partner name (placeholder)",
    tier: "Partner",
    bio: "Short bio placeholder — prior investing or operating roles, sector focus, and how they support founders in physical-world markets.",
  },
  {
    name: "Partner name (placeholder)",
    tier: "Partner",
    bio: "Short bio placeholder — deal sourcing, portfolio support, and domain networks across energy, health, or the built environment.",
  },
  {
    name: "Associate name (placeholder)",
    tier: "Associate",
    bio: "Short bio placeholder — diligence, market maps, and founder outreach aligned with ARC's thesis.",
  },
  {
    name: "Associate name (placeholder)",
    tier: "Associate",
    bio: "Short bio placeholder — portfolio ops support, metrics tracking, and internal tooling.",
  },
  {
    name: "Associate name (placeholder)",
    tier: "Associate",
    bio: "Short bio placeholder — sector research and technical scouting for automation-led startups.",
  },
  {
    name: "Associate name (placeholder)",
    tier: "Associate",
    bio: "Short bio placeholder — LP communications, events, and partner coordination.",
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
  "Your customer owns expensive equipment, buildings, energy assets, or care operations.",
  "Your product can prove savings, uptime, throughput, safety, or health outcomes.",
  "You want a Greek base or Greek technical edge while selling globally.",
];
