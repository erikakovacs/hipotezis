"use client";

import { Button } from "@/components/kutya-panzio/Button";
import { useDemoModal } from "@/components/kutya-panzio/DemoProvider";

export const CTA_LABEL = "Szeretném nálam is";

type CtaButtonProps = {
  className?: string;
  variant?: "primary" | "secondary" | "outline";
};

export function CtaButton({ className, variant = "primary" }: CtaButtonProps) {
  const { openDemo } = useDemoModal();

  return (
    <Button className={className} variant={variant} onClick={openDemo}>
      {CTA_LABEL}
    </Button>
  );
}
