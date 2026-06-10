import type { Metadata } from "next";
import { ArcCard } from "@/components/arc-card";
import { PageHero } from "@/components/page-hero";
import { PortfolioLogo } from "@/components/portfolio-logo";
import { portfolioCompanies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "The ARC Ventures portfolio focus across energy, health and wellness, real estate, and automation.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Companies for assets, resources, and real-world work."
        intro="ARC is preparing a focused portfolio around founders who can use intelligence to improve physical systems. Replace these concept cards with live portfolio companies as investments are announced."
      >
        <ArcCard tone="green">
          <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-70">Portfolio status</p>
          <p className="mt-5 text-3xl font-semibold tracking-[0px]">
            Placeholder companies today. A clear taxonomy for the first fund tomorrow.
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
                <PortfolioLogo name={company.name} />
              </div>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-secondary">
                {company.stage}
              </p>
              <p className="mt-8 max-w-xl text-sm leading-6 text-white/66">{company.description}</p>
            </ArcCard>
          ))}
        </div>
      </section>
    </>
  );
}
