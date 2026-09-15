"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/data/products";

export function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const gallery = product.gallery.length ? product.gallery : [product.image];

  function go(delta: number) {
    setActive((current) => (current + delta + gallery.length) % gallery.length);
  }

  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden bg-beige">
        <Image
          src={gallery[active]}
          alt={product.name}
          fill
          priority
          className="object-cover transition-transform duration-700 hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {gallery.length > 1 ? (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => go(-1)}
              className="absolute top-1/2 left-3 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-ivory/90 text-text"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => go(1)}
              className="absolute top-1/2 right-3 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-ivory/90 text-text"
            >
              <ChevronRight className="size-4" />
            </button>
          </>
        ) : null}
      </div>
      {gallery.length > 1 ? (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {gallery.map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              onClick={() => setActive(index)}
              className={`relative aspect-square overflow-hidden border ${
                active === index ? "border-gold" : "border-transparent"
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="120px" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
