import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductBuyBox } from "@/components/product/ProductBuyBox";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductGallery } from "@/components/product/ProductGallery";
import { getProductById, getRelatedProducts, products } from "@/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.id }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductById(slug);
  if (!product) return { title: "Jewellery" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductById(slug);
  if (!product) notFound();
  const related = getRelatedProducts(product);

  return (
    <article className="pt-36 lg:pt-40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-16">
        <ProductGallery product={product} />
        <div className="lg:pt-6">
          <p className="text-[11px] tracking-[0.22em] uppercase text-gold">{product.category} Jewellery</p>
          <h1 className="mt-3 font-serif text-4xl text-text sm:text-5xl">{product.name}</h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">{product.description}</p>
          <dl className="mt-8 space-y-3 border-y border-gold/20 py-6 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Category</dt>
              <dd className="text-text">{product.category}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Type</dt>
              <dd className="text-text">{product.type}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Occasion</dt>
              <dd className="text-text">{product.occasion}</dd>
            </div>
          </dl>
          <ProductBuyBox product={product} />
        </div>
      </div>
      {related.length ? (
        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
          <h2 className="font-serif text-3xl text-text">You May Also Like</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
