import { DoodlePattern } from "@/components/kutya-panzio/DoodlePattern";

const services = [
  {
    title: "Online jelentkezési adatlap",
    items: [
      "gazdi adatai",
      "kutya adatai",
      "oltások és gyógyszerek",
      "étkezés és viselkedés",
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
      "visszatérő vendégek megszólítása",
    ],
  },
];

export function Services() {
  return (
    <section
      id="mit-allitok-be"
      className="relative scroll-mt-24 overflow-hidden border-t border-line/80 bg-cream-deep/40"
    >
      <DoodlePattern variant="services" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
          Minden, ami megkönnyíti a munkádat
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:items-stretch">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col rounded-[1.25rem] bg-paper p-4 shadow-[0_12px_32px_-24px_rgba(44,36,22,0.24)] ring-1 ring-line sm:p-5"
            >
              <h3 className="font-serif text-lg leading-snug tracking-tight text-ink sm:text-xl">
                {service.title}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-snug text-ink-soft"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta/80"
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
