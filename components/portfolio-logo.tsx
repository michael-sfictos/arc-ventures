"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

type PortfolioLogoProps = {
  name: string;
  src?: string;
  className?: string;
};

const logoArtwork: Record<string, ReactNode> = {
  "Retail Infrastructure": (
    <svg className="h-9 w-9" viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M13 12h22a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H13a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M15 18h18M24 24a6 6 0 1 1 0 12 6 6 0 0 1 0-12Z"
        fill="none"
        stroke="#ff7a59"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <path d="M34 32h6l3 3M40 32l3-3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
    </svg>
  ),
  "Health Intelligence": (
    <svg className="h-9 w-9" viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M18 8h12M21 8v11L13 34a6 6 0 0 0 5.3 8h11.4A6 6 0 0 0 35 34l-8-15V8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path d="M18 33h12" stroke="#ff7a59" strokeLinecap="round" strokeWidth="3" />
      <circle cx="20" cy="27" r="2" fill="#ff7a59" />
      <circle cx="28" cy="29" r="2" fill="currentColor" />
    </svg>
  ),
  "Hospitality Systems": (
    <svg className="h-9 w-9" viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M8 23 24 11l16 12v17H8V23Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M17 30h14M17 24h14M24 24v12"
        stroke="#ff7a59"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <path d="M33 12h5v5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
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

export function PortfolioLogo({ name, src, className = "" }: PortfolioLogoProps) {
  const [logoFailed, setLogoFailed] = useState(false);
  const logoSrc = src && !logoFailed ? src : null;

  return (
    <div
      className={`relative flex size-16 shrink-0 items-center justify-center overflow-hidden text-primary ${className}`}
      role="img"
      aria-label={`${name} logo`}
    >
      {logoSrc ? (
        <Image
          src={logoSrc}
          alt=""
          width={64}
          height={64}
          className="size-16 object-contain"
          unoptimized={logoSrc.endsWith(".svg")}
          onError={() => setLogoFailed(true)}
        />
      ) : (
        logoArtwork[name] ?? <span className="font-mono text-sm font-bold tracking-[0.12em]">{getInitials(name)}</span>
      )}
    </div>
  );
}
