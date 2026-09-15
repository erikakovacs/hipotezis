import Image from "next/image";

const steps = [
  "A gazdi vagy te, mint szolgáltató, kitöltöd az online jelentkezési lapot, és kiválasztod, mire van szükség.",
  "Minden fontos információ bekerül egy helyre. Akkor is, ha csak egyfélét csinálsz és akkor is, ha többet ezek közül.",
  "Te értesítést kapsz az új jelentkezésről.",
  "A gazdi automatikusan megkapja a visszaigazolást és a szükséges tudnivalókat.",
  "Érkezés előtt automatikus emlékeztetőt kap.",
];

export function Process() {
  return (
    <section
      id="hogyan-mukodik"
      className="scroll-mt-24 border-t border-line/80"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
          Így nézhet ki helyette
        </h2>
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(14rem,18rem)] lg:gap-14">
          <ol className="space-y-4">
            {steps.map((step, index) => (
              <li
                key={step}
                className="flex gap-4 rounded-[1.35rem] bg-paper p-5 ring-1 ring-line sm:items-center sm:p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-mist font-serif text-lg text-sage-dark">
                  {index + 1}
                </span>
                <p className="pt-1.5 text-lg leading-snug text-ink sm:pt-0">
                  {step}
                </p>
              </li>
            ))}
          </ol>
          <div className="relative mx-auto w-full max-w-sm lg:sticky lg:top-28 lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-cream-deep ring-1 ring-line sm:aspect-[3/4]">
              <Image
                src="/kutya-panzio/kert.png"
                alt="Két kutya pihen a kertben"
                fill
                sizes="(min-width: 1024px) 288px, (min-width: 640px) 384px, calc(100vw - 40px)"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <aside className="mt-8 rounded-[1.5rem] bg-paper p-6 ring-1 ring-line sm:p-8">
          <p className="font-serif text-2xl leading-snug tracking-tight text-ink sm:text-[1.7rem]">
            Telefonról is használhatod munka közben és útközben is. Külön
            programot nem kell telepíteni. A rendszert személyre szabottan
            állítom össze.
          </p>
        </aside>
      </div>
    </section>
  );
}
