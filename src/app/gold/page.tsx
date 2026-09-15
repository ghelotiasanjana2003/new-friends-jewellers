import type { Metadata } from "next";
import { Catalogue } from "@/components/product/Catalogue";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/data/images";
import { getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "Gold Jewellery | New Friends Jewellers Ladhakh",
  description:
    "Explore gold jewellery from New Friends Jewellers in Ladhakh, crafted for weddings, festivals, gifting, and everyday luxury.",
};

export default function GoldPage() {
  const products = getProductsByCategory("Gold");

  return (
    <>
      <PageHero
        title="Gold Jewellery"
        subtitle="Celebrate timeless elegance with our collection of beautifully crafted gold jewellery."
        image={images.goldCategory}
      />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <Catalogue products={products} />
      </section>
    </>
  );
}
