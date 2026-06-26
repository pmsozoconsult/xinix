import { FullBleedSection } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";

interface PageBannerProps {
  src: string;
  headline: string;
  body?: string;
  children?: React.ReactNode;
  overlay?: "dark" | "teal" | "navy";
}

export function PageBanner({
  src,
  headline,
  body,
  children,
  overlay = "navy",
}: PageBannerProps) {
  return (
    <FullBleedSection
      src={src}
      alt=""
      overlay={overlay}
      minHeight="min-h-[50vh] sm:min-h-[55vh]"
      className="pt-16"
    >
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {headline}
          </h1>
          {body && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              {body}
            </p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </Reveal>
      </div>
    </FullBleedSection>
  );
}
