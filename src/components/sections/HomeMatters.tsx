"use client";

import type { Locale } from "@/types/content";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";
import { localePath } from "@/lib/i18n";

interface HomeMattersProps {
  locale: Locale;
  cta: string;
}

const copy = {
  en: {
    eyebrow: "Why it matters",
    title: "The everyday challenges we are here to solve",
    items: [
      {
        stat: "14%",
        body: "of people in Ethiopia use a safely managed drinking water service.",
      },
      {
        stat: "3%",
        body: "of Ethiopian households have a place to wash hands with soap and water at home.",
      },
      {
        stat: "50%",
        body: "of fruit and vegetables in sub-Saharan Africa can be lost before they reach the market.",
      },
    ],
    sources:
      "Sources: WHO/UNICEF Joint Monitoring Programme (2024); Food and Agriculture Organization of the United Nations.",
    close:
      "Xinix makes the products that help, here in Ethiopia, at prices local buyers can plan around.",
  },
  am: {
    eyebrow: "ለምን አስፈላጊ ነው",
    title: "ለመፍታት የመጣናቸው የዕለት ችግሮች",
    items: [
      {
        stat: "14%",
        body: "በኢትዮጵያ ደህንነቱ በአግባብ የተጠበቀ የመጠጥ ውሃ አገልግሎት የሚጠቀሙ ሰዎች።",
      },
      {
        stat: "3%",
        body: "በቤት ውስጥ በሳሙናና በውሃ እጅ የሚታጠብበት ቦታ ያላቸው የኢትዮጵያ ቤተሰቦች።",
      },
      {
        stat: "50%",
        body: "በሰሃራ ደቡብ አፍሪካ ገበያ ሳይደርስ ሊጠፋ የሚችል ፍራፍሬና አትክልት።",
      },
    ],
    sources:
      "ምንጮች፦ WHO/UNICEF Joint Monitoring Programme (2024)፤ የተባበሩት መንግሥታት የምግብና ግብርና ድርጅት።",
    close: "ዚኒክስ የሚረዱትን ምርቶች እዚህ ኢትዮጵያ፣ የአገር ውስጥ ገዢዎች ሊያቅዱበት በሚችሉ ዋጋ እናመርታለን።",
  },
} as const;

export function HomeMatters({ locale, cta }: HomeMattersProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="light" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-text">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-xinix-blue sm:text-4xl">
            {t.title}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-10">
          {t.items.map((item) => (
            <Reveal key={item.stat}>
              <p className="font-mono text-6xl font-bold leading-none tracking-tight text-xinix-blue sm:text-7xl">
                {item.stat}
              </p>
              <p className="mt-5 text-base leading-relaxed text-stone">{item.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-stone/80">{t.sources}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-deep-navy">{t.close}</p>
          <div className="mt-8">
            <Button href={localePath(locale, "/about")}>{cta}</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
