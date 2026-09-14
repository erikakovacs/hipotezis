"use client";

import { useEffect, useState } from "react";
import { CtaButton } from "@/components/kutya-panzio/CtaButton";
import { useDemoModal } from "@/components/kutya-panzio/DemoProvider";
import { cn } from "@/lib/cn";

export function StickyCta() {
  const { open } = useDemoModal();
  const [heroCtaVisible, setHeroCtaVisible] = useState(true);

  useEffect(() => {
    const target = document.getElementById("hero-cta");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroCtaVisible(entry.isIntersecting),
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const visible = !heroCtaVisible && !open;

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-line bg-cream/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-300 ease-out",
        visible ? "translate-y-0" : "pointer-events-none translate-y-full",
      )}
    >
      <div className="mx-auto max-w-lg">
        <CtaButton className="w-full" />
      </div>
    </div>
  );
}
