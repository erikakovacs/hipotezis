"use client";

import { Button } from "@/components/kutya-panzio/Button";
import { useCookieConsent } from "@/components/kutya-panzio/CookieConsentProvider";

export function CookieSettingsButton() {
  const { reopenBanner } = useCookieConsent();

  return (
    <Button variant="outline" size="md" onClick={reopenBanner}>
      Cookie-beállítások módosítása
    </Button>
  );
}
