import Link from "next/link";
import { ArcCard } from "@/components/arc-card";
import { OrbitalBackground } from "@/components/orbital-background";
import { PortfolioLogo } from "@/components/portfolio-logo";
import { SectionShell } from "@/components/section-shell";
import {
  focusSectors,
  investmentModel,
  portfolioCompanies,
  siteConfig,
  stats,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden px-4 py-16 sm:px-8 lg:py-24">
        <OrbitalBackground />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow">Athens / AI / Robotics / Automation</p>
            <h1 className="display-heading mt-5 max-w-5xl text-balance">
              Intelligence for the physical economy.
            </h1>
          </div>
          <div className="gradient-shell">
            <div className="bg-surface p-6 sm:p-8">
              <p className="text-xl leading-8 text-white/76">
                {siteConfig.name} backs founders applying AI, robotics, and automation to assets,
                resources, buildings, energy systems, and human health.
              </p>
              <p className="mt-5 text-sm leading-6 text-white/58">
                We are not looking for another SaaS dashboard or marketplace. We invest where
                technology changes what happens in the real world.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/investment"
                  className="bg-primary px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] !text-[#111111] transition-colors hover:bg-secondary hover:!text-[#111111]"
                >
                  Investment thesis
                </Link>
                <Link
                  href="/contact"
                  className="border border-white/18 px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-primary hover:text-primary"
                >
                  Pitch ARC
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 mx-auto mt-16 grid max-w-7xl grid-cols-2 border border-white/10 bg-black/20 backdrop-blur-sm md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-white/10 p-5 odd:border-r md:border-r md:last:border-r-0">
              <p className="text-4xl font-semibold tracking-[0px] text-primary">{stat.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/52">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <SectionShell
        eyebrow="Investment focus"
        title="We back systems, not surfaces."
        intro="ARC invests in companies where AI and automation improve assets, resources, operations, or measurable human outcomes."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {focusSectors.map((sector, index) => (
            <ArcCard key={sector.title} tone={index === 1 ? "orange" : "outline"}>
              <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-70">{sector.kicker}</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[0px]">{sector.title}</h3>
              <p className="mt-5 text-sm leading-6 opacity-72">{sector.description}</p>
              <div className="mt-8 grid gap-2">
                {sector.signals.map((signal) => (
                  <span key={signal} className="border-t border-current/18 pt-2 text-xs uppercase tracking-[0.14em] opacity-72">
                    {signal}
                  </span>
                ))}
              </div>
            </ArcCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="How we invest"
        title="Capital plus operating conviction."
        intro="We are built for technical founders who need sharp thesis alignment, co-investor access, industrial context, and early commercial discipline."
      >
        <div className="grid gap-4">
          {investmentModel.map((item) => (
            <ArcCard key={item.title} tone="dark">
              <div className="grid gap-6 md:grid-cols-[0.6fr_0.8fr_1.4fr] md:items-center">
                <p className="text-3xl font-semibold tracking-[0px] text-primary">{item.title}</p>
                <p className="font-mono text-sm uppercase tracking-[0.12em] text-secondary">{item.amount}</p>
                <p className="text-sm leading-6 text-white/66">{item.description}</p>
              </div>
            </ArcCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Portfolio preview"
        title="A portfolio shaped around real-world constraints."
        intro="These concept cards show the type of companies the first ARC portfolio is designed to attract."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {portfolioCompanies.slice(0, 4).map((company) => (
            <ArcCard key={company.name} tone="outline">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">{company.sector}</p>
                  <h3 className="mt-5 text-4xl font-semibold tracking-[0px]">{company.name}</h3>
                </div>
                <PortfolioLogo name={company.name} />
              </div>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-secondary">
                {company.stage}
              </p>
              <p className="mt-6 text-sm leading-6 text-white/64">{company.description}</p>
            </ArcCard>
          ))}
        </div>
      </SectionShell>

      <section className="px-4 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl bg-primary p-8 text-[#111111] sm:p-12 lg:p-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-70">For founders</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="section-heading max-w-4xl">Building with atoms, care, energy, or buildings?</h2>
            <div>
              <p className="text-base leading-7 opacity-78">
                Send us the problem, the system you are changing, and the first proof that customers
                need it now.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex bg-[#111111] px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] !text-white transition-colors hover:bg-secondary hover:!text-[#111111]"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
