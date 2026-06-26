interface Stat {
  value: string;
  label: string;
}

interface StatBlockProps {
  stats: Stat[];
}

export function StatBlock({ stats }: StatBlockProps) {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-line bg-white p-5 text-center shadow-sm"
        >
          <p className="text-3xl font-bold tracking-tight text-xinix-teal sm:text-4xl">
            {stat.value}
          </p>
          <p className="mt-2 text-sm text-stone">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
