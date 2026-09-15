export const DEMO_FORM_ACTION = "https://formsubmit.co/ms.kovacs.erika@gmail.com";
export const DEMO_FORM_SUCCESS_URL = "https://dzsoki.hu/?demo=siker";

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

export function buildDemoFormSubject(business: string) {
  return `Új Dzsoki bemutatókérés: ${business.replace(/[\r\n]/g, " ")}`;
}
