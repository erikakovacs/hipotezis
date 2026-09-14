const faqs = [
  {
    question: "Le kell cserélnem a mostani rendszeremet?",
    answer:
      "Nem feltétlenül. A cél, hogy a jelenlegi működésed egyszerűbb legyen, nem az, hogy mindent lecseréljünk.",
  },
  {
    question: "Technikai tudás kell hozzá?",
    answer:
      "Nem. A rendszert úgy állítom össze, hogy a napi használata egyszerű legyen.",
  },
  {
    question: "Laptop kell hozzá?",
    answer:
      "Nem. Telefonról is használhatod: a kertben, a fogadóban, útközben is. Külön programot nem kell telepíteni.",
  },
  {
    question: "Kisebb helynek is megéri?",
    answer:
      "Igen, különösen akkor, ha sok idő megy el ugyanazoknak a kérdéseknek a megválaszolásával és az információk keresésével.",
  },
  {
    question: "Menhelyeknek is fizetős?",
    answer:
      "Nem. Menhelyeknek külön minimális menhelyverzió van: kutya neve, adatai, gazdik, szövegdobozok. Nem személyre szabott, egyszer elkészül.",
  },
  {
    question: "Több szolgáltatásom van. Ez is belefér?",
    answer:
      "Igen. Nem kell mindent csinálnod. Ha csak panziód vagy kozmetikád van, arra szabjuk. Ha több szolgáltatásod is van, azok ugyanabban a rendszerben férnek el, egy kutya adataival, ezért kerül többe.",
  },
  {
    question: "Teljes foglalási rendszer?",
    answer:
      "Nem feltétlenül. Elsősorban a jelentkezési és adminisztrációs folyamat egyszerűsítésére szolgál.",
  },
  {
    question: "Mennyi idő alatt készül el?",
    answer: "A legtöbb egyszerű rendszer néhány munkanap alatt összeállítható.",
  },
];

export function Faq() {
  return (
    <section id="gyik" className="scroll-mt-24 border-t border-line/80">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
          Gyakori kérdések
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[1.25rem] bg-paper p-5 ring-1 ring-line open:shadow-[0_16px_40px_-28px_rgba(44,36,22,0.22)] sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-lg font-medium leading-snug text-ink">
                <span>{faq.question}</span>
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-xl leading-none text-terracotta transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-prose leading-relaxed text-ink-soft">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
