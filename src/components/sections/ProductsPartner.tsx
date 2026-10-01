import type { Locale, SiteContent } from "@/types/content";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/motion/Reveal";
import { localePath } from "@/lib/i18n";

interface ProductsPartnerProps {
  locale: Locale;
  content: SiteContent;
}

const copy = {
  en: {
    eyebrow: "Become a Xinix distributor",
    title: "Bring Xinix to shops, institutions and businesses in your region",
    body: "Bring Xinix water, food hygiene and cleaning products to shops, institutions and businesses in your region. We provide product training, marketing material and reliable supply.",
  },
  am: {
    eyebrow: "የዚኒክስ አከፋፋይ ይሁኑ",
    title: "ዚኒክስን ወደ ሱቆች፣ ተቋማትና ንግዶች በክልልዎ ያድርሱ",
    body: "የዚኒክስ ውሃ፣ የምግብ ንጽህናና የማጽዳት ምርቶችን ወደ ሱቆች፣ ተቋማትና ንግዶች በክልልዎ ያድርሱ። የምርት ስልጠና፣ የግብይት ቁሳቁስና አስተማማኝ አቅርቦት እናቀርባለን።",
  },
} as const;

export function ProductsPartner({ locale, content }: ProductsPartnerProps) {
  const t = copy[locale];

  return (
    <section data-header-tone="dark" className="bg-deep-navy py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-drop-cyan">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {t.body}
          </p>
          <div className="mt-8">
            <Button href={localePath(locale, "/distributors")} tone="onDark">
              {content.ui.becomeDistributor}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
