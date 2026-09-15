const RECIPIENT_EMAIL = "ms.kovacs.erika@gmail.com";
const FORMSUBMIT_API_URL = `https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`;

export type DemoRequestForm = {
  name: string;
  business: string;
  email: string;
  phone: string;
  currentProcess: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isTooLong(value: string, maxLength: number) {
  return value.length > maxLength;
}

export function validateDemoRequest(form: DemoRequestForm): string | null {
  const name = form.name.trim();
  const business = form.business.trim();
  const email = form.email.trim();
  const phone = form.phone.trim();
  const currentProcess = form.currentProcess.trim();

  if (name.length < 2) {
    return "Kérlek, add meg a neved.";
  }

  if (business.length < 2) {
    return "Kérlek, add meg az üzleted nevét.";
  }

  if (!isValidEmail(email)) {
    return "Kérlek, adj meg egy érvényes email címet.";
  }

  if (phone.replace(/\D/g, "").length < 8) {
    return "Kérlek, add meg a telefonszámod.";
  }

  if (currentProcess.length < 8) {
    return "Írj néhány szót a jelenlegi folyamatotokról.";
  }

  if (
    isTooLong(name, 100) ||
    isTooLong(business, 150) ||
    isTooLong(email, 254) ||
    isTooLong(phone, 50) ||
    isTooLong(currentProcess, 3000)
  ) {
    return "Az egyik mező túl hosszú.";
  }

  return null;
}

export async function submitDemoRequest(
  form: DemoRequestForm,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const validationError = validateDemoRequest(form);
  if (validationError) {
    return { ok: false, error: validationError };
  }

  const name = form.name.trim();
  const business = form.business.trim();
  const email = form.email.trim();
  const phone = form.phone.trim();
  const currentProcess = form.currentProcess.trim();

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
        Telefon: phone,
        "Jelenlegi jelentkezési folyamat": currentProcess,
        Beküldve: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      return {
        ok: false,
        error: "Nem sikerült elküldeni. Próbáld meg később.",
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Hálózati hiba. Próbáld meg újra néhány perc múlva.",
    };
  }
}
