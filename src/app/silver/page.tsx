import type { Metadata } from "next";
import { Catalogue } from "@/components/product/Catalogue";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/data/images";
import { getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "Silver Jewellery | New Friends Jewellers Ladhakh",
  description:
    "Discover contemporary and traditional silver jewellery from New Friends Jewellers, Ladhakh.",
};

export default function SilverPage() {
  const products = getProductsByCategory("Silver");

  return (
    <>
      <PageHero
        title="Silver Jewellery"
        subtitle="Contemporary and traditional silver pieces designed to make every moment special."
        image={images.silverCategory}
      />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <Catalogue products={products} />
      </section>
    </>
  );
}
