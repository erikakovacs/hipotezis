import Image from "next/image";

export function ClosingCta() {
  return (
    <section className="border-t border-line/80">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-ink text-cream">
          <div className="absolute inset-y-0 right-0 hidden w-[42%] lg:block">
            <Image
              src="/kutya-panzio/kert.png"
              alt="Kutyák pihennek egy kertben, délutáni fényben"
              fill
              sizes="42vw"
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-transparent" />
          </div>
          <div className="relative max-w-xl px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
            <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
              Maradj ott, ahol a kutyák vannak.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-cream/80">
              Ne a telefonod mellett, ne a cetlik között. Ha minden fontos
              infó egy helyen van, a kezed kutyás maradhat. Sétára,
              simogatásra, arra, amiért ezt csinálod.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
