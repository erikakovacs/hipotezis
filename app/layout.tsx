import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Dzsoki — Minden kutya fontos adata egy helyen",
  description:
    "Személyre szabott jelentkezési és vendégkezelő rendszer kutyapanzióknak, napköziknek, kozmetikáknak és más kutyás szolgáltatóknak. Telefonról is használható, telepítés nélkül.",
  openGraph: {
    title: "Dzsoki — Minden kutya fontos adata egy helyen",
    description:
      "Személyre szabott jelentkezési és vendégkezelő rendszer, hogy ne üzenetekből, cetlikből és külön naptárakból kelljen összeraknod a napodat.",
    locale: "hu_HU",
    type: "website",
    images: ["/kutya-panzio/kert.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="hu"
      className={`${figtree.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-cream font-sans text-ink">{children}</body>
    </html>
  );
}
