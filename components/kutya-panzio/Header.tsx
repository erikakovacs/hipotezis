"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/kutya-panzio/BrandMark";

const links = [
  { href: "/#hogyan-mukodik", label: "Hogyan működik" },
  { href: "/#mit-allitok-be", label: "Funkciók" },
  { href: "/#ajanlat", label: "Ajánlat" },
  { href: "/#gyik", label: "GYIK" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    function onResize() {
      if (window.matchMedia("(min-width: 768px)").matches) setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-line/70 bg-cream/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-x-6 px-4 py-2 sm:px-8 sm:py-3">
          <Link href="/#eleje" className="min-w-0 shrink-0" aria-label="Dzsoki, a lap tetejére">
            <BrandMark priority />
          </Link>
          <nav
            aria-label="Oldal"
            className="hidden items-center justify-end gap-5 text-nowrap md:flex"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ink ring-1 ring-line transition-colors hover:bg-cream-deep md:hidden"
            aria-expanded={open}
            aria-controls="mobil-menu"
            aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
            onClick={() => setOpen((current) => !current)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
        {open ? (
          <nav
            id="mobil-menu"
            aria-label="Oldal"
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line/70 bg-cream/95 md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-line/60 py-3 text-base font-medium text-ink last:border-b-0"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        ) : null}
      </header>
      <div className="h-14 sm:h-[4.5rem]" aria-hidden="true" />
    </>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M5 7h14" />
          <path d="M5 12h14" />
          <path d="M5 17h14" />
        </>
      )}
    </svg>
  );
}
