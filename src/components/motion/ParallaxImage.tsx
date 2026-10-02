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
  dark: "from-deep-navy/80 via-xinix-blue/35 to-xinix-blue/20",
  teal: "from-xinix-blue-deep/90 via-xinix-blue/50 to-sky-band/30",
  navy: "from-deep-navy/85 via-xinix-blue/40 to-xinix-blue/20",
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
    <section
      data-header-tone="dark"
      className={cn("relative flex items-center", minHeight, className)}
    >
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
