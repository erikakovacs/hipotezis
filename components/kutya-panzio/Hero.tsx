import { AudienceTags } from "@/components/kutya-panzio/AudienceTags";
import { CtaButton } from "@/components/kutya-panzio/CtaButton";
import { HeroMockup } from "@/components/kutya-panzio/HeroMockup";

export function Hero() {
  return (
    <section
      id="eleje"
      className="relative grid min-w-0 items-start gap-10 pb-14 pt-2 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(24rem,28rem)] lg:gap-14"
    >
      <div className="min-w-0">
        <div className="-mx-5 overflow-x-auto px-5 py-1 md:mx-0 md:max-w-xl md:px-0 md:py-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <AudienceTags />
        </div>
        <h1 className="mt-3 max-w-xl font-serif tracking-tight text-ink">
          <span className="block text-[1.75rem] leading-[1.2] sm:text-5xl sm:leading-[1.12]">
            Több időd marad a kutyusokra
          </span>
          <span className="mt-2 block max-w-xl font-sans text-sm font-medium leading-relaxed text-terracotta">
            Kevesebb bevétel csúszik ki a kezeid közül
          </span>
        </h1>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft text-pretty">
          Személyre szabott jelentkezési és vendégkezelő rendszer, hogy a
          fontos adatok ne Messenger-üzenetekben, cetliken és külön naptárakban
          kallódjanak. Telefonról is használható, telepítés nélkül.
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
