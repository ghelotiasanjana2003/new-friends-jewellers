"use client";

import { useMemo, useState } from "react";
import { ProductGrid } from "@/components/product/ProductGrid";
import type { Product, ProductType } from "@/data/products";

export function Catalogue({ products }: { products: Product[] }) {
  const [type, setType] = useState<"All" | ProductType>("All");
  const types = useMemo(() => {
    const unique = Array.from(new Set(products.map((product) => product.type)));
    return unique;
  }, [products]);

  const visible = type === "All" ? products : products.filter((product) => product.type === type);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {(["All", ...types] as const).map((item) => {
          const active = type === item;
          return (
            <button
              key={item}
              type="button"
              onClick={() => setType(item)}
              className={`min-h-11 px-4 text-[12px] tracking-[0.16em] uppercase transition-colors duration-300 ${
                active
                  ? "bg-burgundy text-ivory"
                  : "border border-gold/30 text-muted hover:border-gold hover:text-text"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
      {visible.length ? (
        <ProductGrid products={visible} />
      ) : (
        <p className="py-16 text-center text-muted">No pieces in this category just yet.</p>
      )}
    </div>
  );
}
