import Link from "next/link";
import { navItems, siteConfig } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#171717]/82 px-4 backdrop-blur-md sm:px-8">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
          <span className="grid size-8 place-items-center border border-primary/60 bg-primary text-sm font-black tracking-[-0.08em] text-[#111111] transition-colors group-hover:bg-secondary">
            ARC
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.22em]">{siteConfig.name}</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/64 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="border border-primary/50 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:border-secondary hover:text-secondary"
        >
          Pitch
        </Link>
      </div>
      <nav className="mx-auto flex max-w-7xl gap-1 overflow-x-auto border-t border-white/10 py-2 md:hidden" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/64 transition-colors hover:text-primary"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
