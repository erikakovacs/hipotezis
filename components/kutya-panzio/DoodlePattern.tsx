type Doodle = {
  type: "paw" | "bone" | "ball";
  className: string;
};

const defaultDoodles: Doodle[] = [
  { type: "paw", className: "left-[5%] top-[10%] h-11 w-11 -rotate-12" },
  { type: "bone", className: "right-[7%] top-[16%] h-8 w-12 rotate-[18deg]" },
  { type: "ball", className: "right-[10%] top-[48%] h-10 w-10 rotate-[8deg]" },
  { type: "bone", className: "left-[8%] bottom-[14%] h-8 w-11 -rotate-[16deg]" },
  { type: "paw", className: "right-[6%] bottom-[10%] h-10 w-10 rotate-[14deg]" },
  { type: "bone", className: "left-[12%] top-[38%] h-7 w-10 rotate-[24deg]" },
  { type: "paw", className: "right-[14%] top-[72%] h-9 w-9 -rotate-[8deg]" },
  { type: "ball", className: "left-[4%] top-[62%] h-9 w-9 rotate-[-20deg]" },
  { type: "paw", className: "right-[18%] top-[28%] h-8 w-8 rotate-[32deg]" },
  { type: "bone", className: "left-[6%] top-[82%] h-7 w-10 rotate-[-10deg]" },
];

const servicesDoodles: Doodle[] = [
  { type: "bone", className: "left-[6%] top-[12%] h-8 w-11 rotate-[14deg]" },
  { type: "paw", className: "right-[8%] top-[8%] h-10 w-10 rotate-[20deg]" },
  { type: "ball", className: "left-[10%] top-[55%] h-9 w-9 -rotate-[14deg]" },
  { type: "paw", className: "right-[5%] top-[42%] h-11 w-11 -rotate-[6deg]" },
  { type: "bone", className: "right-[12%] bottom-[18%] h-7 w-10 rotate-[-22deg]" },
  { type: "ball", className: "left-[4%] bottom-[10%] h-10 w-10 rotate-[10deg]" },
  { type: "paw", className: "right-[16%] top-[68%] h-8 w-8 rotate-[26deg]" },
  { type: "bone", className: "left-[14%] top-[28%] h-7 w-10 -rotate-[8deg]" },
];

export function DoodlePattern({
  variant = "default",
}: {
  variant?: "default" | "services";
}) {
  const doodles = variant === "services" ? servicesDoodles : defaultDoodles;
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 text-terracotta"
    >
      {doodles.map((doodle, index) => (
        <div
          key={index}
          className={`absolute opacity-[0.12] [&_svg]:h-full [&_svg]:w-full ${doodle.className}`}
        >
          {doodle.type === "paw" ? <Paw /> : doodle.type === "bone" ? <Bone /> : <Ball />}
        </div>
      ))}
    </div>
  );
}

function Paw() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
      <ellipse cx="24" cy="30" rx="9" ry="8" />
      <circle cx="13" cy="18" r="4.5" />
      <circle cx="22" cy="14" r="4.5" />
      <circle cx="31" cy="14" r="4.5" />
      <circle cx="40" cy="18" r="4.5" />
    </svg>
  );
}

function Bone() {
  return (
    <svg viewBox="0 0 64 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M10 12c0-4.5 3.5-8 8-8s8 3.5 8 8-3.5 8-8 8-8-3.5-8-8Z" />
      <path d="M46 12c0-4.5-3.5-8-8-8s-8 3.5-8 8 3.5 8 8 8 8-3.5 8-8Z" />
      <path d="M18 12h28" strokeLinecap="round" />
    </svg>
  );
}

function Ball() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="24" cy="24" r="14" />
      <path d="M10 24c4-6 10-9 14-9s10 3 14 9" />
      <path d="M24 10v28" />
    </svg>
  );
}
