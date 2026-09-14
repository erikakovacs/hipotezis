"use client";

import { Button } from "@/components/kutya-panzio/Button";
import { useDemoModal } from "@/components/kutya-panzio/DemoProvider";

export const CTA_LABEL = "Megnézem, mit tud a Dzsoki";

type CtaButtonProps = {
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "md" | "header";
};

export function CtaButton({
  className,
  variant = "primary",
  size = "md",
}: CtaButtonProps) {
  const { openDemo } = useDemoModal();

  return (
    <Button className={className} variant={variant} size={size} onClick={openDemo}>
      {CTA_LABEL}
    </Button>
  );
}
