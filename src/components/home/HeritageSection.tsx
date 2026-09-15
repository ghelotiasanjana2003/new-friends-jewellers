import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/images";

export function HeritageSection() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
      <Reveal>
        <div className="relative aspect-[4/5] overflow-hidden bg-beige sm:aspect-[5/6]">
          <Image
            src={images.heritage}
            alt="Inside New Friends Jewellers in Leh, Ladakh"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-[11px] tracking-[0.28em] uppercase text-gold">From Ladakh</p>
        <h2 className="mt-4 font-serif text-3xl leading-tight text-text sm:text-4xl lg:text-[2.7rem]">
          Rooted in Leh. Crafted with Passion.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
          From the heart of Leh, Ladakh, New Friends Jewellers brings together traditional craftsmanship and
          contemporary design. Every piece is created to celebrate individuality, relationships, and
          life&apos;s most memorable occasions.
        </p>
        <div className="mt-8">
          <ButtonLink href="/about" variant="ghost">
            Discover Our Story
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
