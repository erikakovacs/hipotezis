import Link from "next/link";
import { BrandMark } from "@/components/kutya-panzio/BrandMark";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line/80 bg-cream pb-28">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <BrandMark />
        <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
          Személyre szabott jelentkezési és vendégkezelő rendszer
          kutyapanzióknak, napköziknek, kiképzőknek, kozmetikáknak és
          menhelyeknek. Akár egy, akár több szolgáltatás, egy helyen.
        </p>
        <nav aria-label="Lábléc" className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
          <Link
            href="/adatvedelem"
            className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            Adatvédelem
          </Link>
        </nav>
        <p className="mt-6 text-sm text-ink-soft">© 2026 Dzsoki.hu</p>
      </div>
    </footer>
  );
}
