import { faqs } from "@/lib/faq-data";

export function Faq() {
  return (
    <section id="gyik" className="scroll-mt-24 border-t border-line/80">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
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
