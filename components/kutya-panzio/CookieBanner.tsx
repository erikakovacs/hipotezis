"use client";

import Link from "next/link";
import { Button } from "@/components/kutya-panzio/Button";
import { useCookieConsent } from "@/components/kutya-panzio/CookieConsentProvider";
import { cookieCategories } from "@/lib/cookie-consent";

export function CookieBanner() {
  const {
    ready,
    hasResponded,
    showDetails,
    acceptAll,
    openDetails,
    closeDetails,
  } = useCookieConsent();
  const handleOpenDetails = () => {
    openDetails();
  };

  if (!ready || hasResponded) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-6">
      <button
        type="button"
        aria-label="Cookie sáv bezárása nélkül"
        className="absolute inset-0 bg-ink/35 backdrop-blur-[2px]"
        tabIndex={-1}
      />
      <div
        role="dialog"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-description"
        className="relative w-full max-w-3xl overflow-hidden rounded-[1.5rem] bg-paper shadow-[0_24px_60px_-20px_rgba(44,36,22,0.45)] ring-2 ring-terracotta/25"
      >
        <div
          aria-hidden="true"
          className="h-1.5 bg-gradient-to-r from-terracotta via-amber to-sage"
        />
        <div className="p-5 sm:p-6">
        {!showDetails ? (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-terracotta">
                Cookie-beállítások
              </p>
              <p
                id="cookie-banner-title"
                className="mt-2 font-serif text-2xl tracking-tight text-ink"
              >
                Sütiket használunk
              </p>
              <p
                id="cookie-banner-description"
                className="mt-2 text-sm leading-relaxed text-ink-soft"
              >
                A weboldal működéséhez szükséges technológiákat használunk.
                A beállításokat bármikor módosíthatod az{" "}
                <Link href="/adatvedelem" className="text-terracotta underline">
                  adatvédelmi oldalon
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              <Button variant="outline" size="md" onClick={handleOpenDetails}>
                Részletek
              </Button>
              <Button size="md" onClick={acceptAll}>
                Elfogadom
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-terracotta">
                  Cookie-beállítások
                </p>
                <p className="mt-2 font-serif text-2xl tracking-tight text-ink">
                  Milyen technológiákat használunk
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Csak szükséges technológiákat használunk, amelyek a
                  weboldal alapvető működéséhez kellenek.
                </p>
              </div>
              <button
                type="button"
                onClick={closeDetails}
                className="rounded-full px-3 py-1 text-sm text-ink-soft hover:bg-cream-deep"
              >
                Bezárás
              </button>
            </div>

            <ul className="mt-5 space-y-3">
              {cookieCategories.map((category) => (
                <li
                  key={category.id}
                  className="rounded-[1.25rem] bg-paper p-4 ring-1 ring-line sm:p-5"
                >
                  <p className="font-medium text-ink">{category.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {category.description}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/adatvedelem"
                className="text-sm font-medium text-terracotta underline"
              >
                Adatvédelmi tájékoztató
              </Link>
              <Button size="md" onClick={acceptAll}>
                Elfogadom
              </Button>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
