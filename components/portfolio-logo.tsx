import type { ReactNode } from "react";

type PortfolioLogoProps = {
  name: string;
  className?: string;
};

const logoArtwork: Record<string, ReactNode> = {
  HelioGrid: (
    <svg className="h-9 w-9" viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="8" fill="currentColor" />
      <path
        d="M24 5v7M24 36v7M5 24h7M36 24h7M10.6 10.6l5 5M32.4 32.4l5 5M37.4 10.6l-5 5M15.6 32.4l-5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.5"
      />
      <path d="M8 40h32M12 34h24M16 28h16" stroke="#ff7a59" strokeLinecap="round" strokeWidth="2" />
    </svg>
  ),
  "Kinesis Health": (
    <svg className="h-9 w-9" viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M24 40s-14-8.7-14-20a8 8 0 0 1 14-5.3A8 8 0 0 1 38 20c0 11.3-14 20-14 20Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M10 25h8l3-7 5 14 4-7h8"
        fill="none"
        stroke="#ff7a59"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  ),
  AtlasBuilt: (
    <svg className="h-9 w-9" viewBox="0 0 48 48" aria-hidden="true">
      <path d="M10 40V14l14-6 14 6v26" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="3" />
      <path d="M18 40V26h12v14M17 18h3M28 18h3M17 24h3M28 24h3" stroke="#ff7a59" strokeLinecap="round" strokeWidth="3" />
      <path d="M7 40h34" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
    </svg>
  ),
  FoundryOS: (
    <svg className="h-9 w-9" viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M8 39V23l9 5v-5l9 5v-8l14-5v24H8Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path d="M16 39V30M24 39V30M32 39V27" stroke="#ff7a59" strokeLinecap="round" strokeWidth="2.5" />
      <path d="M12 14h8M16 10v8" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
    </svg>
  ),
};

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function PortfolioLogo({ name, className = "" }: PortfolioLogoProps) {
  return (
    <div
      className={`flex size-16 shrink-0 items-center justify-center text-primary ${className}`}
      role="img"
      aria-label={`${name} concept logo`}
    >
      {logoArtwork[name] ?? <span className="font-mono text-sm font-bold tracking-[0.12em]">{getInitials(name)}</span>}
    </div>
  );
}
