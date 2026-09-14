const problems = [
  "A gazdi üzenetben, fotóban, cetlin küldi az infókat, te pedig keresed.",
  "Az időpontok, a jegyzetek és a kutya adatai külön helyeken vannak.",
  "Nem találod gyorsan, melyik kutyánál mire kell figyelned.",
  "Ugyanazokat az infókat újra és újra le kell írnod.",
];

export function Problems() {
  return (
    <section className="border-t border-line/80">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
          Ismerős?
        </h2>
        <p className="mt-3 max-w-xl text-ink-soft">
          A gazdiktól érkező infók gyakran külön beszélgetésekben,
          naptárakban és jegyzetekben maradnak szétszórva. Már egyetlen
          szolgáltatásnál is.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {problems.map((problem, index) => (
            <li
              key={problem}
              className="rounded-[1.35rem] bg-paper p-6 shadow-[0_16px_40px_-28px_rgba(44,36,22,0.28)] ring-1 ring-line"
            >
              <span className="font-serif text-sm text-terracotta">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-lg leading-snug text-ink">{problem}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
