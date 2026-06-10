import Link from "next/link";
import { navItems, siteConfig } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="px-4 py-12 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div>
          <p className="text-3xl font-semibold tracking-[0px] text-primary">{siteConfig.name}</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/64">{siteConfig.description}</p>
        </div>
        <div>
          <p className="eyebrow">Navigate</p>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/64 transition-colors hover:text-primary">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <div className="mt-4 grid gap-2 text-sm text-white/64">
            <a className="transition-colors hover:text-primary" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            <a className="transition-colors hover:text-primary" href={`mailto:${siteConfig.pitchEmail}`}>
              {siteConfig.pitchEmail}
            </a>
            <span>{siteConfig.location}</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.16em] text-white/64 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 {siteConfig.legalName}</span>
        <span>Assets. Resources. Cognition.</span>
      </div>
    </footer>
  );
}
