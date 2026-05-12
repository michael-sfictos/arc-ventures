import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <section className="px-4 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-heading mt-5 max-w-6xl text-balance">{title}</h1>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <p className="max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">{intro}</p>
          {children ? <div>{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
