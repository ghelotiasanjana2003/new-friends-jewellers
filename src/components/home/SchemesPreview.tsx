import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { schemes } from "@/data/schemes";

export function SchemesPreview() {
  return (
    <section className="bg-ink py-20 text-ivory lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] uppercase text-gold">Jewellery Savings</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl">Gold schemes made for Leh families</h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-beige/80">
            Plan your next necklace, bridal set, or gift with a monthly savings plan. Redeem in the showroom when you are ready.
          </p>
          <div className="mt-8">
            <ButtonLink href="/schemes" variant="secondary">
              View Gold Schemes
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="space-y-4">
          {schemes.map((scheme) => (
            <div key={scheme.id} className="border border-white/10 bg-white/5 p-5">
              <p className="text-[11px] tracking-[0.18em] uppercase text-gold">{scheme.tenure}</p>
              <h3 className="mt-2 font-serif text-2xl">{scheme.name}</h3>
              <p className="mt-2 text-sm text-beige/80">{scheme.highlight}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
