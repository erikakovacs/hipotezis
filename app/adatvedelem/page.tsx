import type { Metadata } from "next";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/kutya-panzio/CookieSettingsButton";
import { Footer } from "@/components/kutya-panzio/Footer";
import { Header } from "@/components/kutya-panzio/Header";
import { FB_PIXEL_ID } from "@/lib/analytics-ids";

export const metadata: Metadata = {
  title: "Dzsoki | Adatvédelem",
  description:
    "Adatvédelmi tájékoztató a Dzsoki weboldalhoz, cookie-kategóriákkal és harmadik fél szolgáltatásokkal.",
};

const sections = [
  {
    title: "Adatkezelő",
    body: "A weboldal üzemeltetője az adatkezelő. Kapcsolatfelvételhez használd a demo űrlapon megadott elérhetőségeket.",
  },
  {
    title: "Milyen adatokat kezelünk",
    body: "A weboldal használata során technikai naplóadatok, cookie-beállítások, valamint a demo űrlapon megadott név, email, telefon és üzenet kezelhető.",
  },
  {
    title: "Cookie-kategóriák",
    body: "A sütiket két kategóriába soroljuk: szükséges és marketing. A szükséges sütik a weboldal alapvető működéséhez kellenek. A marketing sütik csak hozzájárulás után aktiválódnak.",
  },
  {
    title: "Simple Analytics",
    body: "A weboldal látogatottságát a cookie-kat nem használó Simple Analytics szolgáltatással mérjük. A szolgáltatás nem követi a látogatókat különböző weboldalakon, és nem készít személyes profilt.",
  },
  {
    title: "Facebook Pixel",
    body: `Marketing célú méréshez Facebook Pixel szolgáltatást használunk. Azonosító: ${FB_PIXEL_ID}.`,
  },
  {
    title: "Jogaid",
    body: "Kérheted adataidhoz való hozzáférést, helyesbítést, törlést, valamint tiltakozhatsz az adatkezelés ellen. A cookie-beállításokat bármikor módosíthatod.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-terracotta">
          Adatvédelem
        </p>
        <h1 className="mt-3 font-serif text-3xl tracking-tight text-ink sm:text-4xl">
          Adatvédelmi tájékoztató
        </h1>
        <p className="mt-4 leading-relaxed text-ink-soft">
          Ez az oldal összefoglalja, hogyan kezeljük a személyes adatokat és a
          sütiket a Dzsoki weboldalon.
        </p>

        <div className="mt-10 space-y-6">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-[1.35rem] bg-paper p-6 ring-1 ring-line sm:p-7"
            >
              <h2 className="font-serif text-2xl tracking-tight text-ink">
                {section.title}
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start gap-4">
          <CookieSettingsButton />
          <p className="text-sm text-ink-soft">
            Vissza a{" "}
            <Link href="/" className="text-terracotta underline">
              főoldalra
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
