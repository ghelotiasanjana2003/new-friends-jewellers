import { Gem, Landmark, ShieldCheck, Sparkles } from "lucide-react";

const items = [
  { icon: Gem, label: "Pure Craftsmanship" },
  { icon: ShieldCheck, label: "Trusted Quality" },
  { icon: Landmark, label: "Ladhakh Heritage" },
  { icon: Sparkles, label: "Made for Generations" },
];

export function TrustBar() {
  return (
    <section id="trust" className="border-y border-gold/20 bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-gold/15 lg:grid-cols-4 lg:divide-y-0">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-center gap-3 px-4 py-6 sm:py-8">
            <item.icon className="size-4 text-gold" strokeWidth={1.4} />
            <p className="text-[11px] tracking-[0.18em] uppercase text-text">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
