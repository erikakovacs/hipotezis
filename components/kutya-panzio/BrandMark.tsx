import Image from "next/image";

export function BrandMark({ priority = false }: { priority?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <Image
        src="/kutya-panzio/dzsoki-fej.png"
        alt=""
        width={56}
        height={44}
        className="h-12 w-14 shrink-0 object-contain"
        priority={priority}
      />
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="font-serif text-xl tracking-tight text-ink sm:text-[1.35rem]">
          Dzsoki
        </span>
        <span className="truncate text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ink-soft">
          kutyás szolgáltatóknak
        </span>
      </span>
    </span>
  );
}
