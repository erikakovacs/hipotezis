"use client";

import { CtaButton } from "@/components/kutya-panzio/CtaButton";
import { useDemoModal } from "@/components/kutya-panzio/DemoProvider";

export function StickyCta() {
  const { open } = useDemoModal();

  if (open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-cream/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md">
      <div className="mx-auto max-w-lg">
        <CtaButton className="w-full" />
      </div>
    </div>
  );
}
