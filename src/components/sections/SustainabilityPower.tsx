"use client";

import type { Locale } from "@/types/content";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollImage } from "@/components/motion/ScrollImage";
import { visuals } from "@/lib/visuals";

interface SustainabilityPowerProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "Energy",
    live: "Off-grid solar",
    close:
      "The site makes its own power from the sun. Batches do not wait on the national supply, and they do not generate an electricity invoice.",
    grid: {
      label: "National grid",
      status: "Disconnected",
      note: "Production does not wait on it.",
    },
    bill: {
      utility: "Electricity",
      account: "Plant supply",
      due: "Amount due",
      amount: "0",
      stamp: "Not issued",
      note: "The plant does not carry a bill.",
    },
  },
  am: {
    eyebrow: "ኃይል",
    live: "ከመስመር ውጭ የፀሐይ ኃይል",
    close:
      "ቦታው ኃይሉን ከፀሐይ ያመነጫል። ባቾች በሀገራዊ አቅርቦት አይጠብቁም፣ የኤሌክትሪክ ደረሰኝም አይፈጥሩም።",
    grid: {
      label: "ሀገራዊ መስመር",
      status: "ተቋርጧል",
      note: "ምርት በእሱ አይጠብቅም።",
    },
    bill: {
      utility: "ኤሌክትሪክ",
      account: "የፋብሪካ አቅርቦት",
      due: "የሚከፈል",
      amount: "0",
      stamp: "አልወጣም",
      note: "ፋብሪካው ደረሰኝ የለውም።",
    },
  },
} as const;

export function SustainabilityPower({ locale }: SustainabilityPowerProps) {
  const t = copy[locale];

  return (
    <section
      id="power"
      data-header-tone="dark"
      className="scroll-mt-24 overflow-hidden bg-deep-navy"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[22rem] lg:min-h-[38rem]">
          <ScrollImage src={visuals.sustainability} effect="zoom-in" sizes="50vw" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep-navy/70 via-transparent to-xinix-blue/15 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-deep-navy/60" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-solar-amber/25 blur-3xl" />
        </div>

        <div className="flex flex-col justify-center px-4 py-16 sm:px-8 lg:px-12 lg:py-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-solar-amber">
              {t.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t.live}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
              {t.close}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <Reveal delay={0.06}>
              <article className="flex h-full flex-col justify-between rounded-2xl border border-white/15 bg-white/5 p-5">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
                    {t.grid.label}
                  </p>
                  <p className="mt-6 font-mono text-xs text-white/35">——— / ———</p>
                  <p className="mt-4 text-2xl font-bold text-white">{t.grid.status}</p>
                </div>
                <p className="mt-6 text-sm text-white/60">{t.grid.note}</p>
              </article>
            </Reveal>

            <Reveal delay={0.12}>
              <article className="relative bg-paper px-5 py-6 text-deep-navy shadow-[8px_16px_40px_rgba(0,0,0,0.35)] ring-1 ring-black/10 sm:-rotate-1">
                <div className="flex items-start justify-between border-b border-dashed border-line pb-3">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-stone">XINIX</p>
                    <p className="mt-1 text-sm font-bold">{t.bill.utility}</p>
                  </div>
                  <span className="rotate-12 border-2 border-solar-amber px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-solar-amber">
                    {t.bill.stamp}
                  </span>
                </div>
                <p className="mt-4 text-xs uppercase tracking-wider text-stone">{t.bill.account}</p>
                <div className="mt-6 flex items-end justify-between">
                  <p className="text-xs text-stone">{t.bill.due}</p>
                  <p className="font-mono text-4xl font-bold leading-none">{t.bill.amount}</p>
                </div>
                <p className="mt-4 text-sm text-stone">{t.bill.note}</p>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
