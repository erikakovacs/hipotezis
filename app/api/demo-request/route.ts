import { NextResponse } from "next/server";

const RECIPIENT_EMAIL = "ms.kovacs.erika@gmail.com";
const FORMSUBMIT_API_URL = `https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`;

type DemoRequestBody = {
  name?: unknown;
  business?: unknown;
  email?: unknown;
  phone?: unknown;
  currentProcess?: unknown;
};

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isTooLong(value: string, maxLength: number) {
  return value.length > maxLength;
}

export async function POST(request: Request) {
  let body: DemoRequestBody;

  try {
    body = (await request.json()) as DemoRequestBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Érvénytelen kérés." },
      { status: 400 },
    );
  }

  const name = asTrimmedString(body.name);
  const business = asTrimmedString(body.business);
  const email = asTrimmedString(body.email);
  const phone = asTrimmedString(body.phone);
  const currentProcess = asTrimmedString(body.currentProcess);

  if (name.length < 2) {
    return NextResponse.json(
      { ok: false, error: "Kérlek, add meg a neved." },
      { status: 400 },
    );
  }

  if (business.length < 2) {
    return NextResponse.json(
      { ok: false, error: "Kérlek, add meg az üzleted nevét." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Kérlek, adj meg egy érvényes email címet." },
      { status: 400 },
    );
  }

  if (currentProcess.length < 8) {
    return NextResponse.json(
      { ok: false, error: "Írj néhány szót a jelenlegi folyamatotokról." },
      { status: 400 },
    );
  }

  if (
    isTooLong(name, 100) ||
    isTooLong(business, 150) ||
    isTooLong(email, 254) ||
    isTooLong(phone, 50) ||
    isTooLong(currentProcess, 3000)
  ) {
    return NextResponse.json(
      { ok: false, error: "Az egyik mező túl hosszú." },
      { status: 400 },
    );
  }

  const payload = {
    name,
    business,
    email,
    phone: phone || null,
    currentProcess,
    receivedAt: new Date().toISOString(),
  };

  try {
    const response = await fetch(FORMSUBMIT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `Új Dzsoki bemutatókérés: ${business.replace(/[\r\n]/g, " ")}`,
        _template: "table",
        Név: name,
        Vállalkozás: business,
        email,
        Telefon: phone || "Nincs megadva",
        "Jelenlegi jelentkezési folyamat": currentProcess,
        Beküldve: payload.receivedAt,
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("[demo-request] Sikertelen FormSubmit küldés.", {
        status: response.status,
        details,
      });
      return NextResponse.json(
        {
          ok: false,
          error: "Nem sikerült elküldeni. Próbáld meg később.",
        },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("[demo-request] Emailküldési hiba.", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Nem sikerült elküldeni. Próbáld meg később.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
