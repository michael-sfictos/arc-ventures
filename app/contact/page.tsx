import type { Metadata } from "next";
import { ArcCard } from "@/components/arc-card";
import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { founderSignals, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact ARC Ventures or submit a pitch.",
};

export default function ContactPage() {
  const pitchSubject = encodeURIComponent("ARC Ventures pitch");
  const generalSubject = encodeURIComponent("ARC Ventures introduction");

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Send the real-world problem."
        intro="We want to understand the asset, resource, or operation you are changing, and why your team has the right technical edge to change it."
      >
        <ArcCard tone="green">
          <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-70">Pitch ARC</p>
          <a
            href={`mailto:${siteConfig.pitchEmail}?subject=${pitchSubject}`}
            className="mt-5 block text-3xl font-semibold tracking-[0px] underline decoration-current/30 underline-offset-8 transition-colors hover:text-secondary"
          >
            {siteConfig.pitchEmail}
          </a>
        </ArcCard>
      </PageHero>

      <SectionShell
        eyebrow="What to include"
        title="Make the system visible."
        intro="A short email is fine. These details help us understand fit quickly."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {founderSignals.map((signal) => (
            <ArcCard key={signal} tone="outline">
              <p className="text-lg leading-7 text-white/76">{signal}</p>
            </ArcCard>
          ))}
        </div>
      </SectionShell>

      <section className="border-t border-white/10 px-4 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-2">
          <ArcCard tone="orange">
            <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-70">General contact</p>
            <a
              href={`mailto:${siteConfig.email}?subject=${generalSubject}`}
              className="mt-5 block text-3xl font-semibold tracking-[0px] underline decoration-current/30 underline-offset-8"
            >
              {siteConfig.email}
            </a>
            <p className="mt-8 text-sm leading-6 opacity-75">{siteConfig.location}</p>
          </ArcCard>
          <ArcCard tone="dark">
            <p className="eyebrow">Investor relations</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[0px]">
              Interested in Greek deep tech and physical-world automation?
            </h2>
            <p className="mt-6 text-sm leading-6 text-white/66">
              Use the general email for LP, co-investor, corporate, or advisor introductions. The
              first version uses email links only; a secure pitch form can be added later.
            </p>
          </ArcCard>
        </div>
      </section>
    </>
  );
}
