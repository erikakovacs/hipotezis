export function About() {
  return (
    <section id="rolunk" className="scroll-mt-24 border-t border-line/80">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-terracotta">
          Rólunk
        </p>
        <h2 className="mt-3 max-w-2xl font-serif text-3xl tracking-tight text-ink sm:text-4xl">
          Dzsoki, a név, amit naponta tízezerszer kimondunk
        </h2>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(16rem,22rem)_minmax(0,1fr)] lg:gap-14">
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="flex aspect-[4/5] items-center justify-center rounded-[1.6rem] bg-cream-deep ring-1 ring-line">
              <p className="px-6 text-center text-sm leading-relaxed text-ink-soft">
                Dzsoki fotója
                <span className="mt-1 block text-xs">Hamarosan</span>
              </p>
            </div>
          </div>

          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              Dzsoki egy öt éves tacskó, rövid lábakkal, hatalmas fülekkel és
              vagány személyiséggel. Hivatalosan velünk lakik. Valójában mi
              lakunk nála.
            </p>
            <p>
              A nevét naponta tízezerszer kimondjuk. „Dzsoki, gyere!” „Dzsoki,
              az nem a tiéd!” „Dzsoki, mit eszel?” Ő pedig minden alkalommal
              ránk néz azokkal a nagy, ártatlan szemeivel, mintha életében
              először hallaná ezt a nevet.
            </p>
            <p>
              Tudjuk, melyik takaró a kedvence, mitől lesz boldog, és melyik
              nézése jelenti azt, hogy szerinte már legalább három napja nem
              kapott enni. Ha csendben van, valószínűleg alszik. Vagy valami
              olyat csinál, amiről jobb lenne nem tudnunk.
            </p>
            <p>
              Dzsoki mellett gyorsan kiderült, hogy a fontos tudnivalók nem
              férnek rá egy cetlire. Az étkezés, a szokások és a különleges
              kérések mind számítanak, főleg amikor más vigyáz rá.
            </p>
            <p className="font-medium text-ink">
              Ezért neveztük el róla a rendszert. A Dzsoki minden fontos
              információt egy helyen tart, hogy semmi ne maradjon egy
              Messenger-üzenetben vagy egy elkallódott cetlin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
