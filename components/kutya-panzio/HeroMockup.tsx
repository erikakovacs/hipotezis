"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type HealthTone = "valid" | "expiring" | "expired" | "yes" | "handed";

const healthItems: {
  label: string;
  tone: HealthTone;
  expires?: string;
}[] = [
  { label: "DHPPi", tone: "valid", expires: "2027. márc. 12." },
  { label: "Veszettség", tone: "expiring", expires: "2026. jún. 2." },
  { label: "Kennelköhögés", tone: "expired", expires: "2026. febr. 10." },
  { label: "Féregtelenítés", tone: "valid", expires: "2026. júl. 10." },
  { label: "Ivartalanítva", tone: "yes" },
  { label: "Oltási könyv", tone: "handed" },
];

const packedItems: { label: string; note?: string }[] = [
  { label: "Ágy" },
  { label: "Labda" },
  { label: "Póráz nyakörvvel" },
  { label: "Oltási könyv", note: "Személyesen leadva" },
];

export function HeroMockup() {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function closeProfile(event: PointerEvent) {
      const details = detailsRef.current;

      if (
        details?.open &&
        event.target instanceof Node &&
        !details.contains(event.target)
      ) {
        details.open = false;
      }
    }

    document.addEventListener("pointerdown", closeProfile);
    return () => document.removeEventListener("pointerdown", closeProfile);
  }, []);

  return (
    <div className="relative mx-auto w-full min-w-0 max-w-md lg:h-[22rem]">
      <details
        ref={detailsRef}
        className="group overflow-hidden rounded-[1.6rem] bg-paper shadow-[0_16px_40px_-24px_rgba(44,36,22,0.28)] ring-1 ring-line open:shadow-2xl lg:h-[22rem] lg:open:absolute lg:open:inset-x-0 lg:open:top-0 lg:open:z-30 lg:open:h-auto"
      >
        <summary className="cursor-pointer list-none">
          <div className="flex items-center gap-4 p-5 pb-3 sm:px-6 sm:pt-6">
            <div className="relative h-[4.75rem] w-[4.75rem] shrink-0 overflow-hidden rounded-2xl">
              <Image
                src="/kutya-panzio/bodri.png"
                alt="Dzsoki, egy tacskó"
                fill
                sizes="76px"
                className="object-cover"
                priority
              />
            </div>
            <div className="min-w-0 flex-1 pt-0.5">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-ink-soft">
                Vendégprofil
              </p>
              <p className="font-serif text-[1.85rem] leading-none tracking-tight text-ink">
                Dzsoki
              </p>
              <p className="mt-1 text-sm text-ink-soft">Tacskó · 4 éves</p>
              <p className="mt-2 text-xs font-medium text-terracotta group-open:hidden">
                Kattints a teljes profil megtekintéséhez
              </p>
              <p className="mt-2 hidden text-xs font-medium text-terracotta group-open:block">
                Kattints újra a profil összecsukásához
              </p>
            </div>
            <svg
              viewBox="0 0 24 24"
              className="ml-auto h-5 w-5 shrink-0 -rotate-90 text-ink-soft transition-transform group-open:rotate-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>

          <div className="flex flex-wrap gap-2 px-5 pb-3 sm:px-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-sage-mist px-3 py-1.5 text-sm font-medium text-sage-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              Foglalás visszaigazolva
            </span>
            <span className="rounded-full bg-cream-deep px-3 py-1.5 text-sm font-medium text-ink">
              Panzió
            </span>
            <span className="rounded-full bg-cream-deep px-3 py-1.5 text-sm font-medium text-ink">
              Kozmetika
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t border-line px-5 py-3.5 sm:px-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-soft">
                Érkezés
              </p>
              <p className="mt-1 text-[0.95rem] text-ink">május 12., 9:00</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-soft">
                Távozás
              </p>
              <p className="mt-1 text-[0.95rem] text-ink">május 18., 17:00</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 border-t border-line px-5 py-3.5 sm:px-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-soft">
                Oltások
              </p>
              <span className="mt-1.5 inline-flex items-center gap-2 rounded-full bg-amber-mist px-3 py-1.5 text-sm font-medium text-amber-dark">
                <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                1 hamarosan lejár
              </span>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-soft">
                Fizetés
              </p>
              <div className="mt-1.5">
                <PaymentStatus status="owing" />
              </div>
            </div>
          </div>
        </summary>

        <dl className="divide-y divide-line border-t border-line">
          <div className="grid grid-cols-2 gap-4 px-5 py-3.5 sm:px-6">
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.12em] text-ink-soft">
                Gazdi
              </dt>
              <dd className="mt-1 text-[0.95rem] text-ink">Minta Mihály</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-[0.12em] text-ink-soft">
                Telefon
              </dt>
              <dd className="mt-1 text-[0.95rem] text-ink tabular-nums">
                +36 1 234 5678
              </dd>
            </div>
          </div>
          <div className="px-5 py-3.5 sm:px-6">
            <div className="flex items-center justify-between gap-3">
              <dt className="text-xs font-medium uppercase tracking-[0.12em] text-ink-soft">
                Fizetés
              </dt>
              <dd>
                <PaymentStatus status="owing" />
              </dd>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li className="flex justify-between gap-3 text-ink-soft">
                <span>Panzió, 6 éjszaka</span>
                <span className="tabular-nums">42&nbsp;000 Ft</span>
              </li>
              <li className="flex justify-between gap-3 text-ink-soft">
                <span>
                  Kozmetika
                  <span className="mt-0.5 block text-xs">
                    Fürdetés és körömvágás
                  </span>
                </span>
                <span className="tabular-nums">8&nbsp;000 Ft</span>
              </li>
              <li className="flex justify-between gap-3 text-ink-soft">
                <span>
                  Panziós táp
                  <span className="mt-0.5 block text-xs">
                    Saját tápot eszik
                  </span>
                </span>
                <span className="tabular-nums">0&nbsp;Ft</span>
              </li>
              <li className="flex justify-between gap-3 text-ink-soft">
                <span>Gyógyszeradás</span>
                <span className="tabular-nums">3&nbsp;000 Ft</span>
              </li>
            </ul>
            <p className="mt-3 flex items-baseline justify-between gap-3 border-t border-line pt-3">
              <span className="text-xs font-medium uppercase tracking-[0.12em] text-ink-soft">
                Fizetendő
              </span>
              <span className="font-serif text-xl tracking-tight text-rose-dark tabular-nums">
                53&nbsp;000 Ft
              </span>
            </p>
          </div>
          <div className="px-5 py-3.5 sm:px-6">
            <dt className="text-xs font-medium uppercase tracking-[0.12em] text-ink-soft">
              Oltások és egészség
            </dt>
            <dd className="mt-3 space-y-3">
              {healthItems.map((item) => (
                <HealthItem key={item.label} {...item} />
              ))}
            </dd>
          </div>
          <div className="px-5 py-3.5 sm:px-6">
            <dt className="text-xs font-medium uppercase tracking-[0.12em] text-ink-soft">
              Étkezés
            </dt>
            <dd className="mt-1.5">
              <p className="text-[0.95rem] text-ink">Saját táp, napi kétszer</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-ink-soft">
                Adagolás
              </p>
              <p className="mt-1 text-[0.95rem] leading-relaxed text-ink">
                Reggel 1 mérőkanál szárazon, este 1 mérőkanál kevés langyos
                vízzel. A táp a kék zacskóban van.
              </p>
            </dd>
          </div>
          <div className="px-5 py-3.5 sm:px-6">
            <dt className="text-xs font-medium uppercase tracking-[0.12em] text-ink-soft">
              Hozott holmik
            </dt>
            <dd className="mt-2">
              <ul className="space-y-1.5">
                {packedItems.map((item) => (
                  <li key={item.label} className="flex gap-3 text-[0.95rem] text-ink">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage"
                    />
                    <span>
                      {item.label}
                      {item.note ? (
                        <span className="mt-0.5 block text-xs text-ink-soft">
                          {item.note}
                        </span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <Row
            label="Viselkedés"
            value="Barátságos, tacskókkal jól kijön"
          />
        </dl>
      </details>
    </div>
  );
}

const healthTone = {
  valid: {
    label: "Érvényes",
    pill: "bg-sage-mist text-sage-dark",
    dot: "bg-sage",
  },
  expiring: {
    label: "Hamarosan lejár",
    pill: "bg-amber-mist text-amber-dark",
    dot: "bg-amber",
  },
  expired: {
    label: "Lejárt",
    pill: "bg-rose-mist text-rose-dark",
    dot: "bg-rose",
  },
  yes: {
    label: "Igen",
    pill: "bg-sage-mist text-sage-dark",
    dot: "bg-sage",
  },
  handed: {
    label: "Személyesen leadva",
    pill: "bg-sage-mist text-sage-dark",
    dot: "bg-sage",
  },
} as const;

function HealthItem({
  label,
  tone,
  expires,
}: {
  label: string;
  tone: HealthTone;
  expires?: string;
}) {
  const status = healthTone[tone];

  return (
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0">
        <p className="text-[0.95rem] text-ink">{label}</p>
        {expires ? (
          <p className="mt-0.5 text-xs text-ink-soft">
            {tone === "expired" ? "Lejárt:" : "Lejár:"} {expires}
          </p>
        ) : null}
      </div>
      <span
        className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium ${status.pill}`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
        {status.label}
      </span>
    </div>
  );
}

function PaymentStatus({ status }: { status: "paid" | "owing" }) {
  const paid = status === "paid";

  return (
    <span
      className={
        paid
          ? "inline-flex items-center gap-2 rounded-full bg-sage-mist px-3 py-1.5 text-sm font-medium text-sage-dark"
          : "inline-flex items-center gap-2 rounded-full bg-rose-mist px-3 py-1.5 text-sm font-medium text-rose-dark"
      }
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${paid ? "bg-sage" : "bg-rose"}`}
      />
      {paid ? "Fizetve" : "Tartozás"}
    </span>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-5 py-3.5 sm:px-6">
      <dt className="text-xs font-medium uppercase tracking-[0.12em] text-ink-soft">
        {label}
      </dt>
      <dd className="mt-1 text-[0.95rem] leading-relaxed text-ink">{value}</dd>
    </div>
  );
}
