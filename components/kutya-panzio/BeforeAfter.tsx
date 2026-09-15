import Image from "next/image";

const before = [
  "Messenger",
  "Email",
  "Cetlik",
  "Külön naptár a kozmetikának",
  "A gazdi telefonált, de nem tudtad feljegyezni, mert épp kutyás volt a kezed",
];

const after = [
  "Egy jelentkezési folyamat",
  "Egy rendezett adatbázis",
  "Egy szolgáltatásra is, többre is",
  "Automatikus visszaigazolások",
  "Minden fontos adat egy helyen",
];

export function BeforeAfter() {
  return (
    <section className="border-t border-line/80">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-4 lg:grid-cols-2 lg:items-stretch lg:gap-5">
          <article className="flex h-full flex-col rounded-[1.5rem] bg-paper p-6 ring-1 ring-line sm:p-7">
            <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-[1rem] bg-cream-deep ring-1 ring-line/80">
              <Image
                src="/kutya-panzio/elotte-firka.png"
                alt="Kaotikus firka-kutya — szétszórt cetlik és papírok"
                fill
                className="object-contain p-3"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <span className="inline-flex rounded-full bg-cream-deep px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-ink-soft ring-1 ring-line">
              Előtte
            </span>
            <h2 className="mt-4 font-serif text-2xl tracking-tight text-ink sm:text-3xl">
              Szétszórt infók
            </h2>
            <ul className="mt-5 space-y-2.5">
              {before.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-base leading-snug text-ink sm:text-[1.05rem]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta/70"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="flex h-full flex-col rounded-[1.5rem] bg-[#dce8df] p-6 ring-1 ring-sage/25 sm:p-7">
            <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-[1rem] bg-[#dce8df] ring-1 ring-sage/20">
              <Image
                src="/kutya-panzio/utana-firka.png"
                alt="Rendezett firka-kutya professzor szemüveggel"
                fill
                className="object-contain p-3"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <span className="inline-flex rounded-full bg-sage px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-cream shadow-[0_1px_0_rgba(44,36,22,0.08)]">
              Utána
            </span>
            <h2 className="mt-4 font-serif text-2xl tracking-tight text-ink sm:text-3xl">
              Egy nyugodt rendszer
            </h2>
            <ul className="mt-5 space-y-2.5">
              {after.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-base leading-snug text-ink sm:text-[1.05rem]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
