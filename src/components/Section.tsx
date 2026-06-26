import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "paper" | "teal";
}

const backgrounds = {
  white: "bg-white",
  paper: "bg-paper",
  teal: "bg-deep-teal text-white",
};

export function Section({
  children,
  className,
  id,
  background = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-14 sm:py-20 lg:py-24", backgrounds[background], className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function PageHero({
  headline,
  body,
  children,
}: {
  headline: string;
  body?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl lg:text-5xl">
        {headline}
      </h1>
      {body && (
        <p className="mt-5 text-lg text-stone whitespace-pre-line">{body}</p>
      )}
      {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
    </div>
  );
}

export function ProseBlock({ text }: { text: string }) {
  return (
    <div className="prose-content max-w-3xl text-stone whitespace-pre-line">
      {text.split("\n\n").map((paragraph) => (
        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
      ))}
    </div>
  );
}
