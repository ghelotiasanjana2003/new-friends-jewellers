"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import type { Product } from "@/data/products";
import { getWhatsAppUrl, productEnquiryMessage, site } from "@/data/site";
import { useCart } from "@/lib/cart";
import { formatINR } from "@/lib/format";

export function ProductBuyBox({ product }: { product: Product }) {
  const { add } = useCart();
  const router = useRouter();
  const [added, setAdded] = useState(false);

  function addToCart() {
    add(product.id);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }

  function buyNow() {
    add(product.id);
    router.push("/checkout");
  }

  return (
    <div>
      <p className="mt-8 font-serif text-3xl text-text">{formatINR(product.price)}</p>
      <p className="mt-2 text-sm text-muted">{product.makingNote}</p>
      <p className="mt-2 text-sm text-muted">
        {product.category === "Gold"
          ? "Final gold billing follows the showroom rate on the day of confirmation."
          : "Final silver billing follows the showroom rate on the day of confirmation."}
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={addToCart}
          className="inline-flex min-h-12 items-center justify-center bg-burgundy px-6 text-[13px] tracking-[0.14em] uppercase text-ivory transition-colors hover:bg-[#531922]"
        >
          {added ? "Added to bag" : "Add to bag"}
        </button>
        <button
          type="button"
          onClick={buyNow}
          className="inline-flex min-h-12 items-center justify-center border border-gold/60 px-6 text-[13px] tracking-[0.14em] uppercase text-text hover:bg-gold/10"
        >
          Buy now
        </button>
      </div>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href={getWhatsAppUrl(productEnquiryMessage(product.name))} variant="ghost" external>
          Enquire on WhatsApp
        </ButtonLink>
        <ButtonLink href={site.phoneHref} variant="ghost" external>
          Call Our Jewellers
        </ButtonLink>
      </div>
    </div>
  );
}
