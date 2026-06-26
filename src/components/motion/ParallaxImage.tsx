"use client";

import { cn } from "@/lib/utils";
import { ScrollImage, type ScrollImageEffect } from "@/components/motion/ScrollImage";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  overlay?: "dark" | "teal" | "navy";
  priority?: boolean;
  effect?: ScrollImageEffect;
}

const overlays = {
  dark: "from-deep-navy/85 via-deep-navy/55 to-deep-navy/80",
  teal: "from-deep-teal/90 via-xinix-teal/50 to-deep-navy/85",
  navy: "from-deep-navy/92 via-deep-navy/70 to-deep-navy/90",
};

export function ParallaxImage({
  src,
  alt,
  className,
  overlay = "dark",
  priority,
  effect = "parallax-up",
}: ParallaxImageProps) {
  return (
    <div className={cn("relative overflow-hidden bg-deep-navy", className)}>
      <ScrollImage src={src} alt={alt} effect={effect} priority={priority} />
      <div
        className={cn(
          "absolute inset-0 z-[1] bg-gradient-to-br",
          overlays[overlay],
        )}
      />
    </div>
  );
}

interface FullBleedSectionProps {
  src: string;
  alt: string;
  overlay?: "dark" | "teal" | "navy";
  minHeight?: string;
  children: React.ReactNode;
  className?: string;
  effect?: ScrollImageEffect;
}

export function FullBleedSection({
  src,
  alt,
  overlay = "dark",
  minHeight = "min-h-[85vh]",
  children,
  className,
  effect = "parallax-up",
}: FullBleedSectionProps) {
  return (
    <section className={cn("relative flex items-center", minHeight, className)}>
      <ParallaxImage
        src={src}
        alt={alt}
        overlay={overlay}
        effect={effect}
        className="absolute inset-0"
      />
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
