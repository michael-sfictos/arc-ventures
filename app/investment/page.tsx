import type { Metadata } from "next";
import { ArcCard } from "@/components/arc-card";
import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { avoidList, founderSignals, investmentCriteria, investmentModel } from "@/lib/content";

export const metadata: Metadata = {
  title: "Investment Thesis",
  description:
    "ARC Ventures investment thesis for AI, robotics, and automation companies serving the physical economy.",
};

export default function InvestmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Investment thesis"
        title="AI that moves resources, not slides."
        intro="We invest in founders building intelligence for assets, machines, buildings, energy, care, and constrained resources. The opportunity is not more software on top of work. It is new operating capacity inside the work."
      >
        <ArcCard tone="orange">
          <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-70">Thesis filter</p>
          <p className="mt-5 text-3xl font-semibold tracking-[0px]">
            If the product cannot improve a real-world process, resource, or asset, it is probably not ARC.
          </p>
        </ArcCard>
      </PageHero>

      <SectionShell
        eyebrow="What we back"
        title="Four checks before conviction."
        intro="We look for clear evidence that software intelligence becomes physical advantage."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {investmentCriteria.map((item) => (
            <ArcCard key={item.title} tone="outline">
              <h3 className="text-3xl font-semibold tracking-[0px] text-primary">{item.title}</h3>
              <p className="mt-5 text-sm leading-6 text-white/66">{item.description}</p>
            </ArcCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="What we avoid"
        title="Clear no-go zones."
        intro="A narrow mandate helps founders know quickly whether we are the right partner."
      >
        <ArcCard tone="dark">
          <div className="grid gap-3">
            {avoidList.map((item) => (
              <div key={item} className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                <p className="text-lg leading-7 text-white/76">{item}</p>
              </div>
            ))}
          </div>
        </ArcCard>
      </SectionShell>

      <SectionShell
        eyebrow="Stage and capital"
        title="Early enough to shape the company."
        intro="ARC is designed for the messy stage where technical promise meets pilots, procurement, hardware cycles, and operational proof."
      >
        <div className="grid gap-4">
          {investmentModel.map((item) => (
            <ArcCard key={item.title} tone={item.title === "Seed" ? "green" : "outline"}>
              <div className="grid gap-4 md:grid-cols-[0.7fr_0.8fr_1.3fr] md:items-center">
                <p className="text-3xl font-semibold tracking-[0px]">{item.title}</p>
                <p className="font-mono text-sm uppercase tracking-[0.14em]">{item.amount}</p>
                <p className="text-sm leading-6 opacity-75">{item.description}</p>
              </div>
            </ArcCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Founder signal"
        title="When to reach out."
        intro="The best fit is a technical team with direct access to an urgent operational problem."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {founderSignals.map((signal) => (
            <ArcCard key={signal} tone="dark">
              <p className="text-lg leading-7 text-white/78">{signal}</p>
            </ArcCard>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
