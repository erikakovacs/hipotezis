export type CookieCategory = "necessary";

export type CookieConsent = Record<CookieCategory, boolean>;

export const COOKIE_CONSENT_STORAGE_KEY = "dzsoki-cookie-consent";

export const COOKIE_CONSENT_VERSION = 3;

export type StoredCookieConsent = {
  version: number;
  consent: CookieConsent;
};

export const defaultCookieConsent: CookieConsent = {
  necessary: true,
};

export const acceptAllCookieConsent: CookieConsent = {
  necessary: true,
};

export const cookieCategories: {
  id: CookieCategory;
  title: string;
  description: string;
  required?: boolean;
}[] = [
  {
    id: "necessary",
    title: "Szükséges",
    description:
      "Ezek a technológiák a weboldal alapvető működéséhez kellenek, például a cookie-beállítások megjegyzéséhez.",
    required: true,
  },
];

let cachedRaw: string | null | undefined;
let cachedSnapshot: StoredCookieConsent | null = null;

export function getCookieConsentSnapshot(): StoredCookieConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);

    if (raw === cachedRaw) {
      return cachedSnapshot;
    }

    cachedRaw = raw;

    if (!raw) {
      cachedSnapshot = null;
      return null;
    }

    const parsed = JSON.parse(raw) as StoredCookieConsent;
    if (parsed.version !== COOKIE_CONSENT_VERSION) {
      cachedSnapshot = null;
      return null;
    }

    cachedSnapshot = parsed;
    return cachedSnapshot;
  } catch {
    cachedRaw = null;
    cachedSnapshot = null;
    return null;
  }
}

export function readStoredCookieConsent(): StoredCookieConsent | null {
  return getCookieConsentSnapshot();
}

export function writeStoredCookieConsent(consent: CookieConsent) {
  const payload: StoredCookieConsent = {
    version: COOKIE_CONSENT_VERSION,
    consent,
  };

  const serialized = JSON.stringify(payload);

  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, serialized);
  cachedRaw = serialized;
  cachedSnapshot = payload;
  window.dispatchEvent(new Event("dzsoki-cookie-consent-change"));
}

export function subscribeToCookieConsent(onStoreChange: () => void) {
  window.addEventListener("dzsoki-cookie-consent-change", onStoreChange);
  window.addEventListener("storage", onStoreChange);

  return () => {
    window.removeEventListener("dzsoki-cookie-consent-change", onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}
