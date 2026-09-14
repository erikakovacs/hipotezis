import { BrandMark } from "@/components/kutya-panzio/BrandMark";
import { CtaButton } from "@/components/kutya-panzio/CtaButton";

const links = [
  { href: "#hogyan-mukodik", label: "Hogyan működik" },
  { href: "#mit-allitok-be", label: "Mit állítok be" },
  { href: "#ajanlat", label: "Ajánlat" },
  { href: "#gyik", label: "GYIK" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-5 py-3.5 sm:px-8">
        <a href="#eleje" className="min-w-0" aria-label="Dzsoki, a lap tetejére">
          <BrandMark priority />
        </a>
        <nav
          aria-label="Oldal"
          className="order-3 flex w-full items-center gap-4 overflow-x-auto text-nowrap lg:order-none lg:w-auto lg:flex-1 lg:justify-center lg:overflow-visible"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <CtaButton className="shrink-0 px-4 py-2.5 text-sm" />
      </div>
    </header>
  );
}
