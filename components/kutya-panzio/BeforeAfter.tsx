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
      <div className="mx-auto grid max-w-6xl gap-4 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2">
        <article className="rounded-[1.5rem] bg-cream-deep/80 p-7 ring-1 ring-line sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink-soft">
            Előtte
          </p>
          <h2 className="mt-2 font-serif text-3xl tracking-tight text-ink">
            Szétszórt infók
          </h2>
          <ul className="mt-6 space-y-3">
            {before.map((item) => (
              <li key={item} className="text-lg leading-snug text-ink">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-[1.5rem] bg-sage-mist p-7 ring-1 ring-sage/15 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-sage-dark">
            Utána
          </p>
          <h2 className="mt-2 font-serif text-3xl tracking-tight text-ink">
            Egy nyugodt rendszer
          </h2>
          <ul className="mt-6 space-y-3">
            {after.map((item) => (
              <li key={item} className="text-lg leading-snug text-ink">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
