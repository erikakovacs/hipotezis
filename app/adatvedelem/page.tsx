import type { Metadata } from "next";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/kutya-panzio/CookieSettingsButton";
import { Footer } from "@/components/kutya-panzio/Footer";
import { Header } from "@/components/kutya-panzio/Header";
import { privacyConfig } from "@/lib/privacy";

export const metadata: Metadata = {
  title: "Dzsoki | Adatvédelem",
  description:
    "Adatvédelmi tájékoztató a Dzsoki weboldalhoz: adatkezelő, cookie-k, analitika, demo űrlap és érintetti jogok.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[1.35rem] bg-paper p-6 ring-1 ring-line sm:p-7">
      <h2 className="font-serif text-2xl tracking-tight text-ink">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-ink-soft [&_a]:text-terracotta [&_a]:underline [&_h3]:mt-4 [&_h3]:font-medium [&_h3]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_ol]:space-y-2 [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  const { dataControllerName, dataControllerEmail, websiteName, websiteUrl, lastUpdated } =
    privacyConfig;

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
          Jelen tájékoztató ismerteti, hogyan kezeljük a személyes adatokat a{" "}
          {websiteName} marketing weboldalon ({websiteUrl}). Utolsó frissítés:{" "}
          {lastUpdated}
        </p>

        <div className="mt-10 space-y-6">
          <Section title="1. Adatkezelő">
            <p>
              <strong className="text-ink">Név:</strong> {dataControllerName}
            </p>
            <p>
              <strong className="text-ink">Email:</strong>{" "}
              <a href={`mailto:${dataControllerEmail}`}>{dataControllerEmail}</a>
            </p>
            <p>
              Adatvédelemmel kapcsolatos kérdéseiddel, kéréseiddel a fenti email
              címen veheted fel velünk a kapcsolatot.
            </p>
          </Section>

          <Section title="2. A tájékoztató tárgya">
            <p>
              Ez a weboldal a {websiteName} jelentkezési és vendégkezelő rendszer
              bemutatására szolgál. A tájékoztató kizárólag a weboldal
              használatával kapcsolatos adatkezelésre vonatkozik, nem a későbbi
              szoftvertermék ügyfél-adatkezelésére.
            </p>
          </Section>

          <Section title="3. Kezelt adatok köre">
            <h3>3.1. Demo / bemutatókérés űrlap</h3>
            <ul>
              <li>név</li>
              <li>vállalkozás neve</li>
              <li>email cím</li>
              <li>telefonszám (opcionális)</li>
              <li>
                szabad szöveges leírás a jelenlegi jelentkezési folyamatról
              </li>
              <li>beküldés időpontja</li>
            </ul>

            <h3>3.2. Cookie-hozzájárulás</h3>
            <p>
              A böngésző helyi tárolójában (localStorage) mentjük a
              cookie-beállításaidat és a hozzájárulás verziószámát.
            </p>

            <h3>3.3. Látogatottsági mérés</h3>
            <p>
              A Simple Analytics anonimizált látogatottsági adatokat rögzít (pl.
              meglátogatott oldal, hivatkozó forrás, ország, eszköztípus). A
              szolgáltatás cookie-kat nem használ, és nem követ nyomon
              egyedi látogatókat weboldalak között.
            </p>

            <h3>3.4. Technikai naplóadatok</h3>
            <p>
              A weboldal tárhelyszolgáltatója (GitHub Pages) a szolgáltatás
              biztosítása során technikai naplóadatokat kezelhet (pl. IP-cím,
              böngésző típusa, kérés időpontja).
            </p>
          </Section>

          <Section title="4. Adatkezelés célja és jogalapja">
            <ul>
              <li>
                <strong className="text-ink">Demo űrlap:</strong> kapcsolatfelvétel,
                bemutatókérés kezelése. Jogalap: a GDPR 6. cikk (1) b) pontja
                (szerződéskötést megelőző lépések) és/vagy az (1) a) pontja
                (hozzájárulás).
              </li>
              <li>
                <strong className="text-ink">Cookie-hozzájárulás:</strong> a
                választásaid megjegyzése. Jogalap: jogos érdek (6. cikk (1) f)
                pont).
              </li>
              <li>
                <strong className="text-ink">Simple Analytics:</strong> weboldal
                látogatottságának mérése, a szolgáltatás fejlesztése. Jogalap:
                jogos érdek (6. cikk (1) f) pont).
              </li>
              <li>
                <strong className="text-ink">Technikai naplók:</strong> a
                weboldal biztonságos üzemeltetése. Jogalap: jogos érdek (6. cikk
                (1) f) pont).
              </li>
            </ul>
          </Section>

          <Section title="5. Adatmegőrzés">
            <ul>
              <li>
                <strong className="text-ink">Demo űrlap adatai:</strong> a
                kapcsolattartás lezárásáig, legfeljebb 2 évig.
              </li>
              <li>
                <strong className="text-ink">Cookie-hozzájárulás:</strong> amíg
                nem módosítod vagy törlöd a böngésző helyi tárolóját.
              </li>
              <li>
                <strong className="text-ink">Analitikai adatok:</strong> a
                Simple Analytics saját megőrzési szabályzata szerint.
              </li>
              <li>
                <strong className="text-ink">Technikai naplók:</strong> a
                tárhelyszolgáltató által meghatározott időtartamig, jellemzően
                legfeljebb 90 napig.
              </li>
            </ul>
          </Section>

          <Section title="6. Adatfeldolgozók és harmadik felek">
            <p>
              Az adatkezelés során az alábbi szolgáltatókat vehetjük igénybe
              adatfeldolgozóként vagy önálló adatkezelőként:
            </p>
            <ul>
              <li>
                <strong className="text-ink">FormSubmit.co</strong> — a demo
                űrlap adatait emailben továbbítja az adatkezelőnek.{" "}
                <a
                  href="https://formsubmit.co/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adatvédelmi tájékoztató
                </a>
              </li>
              <li>
                <strong className="text-ink">Simple Analytics BV</strong> —
                cookie-mentes látogatottsági mérés.{" "}
                <a
                  href="https://simpleanalytics.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adatvédelmi tájékoztató
                </a>
              </li>
              <li>
                <strong className="text-ink">GitHub, Inc.</strong> — weboldal
                tárhelye (GitHub Pages).{" "}
                <a
                  href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adatvédelmi tájékoztató
                </a>
              </li>
            </ul>
          </Section>

          <Section title="7. Adattovábbítás harmadik országba">
            <p>
              Egyes szolgáltatók (FormSubmit, GitHub) adataidat az
              Európai Gazdasági Térségen kívül, elsősorban az Egyesült
              Államokban is kezelhetik. Az adattovábbítás megfelelőségi
              mechanizmusokon (pl. EU–US Data Privacy Framework, standard
              szerződéses klauzulák) alapul.
            </p>
          </Section>

          <Section title="8. Cookie-k és hasonló technológiák">
            <p>
              A weboldalon csak szükséges technológiákat használunk (pl. a
              hozzájárulás megjegyzése localStorage-ban). Marketing sütiket
              nem alkalmazunk.
            </p>
            <p>
              A Simple Analytics nem helyez el sütit a böngésződben.
            </p>
            <p>
              A cookie-beállításaidat bármikor módosíthatod az alábbi gombbal
              vagy a böngésződ helyi tárolójának törlésével.
            </p>
          </Section>

          <Section title="9. Adatszolgáltatás kötelezettsége">
            <p>
              A demo űrlap kitöltése önkéntes. A név, email cím, vállalkozás
              neve és a folyamat leírása nélkül nem tudjuk feldolgozni a
              bemutatókérésedet. A telefonszám megadása opcionális.
            </p>
          </Section>

          <Section title="10. Automatizált döntéshozatal">
            <p>
              Nem alkalmazunk automatizált döntéshozatalt, amely rád nézve
              joghatással járna vagy hasonlóképpen jelentős mértékben
              érintene.
            </p>
          </Section>

          <Section title="11. Adatbiztonság">
            <p>
              Megfelelő technikai és szervezési intézkedéseket alkalmazunk az
              adatok védelme érdekében, beleértve a biztonságos adatátvitelt
              (HTTPS) és a hozzáférés korlátozását. Teljes biztonság azonban
              az interneten keresztül történő adatátvitel során nem
              garantálható.
            </p>
          </Section>

          <Section title="12. Érintetti jogok">
            <p>A GDPR alapján az alábbi jogok illetnek meg:</p>
            <ul>
              <li>hozzáférés a személyes adataidhoz</li>
              <li>helyesbítés kérése</li>
              <li>törlés kérése („elfeledtetéshez való jog”)</li>
              <li>adatkezelés korlátozása</li>
              <li>tiltalom az adatkezelés ellen</li>
              <li>adathordozhatóság</li>
              <li>
                hozzájárulás visszavonása (ha hozzájárulás az jogalap), a
                visszavonás nem érinti a visszavonás előtti adatkezelés
                jogszerűségét
              </li>
            </ul>
            <p>
              Jogaid gyakorlásához írj a{" "}
              <a href={`mailto:${dataControllerEmail}`}>{dataControllerEmail}</a>{" "}
              címre. Kérésedre indokolatlan késedelem nélkül, de legkésőbb 30
              napon belül válaszolunk.
            </p>
          </Section>

          <Section title="13. Jogorvoslat">
            <p>
              Panasszal a Nemzeti Adatvédelmi és Információszabadság Hatósághoz
              (NAIH) fordulhatsz:
            </p>
            <ul>
              <li>Cím: 1055 Budapest, Falk Miksa utca 9–11.</li>
              <li>Postacím: 1363 Budapest, Pf. 9.</li>
              <li>
                Web:{" "}
                <a href="https://naih.hu" target="_blank" rel="noopener noreferrer">
                  naih.hu
                </a>
              </li>
              <li>Email: ugyfelszolgalat@naih.hu</li>
            </ul>
          </Section>

          <Section title="14. A tájékoztató módosítása">
            <p>
              Fenntartjuk a jogot a tájékoztató frissítésére. A módosításokról
              ezen az oldalon tájékoztatunk. Kérjük, rendszeresen ellenőrizd a
              frissített változatot.
            </p>
          </Section>
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
