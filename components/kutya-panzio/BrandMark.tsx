import Image from "next/image";

export function BrandMark({ priority = false }: { priority?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-2 sm:gap-2.5">
      <Image
        src="/kutya-panzio/dzsoki-fej.png"
        alt=""
        width={56}
        height={44}
        className="h-10 w-12 shrink-0 object-contain sm:h-12 sm:w-14"
        priority={priority}
      />
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="font-serif text-lg tracking-tight text-ink sm:text-[1.35rem]">
          Dzsoki
        </span>
        <span className="truncate text-[0.65rem] font-medium uppercase tracking-[0.14em] text-ink-soft sm:text-[0.7rem]">
          kutyás szolgáltatóknak
        </span>
      </span>
    </span>
  );
}
