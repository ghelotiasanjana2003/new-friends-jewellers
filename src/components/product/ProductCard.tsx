"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { formatINR } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-beige">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-gold/70" />
        </div>
        <div className="pt-4">
          <p className="text-[11px] tracking-[0.2em] uppercase text-gold">{product.category} Jewellery</p>
          <h3 className="mt-1 font-serif text-xl text-text">{product.name}</h3>
          <p className="mt-2 font-serif text-lg text-text">{formatINR(product.price)}</p>
          <p className="mt-2 inline-flex items-center gap-2 text-sm text-muted transition-colors group-hover:text-burgundy">
            Shop now
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </p>
        </div>
      </Link>
    </article>
  );
}
