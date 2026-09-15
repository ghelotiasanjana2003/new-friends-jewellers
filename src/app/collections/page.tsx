import type { Metadata } from "next";
import { ProductGrid } from "@/components/product/ProductGrid";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/data/images";
import { products, type Occasion } from "@/data/products";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore jewellery collections for weddings, festivals, everyday elegance, and gifting at New Friends Jewellers.",
};

const groups: { id: string; title: Occasion }[] = [
  { id: "wedding", title: "Wedding" },
  { id: "festive", title: "Festive" },
  { id: "everyday", title: "Everyday Elegance" },
  { id: "gifting", title: "Gifting" },
];

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        title="Collections"
        subtitle="Jewellery composed for celebrations, rituals, everyday luxury, and thoughtful gifts."
        image={images.occasionWedding}
      />
      <div className="mx-auto max-w-7xl space-y-20 px-5 py-16 sm:px-8 lg:py-24">
        {groups.map((group) => {
          const items = products.filter((product) => product.occasion === group.title);
          return (
            <section key={group.id} id={group.id}>
              <SectionHeading align="left" title={group.title} />
              <div className="mt-10">
                <ProductGrid products={items} />
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
