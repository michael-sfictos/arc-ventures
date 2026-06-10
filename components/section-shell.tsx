import type { ReactNode } from "react";

type SectionShellProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  withTopBorder?: boolean;
};

export function SectionShell({
  eyebrow,
  title,
  intro,
  children,
  className = "",
  withTopBorder = false,
}: SectionShellProps) {
  const borderClassName = withTopBorder ? "border-t border-white/10" : "";

  return (
    <section className={`${borderClassName} px-4 py-16 sm:px-8 lg:py-24 ${className}`}>
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.6fr]">
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          {title ? <h2 className="section-heading mt-4 text-balance">{title}</h2> : null}
          {intro ? <p className="mt-6 max-w-md text-sm leading-6 text-white/68">{intro}</p> : null}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
