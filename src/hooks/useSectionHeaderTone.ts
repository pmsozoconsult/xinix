"use client";

import { useEffect, useState } from "react";

export type HeaderTone = "dark" | "light";

/**
 * Reads the section under the header. `dark` is photo/navy; `light` is
 * paper/white. The header chrome uses the opposite.
 */
export function useSectionHeaderTone(pathname: string): HeaderTone {
  const [tone, setTone] = useState<HeaderTone>("dark");

  useEffect(() => {
    let frame = 0;

    const read = () => {
      const header = document.querySelector("[data-site-header]");
      if (header instanceof HTMLElement) {
        header.style.pointerEvents = "none";
      }

      const sampleY = Math.min(56, Math.floor(window.innerHeight * 0.08));
      const sampleX = Math.min(Math.floor(window.innerWidth / 2), window.innerWidth - 12);
      const hit = document.elementFromPoint(sampleX, sampleY);
      const section = hit?.closest("[data-header-tone]");
      const next = section?.getAttribute("data-header-tone") === "dark" ? "dark" : "light";

      if (header instanceof HTMLElement) {
        header.style.pointerEvents = "";
      }

      setTone(next);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        read();
      });
    };

    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return tone;
}
