"use client";

import { ProductCard } from "@/components/product/ProductCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedCollection() {
  const featured = getFeaturedProducts();

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            title="The Signature Collection"
            subtitle="Designed for celebrations, crafted for generations."
          />
        </Reveal>
        <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible">
          {featured.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.06} className="min-w-[70%] snap-start sm:min-w-[46%] md:min-w-0">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <ButtonLink href="/collections" variant="ghost">
            View Collections
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
