"use client";

import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { searchProducts } from "@/data/products";

type SearchModalProps = {
  open: boolean;
  onClose: () => void;
};

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchProducts(query), [query]);

  useEffect(() => {
    if (!open) {
      setQuery("");
      return;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm" onClick={onClose}>
      <div
        className="mx-auto mt-16 w-[min(680px,92vw)] overflow-hidden bg-ivory shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-gold/20 px-5 py-4">
          <Search className="size-5 text-gold" strokeWidth={1.5} />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search gold, silver, necklaces, jhumkas..."
            className="w-full bg-transparent text-base text-text outline-none placeholder:text-muted"
          />
          <button type="button" onClick={onClose} aria-label="Close search" className="p-1 text-muted">
            <X className="size-5" strokeWidth={1.5} />
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-3">
          {query.trim() && results.length === 0 ? (
            <p className="px-3 py-8 text-center text-sm text-muted">
              No pieces matched your search. Try gold, silver, or a jewellery type.
            </p>
          ) : (
            results.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                onClick={onClose}
                className="flex items-center gap-4 px-3 py-3 transition-colors hover:bg-beige/50"
              >
                <div className="relative h-16 w-14 overflow-hidden bg-beige">
                  <Image src={product.image} alt={product.name} fill className="object-cover" sizes="56px" />
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.16em] uppercase text-gold">{product.category} Jewellery</p>
                  <p className="font-serif text-lg text-text">{product.name}</p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
