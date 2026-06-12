import type { Metadata } from "next";
import { ArcCard } from "@/components/arc-card";
import { PageHero } from "@/components/page-hero";
import { PortfolioLogo } from "@/components/portfolio-logo";
import { portfolioCompanies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "The ARC Ventures portfolio across tokenized assets, real estate intelligence, autonomous retail, preventive health, and short-term rental infrastructure.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Companies for assets, resources, and real-world work."
        intro="ARC is building a focused portfolio around founders who use intelligence and automation to improve physical systems."
      >
        <ArcCard tone="green">
          <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-70">Launch pipeline</p>
          <p className="mt-5 text-3xl font-semibold tracking-[0px]">
            Five portfolio companies are preparing for Q3 and Q4 2026 launches.
          </p>
        </ArcCard>
      </PageHero>

      <section className="border-t border-white/10 px-4 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
          {portfolioCompanies.map((company) => (
            <ArcCard key={company.name} tone="outline">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="eyebrow">{company.sector}</p>
                  <h2 className="mt-8 text-6xl font-semibold tracking-[0px] text-balance">
                    {company.name}
                  </h2>
                </div>
                <PortfolioLogo name={company.name} src={company.logoSrc} />
              </div>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-secondary">
                {company.stage}
              </p>
              <p className="mt-8 max-w-xl text-sm leading-6 text-white/66">{company.description}</p>
              {company.websiteUrl ? (
                <a
                  href={company.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 flex w-full items-center justify-between bg-secondary px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] !text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:shadow-[0_14px_36px_rgb(255_122_89/0.18)]"
                >
                  <span>Visit website</span>
                  <span
                    aria-hidden="true"
                    className="text-base leading-none transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </a>
              ) : null}
            </ArcCard>
          ))}
        </div>
      </section>
    </>
  );
}
