import type { SiteContent } from "@/types/content";
import { TrustIcon } from "@/components/Icons";

interface TrustBarProps {
  items: SiteContent["trustBar"];
}

export function TrustBar({ items }: TrustBarProps) {
  return (
    <section className="border-y border-line bg-white" aria-label="Trust indicators">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-8 sm:grid-cols-4 sm:px-6 lg:px-8">
        {items.map((item, index) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-lg bg-paper px-4 py-3"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-xinix-teal/10 text-xinix-teal">
              <TrustIcon index={index} />
            </span>
            <span className="text-sm font-medium leading-snug text-deep-navy">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
