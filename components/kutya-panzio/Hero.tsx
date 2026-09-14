import { CtaButton } from "@/components/kutya-panzio/CtaButton";
import { HeroMockup } from "@/components/kutya-panzio/HeroMockup";

export function Hero() {
  return (
    <section
      id="eleje"
      className="relative grid min-w-0 items-start gap-10 overflow-hidden py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(24rem,28rem)] lg:gap-14 lg:overflow-visible"
    >
      <div className="min-w-0">
        <p className="max-w-xl text-sm font-medium leading-relaxed text-terracotta">
          Kutyapanzióknak, napköziknek, kutyakozmetikusoknak és menhelyeknek
        </p>
        <h1 className="mt-3 max-w-xl font-serif text-[1.75rem] leading-[1.2] tracking-tight text-ink sm:text-5xl sm:leading-[1.12]">
          Több időd marad a kutyákra
        </h1>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft text-pretty">
          Személyre szabott jelentkezési és vendégkezelő rendszer, hogy a
          fontos adatok ne Messenger-üzenetekben, cetliken és külön naptárakban
          kallódjanak.
        </p>
        <p className="mt-4 text-sm font-medium text-ink-soft">
          Telefonról is használható, telepítés nélkül.
        </p>
        <div id="hero-cta" className="mt-8 flex justify-center lg:justify-start">
          <CtaButton />
        </div>
      </div>
      <div className="relative min-w-0 lg:h-[22rem]">
        <HeroMockup />
      </div>
    </section>
  );
}
