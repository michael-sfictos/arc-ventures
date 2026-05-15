import type { Metadata } from "next";
import Image from "next/image";
import { ArcCard } from "@/components/arc-card";
import { PageHero } from "@/components/page-hero";
import { SectionShell } from "@/components/section-shell";
import { partnersAndAssociates, teamMembers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Team",
  description: "The ARC Ventures team and advisor structure.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="A lean fund for technical founders."
        intro="ARC is designed around focused investing, operator context, and a specialist advisor network across energy, health, real estate, and automation."
      >
        <ArcCard tone="orange">
          <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-70">Editable section</p>
          <p className="mt-5 text-3xl font-semibold tracking-[0px]">
            Replace these placeholders with partner bios, photos, and advisor credentials when ready.
          </p>
        </ArcCard>
      </PageHero>

      <SectionShell
        eyebrow="Partners & associates"
        title="Investment team structure."
        intro="Partners lead sourcing and commitments; associates support diligence, portfolio operations, and founder workflows."
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {partnersAndAssociates.map((person, index) => (
            <ArcCard key={`partner-associate-${index}`} tone="outline">
              <div className="flex h-full flex-col gap-4">
                <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-white/[0.05] ring-1 ring-inset ring-white/10">
                  {person.photoSrc ? (
                    <Image
                      src={person.photoSrc}
                      alt={`Portrait of ${person.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <div
                      aria-hidden
                      className="grid-frame flex h-full items-center justify-center"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/38">
                        Photo placeholder
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold tracking-[0px] text-primary">{person.name}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-secondary">
                    {person.tier}
                  </span>
                </div>
                <p className="text-sm leading-6 text-white/66">{person.bio}</p>
              </div>
            </ArcCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="People"
        title="Built around domain depth."
        intro="The fund's edge should come from a tight understanding of physical-world markets and the ability to help founders navigate them."
      >
        <div className="grid gap-4">
          {teamMembers.map((member) => (
            <ArcCard key={`${member.name}-${member.role}`} tone="outline">
              <div className="grid gap-6 md:grid-cols-[0.9fr_0.8fr_1.4fr] md:items-center">
                <h2 className="text-4xl font-semibold tracking-[0px] text-primary">{member.name}</h2>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-secondary">
                  {member.role}
                </p>
                <p className="text-sm leading-6 text-white/66">{member.bio}</p>
              </div>
            </ArcCard>
          ))}
        </div>
      </SectionShell>

      <section className="border-t border-white/10 px-4 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl bg-[#5B635A] p-8 sm:p-12">
          <p className="eyebrow">Advisor network</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
            <h2 className="section-heading text-balance">Industrial, clinical, property, and energy operators.</h2>
            <p className="text-base leading-7 text-white/72">
              ARC should surround founders with people who have bought, deployed, regulated, financed,
              and scaled physical systems. This section can become a named advisor roster as the fund
              develops.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
