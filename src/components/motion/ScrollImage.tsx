"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useMemo, useRef, type RefObject } from "react";
import { cn } from "@/lib/utils";

export type ScrollImageEffect =
  | "zoom-in"
  | "zoom-in-continuous"
  | "zoom-out"
  | "parallax-up"
  | "parallax-down"
  | "drift-left"
  | "drift-right";

interface ScrollImageProps {
  src: string;
  alt?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  effect?: ScrollImageEffect;
  intensity?: number;
  scrollTargetRef?: RefObject<HTMLElement | null>;
}

export function ScrollImage({
  src,
  alt = "",
  sizes = "100vw",
  priority,
  className,
  imageClassName,
  effect = "zoom-in",
  intensity = 1,
  scrollTargetRef,
}: ScrollImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: scrollTargetRef ?? containerRef,
    offset: ["start end", "end start"],
  });

  const t = intensity;
  const zoomInScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1 + t * 0.12, 1]);
  const zoomInContinuousScale = useTransform(scrollYProgress, [0, 1], [1, 1 + t * 0.28]);
  const zoomOutScale = useTransform(scrollYProgress, [0, 0.5, 1], [1 + t * 0.14, 1, 1 + t * 0.14]);
  const parallaxScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1.1, 1.06]);
  const driftScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1.1, 1.04]);
  const parallaxUpY = useTransform(scrollYProgress, [0, 1], [`${8 * t}%`, `${-8 * t}%`]);
  const parallaxDownY = useTransform(scrollYProgress, [0, 1], [`${-8 * t}%`, `${8 * t}%`]);
  const driftUpY = useTransform(scrollYProgress, [0, 1], [`${3 * t}%`, `${-3 * t}%`]);
  const driftDownY = useTransform(scrollYProgress, [0, 1], [`${-3 * t}%`, `${3 * t}%`]);
  const driftLeftX = useTransform(scrollYProgress, [0, 1], [`${5 * t}%`, `${-5 * t}%`]);
  const driftRightX = useTransform(scrollYProgress, [0, 1], [`${-5 * t}%`, `${5 * t}%`]);
  const stillY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const stillX = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  const motionStyle = useMemo(() => {
    switch (effect) {
      case "zoom-in-continuous":
        return { scale: zoomInContinuousScale, y: stillY, x: stillX };
      case "zoom-out":
        return { scale: zoomOutScale, y: stillY, x: stillX };
      case "parallax-up":
        return { scale: parallaxScale, y: parallaxUpY, x: stillX };
      case "parallax-down":
        return { scale: parallaxScale, y: parallaxDownY, x: stillX };
      case "drift-left":
        return { scale: driftScale, y: driftUpY, x: driftLeftX };
      case "drift-right":
        return { scale: driftScale, y: driftDownY, x: driftRightX };
      case "zoom-in":
      default:
        return { scale: zoomInScale, y: stillY, x: stillX };
    }
  }, [
    effect,
    zoomInScale,
    zoomInContinuousScale,
    zoomOutScale,
    parallaxScale,
    driftScale,
    parallaxUpY,
    parallaxDownY,
    driftUpY,
    driftDownY,
    driftLeftX,
    driftRightX,
    stillY,
    stillX,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 overflow-hidden", className)}
    >
      <motion.div
        className="absolute inset-0 origin-center will-change-transform"
        style={reduce ? undefined : motionStyle}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn("object-cover", imageClassName)}
          sizes={sizes}
        />
      </motion.div>
    </div>
  );
}
