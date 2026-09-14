import { NextResponse } from "next/server";

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

  const payload = {
    name,
    business,
    email,
    phone: phone || null,
    currentProcess,
    receivedAt: new Date().toISOString(),
  };

  console.info("[demo-request]", payload);

  return NextResponse.json({ ok: true });
}
