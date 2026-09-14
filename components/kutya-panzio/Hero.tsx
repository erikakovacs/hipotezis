import { HeroMockup } from "@/components/kutya-panzio/HeroMockup";

export function Hero() {
  return (
    <section id="eleje" className="relative overflow-hidden">
      <div className="mx-auto grid w-full min-w-0 max-w-6xl items-start gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:py-24">
        <div className="min-w-0">
          <p className="max-w-xl text-sm font-medium leading-relaxed text-terracotta">
            Kutyapanzióknak, napköziknek, kozmetikáknak és más kutyás
            szolgáltatóknak
          </p>
          <h1 className="mt-3 max-w-xl font-serif text-[1.75rem] leading-[1.2] tracking-tight text-ink sm:text-5xl sm:leading-[1.12]">
            Minden kutya fontos adata egy helyen.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft text-pretty">
            Személyre szabott jelentkezési és vendégkezelő rendszer, hogy ne
            üzenetekből, cetlikből és külön naptárakból kelljen összeraknod a
            napodat.
          </p>
          <p className="mt-4 text-sm font-medium text-ink-soft">
            Telefonról is használható, telepítés nélkül.
          </p>
        </div>
        <HeroMockup />
      </div>
    </section>
  );
}
