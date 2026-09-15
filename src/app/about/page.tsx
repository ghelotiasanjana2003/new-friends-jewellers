import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/data/images";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about New Friends Jewellers, a Jaipur jewellery showroom offering gold and silver pieces for life's most memorable occasions.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="A Jaipur jewellery showroom dedicated to craft, care, and the occasions that matter."
        image="/images/banner2.png"
      />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        <div className="relative aspect-[4/5] overflow-hidden bg-beige">
          <Image
            src={images.aboutPortrait}
            alt="Gold jewellery crafted with attention to detail"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="text-[11px] tracking-[0.28em] uppercase text-gold">Our Story</p>
          <h2 className="mt-4 font-serif text-3xl text-text sm:text-4xl">New Friends Jewellers</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              From the heart of Jaipur, New Friends Jewellers brings together traditional craftsmanship and
              contemporary design. Our showroom is a place to discover gold and silver jewellery for weddings,
              festivals, gifting, and everyday luxury.
            </p>
            <p>
              We believe jewellery should be chosen with time, conversation, and trust. Each piece is selected
              to celebrate individuality, relationships, and life&apos;s most memorable occasions.
            </p>
            <p>
              Visit us in {site.location} to see the collection in person and speak with our jewellers about
              the piece you have in mind.
            </p>
          </div>
          <div className="mt-8">
            <ButtonLink href="/contact" variant="ghost">
              Visit the Showroom
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
