interface HeroVisualProps {
  badges: string[];
}

export function HeroVisual({ badges }: HeroVisualProps) {
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-deep-teal via-xinix-teal to-drop-cyan shadow-xl ring-1 ring-white/20 lg:aspect-[5/4]"
      aria-hidden
    >
      <div className="absolute inset-0 opacity-25">
        <svg className="h-full w-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="ripple" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="30" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5" />
              <circle cx="40" cy="40" r="20" fill="none" stroke="white" strokeWidth="0.5" opacity="0.35" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#ripple)" />
        </svg>
      </div>

      <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-solar-amber/20 blur-2xl" />
      <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-leaf-green/20 blur-2xl" />

      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="140" height="140" viewBox="0 0 48 48" fill="none" className="drop-shadow-lg">
          <defs>
            <linearGradient id="hero-droplet" x1="24" y1="4" x2="24" y2="44">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.75" />
            </linearGradient>
          </defs>
          <path
            d="M24 4C24 4 8 22 8 32a16 16 0 0 0 32 0C40 22 24 4 24 4Z"
            fill="url(#hero-droplet)"
          />
          <ellipse cx="18" cy="28" rx="4" ry="6" fill="white" fillOpacity="0.45" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-navy/70 to-transparent p-5 pt-12 sm:p-6">
        <div className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
