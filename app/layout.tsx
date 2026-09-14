import type { Metadata } from "next";
import { Figtree, Merriweather } from "next/font/google";
import { AnalyticsScripts } from "@/components/kutya-panzio/AnalyticsScripts";
import { CookieBanner } from "@/components/kutya-panzio/CookieBanner";
import { CookieConsentProvider } from "@/components/kutya-panzio/CookieConsentProvider";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: "400",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Dzsoki | Minden kutya fontos adata egy helyen",
  description:
    "Személyre szabott jelentkezési és vendégkezelő rendszer kutyapanzióknak, napköziknek, kutyakozmetikusoknak és menhelyeknek. Telefonról is használható, telepítés nélkül.",
  openGraph: {
    title: "Dzsoki | Minden kutya fontos adata egy helyen",
    description:
      "Személyre szabott jelentkezési és vendégkezelő rendszer, hogy a fontos adatok ne Messenger-üzenetekben, cetliken és külön naptárakban kallódjanak.",
    locale: "hu_HU",
    type: "website",
    images: ["/kutya-panzio/kert.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="hu"
      className={`${figtree.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-clip bg-cream font-sans text-ink">
        <CookieConsentProvider>
          {children}
          <CookieBanner />
          <AnalyticsScripts />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
