"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";

const tabs = [
  {
    id: "szolgaltatok",
    label: "Szolgáltatók",
    title: "A vállalkozásodra szabott rendszer",
    price: (
      <>
        99&nbsp;000 Ft-tól
      </>
    ),
    note: "A pontos ár attól függ, hány szolgáltatást hozol egy helyre. Több ág együtt drágább, mint egyetlen panzió vagy kozmetika.",
    includes: [
      "személyre szabott jelentkezési adatlap",
      "akár egy, akár több szolgáltatás egy rendszerben",
      "ha többet is csinálsz, ugyanazon a kutya-profilon",
      "kutya- és gazdiadatbázis",
      "automatikus visszaigazolás",
      "alap emlékeztetők",
      "telefonról is használható, telepítés nélkül",
      "rendszer beállítása",
      "rövid használati útmutató",
    ],
  },
  {
    id: "menhelyek",
    label: "Menhelyek",
    title: "Egy kész, minimális verzió",
    price: null,
    note: "Nem személyre szabott. Egyszer elkészül, és ettől minimális marad.",
    includes: [
      "kutya neve",
      "kutya adatai",
      "gazdik",
      "szövegdobozok a fontos infóknak",
      "minden kutya egy helyen",
      "telefonról is használható, telepítés nélkül",
    ],
  },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function Offer() {
  const baseId = useId();
  const [active, setActive] = useState<TabId>("szolgaltatok");
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <section id="ajanlat" className="scroll-mt-24 border-t border-line/80 bg-cream-deep/40">
      <div className="py-16 text-center sm:py-20">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-terracotta">
          Ajánlat
        </p>
        <div
          role="tablist"
          aria-label="Ajánlat típusa"
          className="mx-auto mt-5 inline-flex rounded-full bg-paper p-1 ring-1 ring-line"
          onKeyDown={(event) => {
            if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
            event.preventDefault();
            setActive((current) =>
              current === "szolgaltatok" ? "menhelyek" : "szolgaltatok",
            );
          }}
        >
          {tabs.map((tab) => {
            const selected = tab.id === active;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`${baseId}-${tab.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors sm:px-5",
                  selected
                    ? "bg-ink text-cream"
                    : "text-ink-soft hover:text-ink",
                )}
                onClick={() => setActive(tab.id)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <div
          role="tabpanel"
          id={`${baseId}-panel`}
          aria-labelledby={`${baseId}-${current.id}`}
        >
          <h2 className="mt-6 font-serif text-3xl tracking-tight text-ink sm:text-4xl">
            {current.title}
          </h2>
          {current.price ? (
            <p className="mt-5 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
              {current.price}
            </p>
          ) : null}
          <ul className="mx-auto mt-8 max-w-md space-y-2.5 text-left">
            {current.includes.map((item) => (
              <li key={item} className="flex gap-3 text-ink">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink-soft">{current.note}</p>
        </div>
      </div>
    </section>
  );
}
