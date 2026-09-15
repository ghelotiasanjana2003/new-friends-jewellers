import { formatINR } from "@/lib/format";
import { site } from "@/data/site";

export function RatesBar() {
  const items = [
    { label: "22K Hallmarked Gold", value: `${formatINR(site.rates.gold22k)} / gm` },
    { label: "18K Gold", value: `${formatINR(site.rates.gold18k)} / gm` },
    { label: "999 Silver", value: `${formatINR(site.rates.silver999)} / gm` },
  ];

  return (
    <div className="bg-ink text-ivory">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 overflow-x-auto px-5 py-2 sm:px-8">
        <p className="hidden shrink-0 text-[10px] tracking-[0.2em] uppercase text-gold md:block">
          {site.rates.updatedLabel}
        </p>
        <div className="flex items-center gap-6 sm:gap-8">
          {items.map((item) => (
            <p key={item.label} className="shrink-0 text-[11px] tracking-[0.06em] text-beige">
              <span className="text-gold">{item.label}</span>
              <span className="mx-2 text-ivory/40">·</span>
              {item.value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
