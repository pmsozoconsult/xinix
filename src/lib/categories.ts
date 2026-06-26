export type CategorySlug =
  | "water-and-household"
  | "hygiene-and-institutional"
  | "food-and-agriculture"
  | "industrial-and-biofilm";

export const categoryTheme: Record<
  CategorySlug,
  { accent: string; border: string; bg: string; icon: string }
> = {
  "water-and-household": {
    accent: "text-drop-cyan",
    border: "border-t-drop-cyan",
    bg: "bg-drop-cyan/10",
    icon: "water",
  },
  "hygiene-and-institutional": {
    accent: "text-xinix-teal",
    border: "border-t-xinix-teal",
    bg: "bg-xinix-teal/10",
    icon: "hygiene",
  },
  "food-and-agriculture": {
    accent: "text-leaf-green",
    border: "border-t-leaf-green",
    bg: "bg-leaf-green/10",
    icon: "agriculture",
  },
  "industrial-and-biofilm": {
    accent: "text-solar-amber",
    border: "border-t-solar-amber",
    bg: "bg-solar-amber/10",
    icon: "industrial",
  },
};
