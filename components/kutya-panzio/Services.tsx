const services = [
  {
    title: "Online jelentkezési adatlap",
    items: [
      "gazdi adatai",
      "kutya adatai",
      "oltások",
      "étkezés",
      "gyógyszerek",
      "viselkedés",
      "egyedi kérdések",
    ],
  },
  {
    title: "Központi vendéglista",
    items: [
      "minden kutya egy helyen",
      "akár egy, akár több szolgáltatás",
      "egy kutya, annyi foglalás, amennyi kell",
      "kereshető adatok",
      "időpontok egy naptárban",
    ],
  },
  {
    title: "Automatikus üzenetek",
    items: [
      "jelentkezés visszaigazolása",
      "foglalás megerősítése",
      "érkezés előtti tudnivalók",
      "emlékeztetők",
    ],
  },
  {
    title: "Utókövetés",
    items: ["Google értékeléskérés", "visszatérő vendégek megszólítása"],
  },
];

export function Services() {
  return (
    <section id="mit-allitok-be" className="scroll-mt-24 border-t border-line/80">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
          Mit állítok be neked?
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[1.4rem] bg-paper p-6 shadow-[0_16px_40px_-28px_rgba(44,36,22,0.28)] ring-1 ring-line sm:p-7"
            >
              <h3 className="font-serif text-2xl tracking-tight text-ink">
                {service.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-ink-soft">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta/80"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
