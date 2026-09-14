const problems = [
  "Az egyik gazdi üzenetben ír, a másik telefonon vagy érkezéskor mondja el a tudnivalókat.",
  "A fontos részletek cetlikre, füzetekbe és külön naptárakba kerülnek.",
  "Amikor szükséged van rájuk, nem találod meg őket rögtön.",
  "Minden érkezéskor újra felírod ugyanazokat az adatokat. Például azt, hogy a kutya naponta kétszer 75 gramm eledelt kap.",
];

export function Problems() {
  return (
    <section className="border-t border-line/80">
      <div className="py-16 sm:py-20">
        <h2 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
          Ismerős?
        </h2>
        <p className="mt-3 max-w-xl text-ink-soft">
          A gazdik többféleképpen adják át az információkat, neked pedig
          minden fontos részletet össze kell gyűjtened és észben tartanod.
        </p>
        <ul className="mt-10 space-y-4">
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
