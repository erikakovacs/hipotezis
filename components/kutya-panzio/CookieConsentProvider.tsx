"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  acceptAllCookieConsent,
  defaultCookieConsent,
  getCookieConsentSnapshot,
  subscribeToCookieConsent,
  writeStoredCookieConsent,
  type CookieConsent,
} from "@/lib/cookie-consent";

type CookieConsentContextValue = {
  consent: CookieConsent;
  ready: boolean;
  hasResponded: boolean;
  showDetails: boolean;
  acceptAll: () => void;
  savePreferences: (consent: CookieConsent) => void;
  openDetails: () => void;
  closeDetails: () => void;
  reopenBanner: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null,
);

function useStoredConsent() {
  return useSyncExternalStore(
    subscribeToCookieConsent,
    getCookieConsentSnapshot,
    () => null,
  );
}

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const mounted = useMounted();
  const stored = useStoredConsent();
  const [draftConsent, setDraftConsent] = useState<CookieConsent | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [forceBannerOpen, setForceBannerOpen] = useState(false);

  const consent = stored?.consent ?? draftConsent ?? defaultCookieConsent;
  const hasResponded = mounted && Boolean(stored) && !forceBannerOpen;
  const ready = mounted;

  const persist = useCallback((nextConsent: CookieConsent) => {
    writeStoredCookieConsent(nextConsent);
    setDraftConsent(null);
    setForceBannerOpen(false);
    setShowDetails(false);
  }, []);

  const acceptAll = useCallback(() => {
    persist(acceptAllCookieConsent);
  }, [persist]);

  const savePreferences = useCallback(
    (nextConsent: CookieConsent) => {
      persist({ ...nextConsent, necessary: true });
    },
    [persist],
  );

  const value = useMemo(
    () => ({
      consent,
      ready,
      hasResponded,
      showDetails,
      acceptAll,
      savePreferences,
      openDetails: () => setShowDetails(true),
      closeDetails: () => setShowDetails(false),
      reopenBanner: () => {
        setForceBannerOpen(true);
        setShowDetails(true);
      },
    }),
    [
      acceptAll,
      consent,
      hasResponded,
      ready,
      savePreferences,
      showDetails,
    ],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);

  if (!context) {
    throw new Error(
      "useCookieConsent csak CookieConsentProvider-en belül használható",
    );
  }

  return context;
}
