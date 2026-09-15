export const siteConfig = {
  name: "Dzsoki",
  tagline: "Minden kutya fontos adata egy helyen",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dzsoki.hu",
  description:
    "Személyre szabott jelentkezési és vendégkezelő rendszer kutyapanzióknak, napköziknek, kutyakozmetikusoknak, kiképzőknek és menhelyeknek. Telefonról is használható, telepítés nélkül.",
  ogDescription:
    "Személyre szabott jelentkezési és vendégkezelő rendszer, hogy a fontos adatok ne Messenger-üzenetekben, cetliken és külön naptárakban kallódjanak.",
  locale: "hu_HU",
  language: "hu",
  contactEmail: "krisztian@letscode.hu",
  ogImage: "/kutya-panzio/kert.png",
  ogImageAlt: "Két kutya nyugodtan a kertben — Dzsoki vendégkezelő rendszer",
  logo: "/kutya-panzio/dzsoki-fej.png",
  keywords: [
    "Dzsoki",
    "kutyapanzió szoftver",
    "kutyanapközi rendszer",
    "kutyakozmetika vendégkezelés",
    "kutyás vendégkezelő",
    "jelentkezési lap kutya",
    "kutya adatbázis",
    "vendégkezelő rendszer",
    "kutyapanzió adminisztráció",
    "menhely adatbázis",
    "kutyapanzió jelentkezés",
    "kutya panzió szoftver Magyarország",
  ],
  themeColor: "#b85c38",
  backgroundColor: "#f7f1e8",
} as const;

export function absoluteUrl(path = "") {
  return new URL(path, siteConfig.url).toString();
}
