export const audienceTags = [
  "Kutyapanzióknak",
  "Napköziknek",
  "Kutyakozmetikusoknak",
  "Menhelyeknek",
];

export function AudienceTags({ className }: { className?: string }) {
  return (
    <ul className={`flex flex-nowrap gap-1.5 md:gap-2 ${className ?? ""}`}>
      {audienceTags.map((tag) => (
        <li key={tag} className="shrink-0">
          <span className="inline-flex whitespace-nowrap rounded-full bg-cream-deep px-2.5 py-1 text-xs font-medium text-ink ring-1 ring-line md:px-3 md:py-1.5 md:text-sm">
            {tag}
          </span>
        </li>
      ))}
    </ul>
  );
}
