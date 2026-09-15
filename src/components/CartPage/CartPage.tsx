"use client";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Minus,
  Plus,
  ShieldCheck,
  Trash2,
  MessageCircle,
  Gem,
  Store,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/lib/cart";
import { formatINR } from "@/lib/format";
import { getWhatsAppUrl, site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function CartPage() {
  const { items, count, subtotal, setQuantity, remove, clear } = useCart();

  const whatsappItems = items
    .map(
      ({ product, quantity }) =>
        `• ${product.name} × ${quantity} — ${formatINR(product.price * quantity)}`,
    )
    .join("\n");

  const whatsappMessage = [
    "Hello New Friends Jewellers, I would like to enquire about my jewellery bag.",
    "",
    "Selected pieces:",
    whatsappItems,
    "",
    `Estimated total: ${formatINR(subtotal)}`,
    "",
    "Please share the final details and availability.",
  ]
    .filter(Boolean)
    .join("\n");

  const itemLabel = count === 1 ? "1 item" : `${count} items`;

  return (
    <main className="overflow-hidden bg-[#f8f4ec] text-[#302521]">
      {/* Page heading */}
      <section className="border-b border-[#e6dccd] bg-[#f5eee3]">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 lg:py-20">
          <Reveal>
            <p className="text-[10px] font-medium tracking-[0.28em] text-[#a47738]">
              YOUR SELECTION
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Your Jewellery Bag
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#756960]">
              Review your selected pieces before continuing. Your final
              jewellery price will be confirmed by our jewellers at the time
              of billing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-20">
        <AnimatePresence mode="wait">
          {items.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
              className="mx-auto max-w-2xl py-12 text-center lg:py-20"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#d9c8ac] bg-[#f5eee3]">
                <Gem
                  size={31}
                  strokeWidth={1.15}
                  className="text-[#a47738]"
                />
              </div>

              <p className="mt-8 text-[10px] font-medium tracking-[0.25em] text-[#a47738]">
                YOUR BAG IS WAITING
              </p>

              <h2 className="mt-3 font-serif text-4xl text-[#302521]">
                Nothing selected yet.
              </h2>

              <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#756960]">
                Explore our gold and silver collections and discover something
                made to be cherished.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/gold"
                  className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#641f2a] px-6 text-[11px] font-medium tracking-[0.16em] text-[#f8f4ec] uppercase transition-all duration-300 hover:bg-[#531922] hover:gap-4"
                >
                  Explore Gold Jewellery
                  <ArrowRight size={15} />
                </Link>

                <Link
                  href="/silver"
                  className="inline-flex min-h-12 items-center justify-center gap-3 border border-[#b08a4a]/60 px-6 text-[11px] font-medium tracking-[0.16em] text-[#302521] uppercase transition-all duration-300 hover:bg-[#b08a4a]/10 hover:gap-4"
                >
                  Explore Silver
                  <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="filled"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Bag toolbar */}
              <div className="mb-7 flex flex-col justify-between gap-4 border-b border-[#e2d8ca] pb-5 sm:flex-row sm:items-center">
                <div>
                  <p className="font-serif text-2xl text-[#302521]">
                    {itemLabel}
                  </p>
                  <p className="mt-1 text-xs text-[#80746b]">
                    Selected from our gold & silver collections
                  </p>
                </div>

                <button
                  type="button"
                  onClick={clear}
                  className="inline-flex w-fit items-center gap-2 text-[10px] font-medium tracking-[0.16em] text-[#806d65] uppercase transition-colors hover:text-[#641f2a]"
                >
                  <Trash2 size={14} strokeWidth={1.4} />
                  Clear bag
                </button>
              </div>

              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_370px] lg:items-start lg:gap-14">
                {/* Cart lines */}
                <div>
                  <AnimatePresence initial={false}>
                    {items.map(({ product, quantity }) => (
                      <motion.article
                        layout
                        key={product.id}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{
                          opacity: 0,
                          x: -35,
                          height: 0,
                          marginBottom: 0,
                          overflow: "hidden",
                        }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mb-5 overflow-hidden border border-[#dfd5c7] bg-[#fcfaf5]"
                      >
                        <div className="grid sm:grid-cols-[190px_1fr]">
                          {/* Product image */}
                          <Link
                            href={`/products/${product.id}`}
                            className="group relative block aspect-[4/3] overflow-hidden bg-[#eee5d8] sm:aspect-auto sm:min-h-[245px]"
                          >
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              sizes="(max-width: 640px) 100vw, 190px"
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-[#b08a4a]/70" />
                          </Link>

                          {/* Details */}
                          <div className="flex min-w-0 flex-col justify-between p-5 sm:p-7">
                            <div>
                              <div className="flex items-start justify-between gap-5">
                                <div>
                                  <p className="text-[9px] font-medium tracking-[0.2em] text-[#a47738] uppercase">
                                    {product.category} Jewellery
                                  </p>

                                  <Link
                                    href={`/products/${product.id}`}
                                    className="mt-1 block font-serif text-2xl leading-tight text-[#302521] transition-colors hover:text-[#641f2a]"
                                  >
                                    {product.name}
                                  </Link>

                                  <p className="mt-2 text-xs text-[#80746b]">
                                    {product.type} · {product.occasion}
                                  </p>
                                </div>

                                <button
                                  type="button"
                                  onClick={() => remove(product.id)}
                                  aria-label={`Remove ${product.name}`}
                                  className="shrink-0 p-2 text-[#8b7d73] transition-colors hover:text-[#641f2a]"
                                >
                                  <Trash2
                                    size={17}
                                    strokeWidth={1.35}
                                  />
                                </button>
                              </div>

                              <div className="my-5 h-px bg-[#e5dbcf]" />

                              <p className="text-xs leading-5 text-[#756960]">
                                {product.makingNote}
                              </p>
                            </div>

                            <div className="mt-6 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                              {/* Quantity */}
                              <div>
                                <p className="mb-2 text-[9px] tracking-[0.16em] text-[#978980] uppercase">
                                  Quantity
                                </p>

                                <div className="inline-flex h-10 items-center border border-[#d9cebf] bg-[#f8f4ec]">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setQuantity(
                                        product.id,
                                        quantity - 1,
                                      )
                                    }
                                    className="flex h-full w-10 items-center justify-center text-[#665b55] transition-colors hover:bg-[#eee5d8]"
                                    aria-label="Decrease quantity"
                                  >
                                    <Minus size={13} />
                                  </button>

                                  <span className="flex h-full w-10 items-center justify-center border-x border-[#d9cebf] text-xs">
                                    {quantity}
                                  </span>

                                  <button
                                    type="button"
                                    onClick={() =>
                                      setQuantity(
                                        product.id,
                                        quantity + 1,
                                      )
                                    }
                                    className="flex h-full w-10 items-center justify-center text-[#665b55] transition-colors hover:bg-[#eee5d8]"
                                    aria-label="Increase quantity"
                                  >
                                    <Plus size={13} />
                                  </button>
                                </div>
                              </div>

                              <div className="sm:text-right">
                                <p className="text-[10px] tracking-[0.12em] text-[#978980] uppercase">
                                  Item total
                                </p>
                                <p className="mt-1 font-serif text-2xl text-[#302521]">
                                  {formatINR(
                                    product.price * quantity,
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </AnimatePresence>

                  <Link
                    href="/gold"
                    className="group mt-7 inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.18em] text-[#641f2a] uppercase transition-all hover:gap-3"
                  >
                    <ArrowLeft size={14} />
                    Continue shopping
                  </Link>
                </div>

                {/* Summary */}
                <aside className="lg:sticky lg:top-28">
                  <div className="border border-[#dcd1c2] bg-[#f5eee3] p-6 sm:p-8">
                    <p className="text-[10px] font-medium tracking-[0.25em] text-[#a47738]">
                      YOUR SELECTION
                    </p>

                    <h2 className="mt-2 font-serif text-3xl text-[#302521]">
                      Order Summary
                    </h2>

                    <div className="my-7 h-px bg-[#ded3c5]" />

                    <div className="space-y-4 text-sm">
                      <div className="flex items-center justify-between gap-5 text-[#756960]">
                        <span>Items</span>
                        <span>{itemLabel}</span>
                      </div>

                      <div className="flex items-center justify-between gap-5 text-[#756960]">
                        <span>Jewellery value</span>
                        <span>{formatINR(subtotal)}</span>
                      </div>
                    </div>

                    <div className="my-6 h-px bg-[#d7cbbb]" />

                    <div className="flex items-end justify-between gap-5">
                      <div>
                        <p className="text-[10px] tracking-[0.16em] text-[#8b7d73] uppercase">
                          Estimated total
                        </p>
                        <p className="mt-1 text-xs text-[#8b7d73]">
                          Before final billing
                        </p>
                      </div>

                      <p className="font-serif text-3xl text-[#302521]">
                        {formatINR(subtotal)}
                      </p>
                    </div>

                    <Link
                      href="#"
                      className="group mt-7 flex min-h-13 w-full items-center justify-center gap-3 bg-[#641f2a] px-6 text-[11px] font-medium tracking-[0.18em] text-[#f8f4ec] uppercase transition-all duration-300 hover:bg-[#531922] hover:gap-4"
                    >
                      Proceed to Checkout
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>

                    <a
                      href={getWhatsAppUrl(whatsappMessage)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 border border-[#b08a4a]/60 px-5 text-[10px] font-medium tracking-[0.16em] text-[#641f2a] uppercase transition-all duration-300 hover:bg-[#b08a4a]/10"
                    >
                      <MessageCircle size={15} strokeWidth={1.5} />
                      Enquire on WhatsApp
                    </a>

                    <p className="mt-5 text-center text-[10px] leading-5 text-[#8a7d73]">
                      Gold and silver rates, making charges, taxes and final
                      billing are confirmed at the time of purchase.
                    </p>
                  </div>

                  {/* Trust */}
                  <div className="mt-5 grid grid-cols-2 border border-[#ded4c7] bg-[#fcfaf5]">
                    <div className="border-r border-[#ded4c7] p-4">
                      <ShieldCheck
                        size={20}
                        strokeWidth={1.3}
                        className="text-[#a47738]"
                      />
                      <p className="mt-3 font-serif text-sm">
                        Trusted Quality
                      </p>
                      <p className="mt-1 text-[10px] leading-4 text-[#857970]">
                        Carefully selected jewellery
                      </p>
                    </div>

                    <div className="p-4">
                      <Store
                        size={20}
                        strokeWidth={1.3}
                        className="text-[#a47738]"
                      />
                      <p className="mt-3 font-serif text-sm">
                        Showroom Experience
                      </p>
                      <p className="mt-1 text-[10px] leading-4 text-[#857970]">
                        Personal assistance from our team
                      </p>
                    </div>
                  </div>
                </aside>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Bottom reassurance */}
      <section className="border-t border-[#e3d9cb] bg-[#f5eee3]">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          {[
            {
              icon: Check,
              title: "Personal Assistance",
              text: "Our jewellers are here to guide you.",
            },
            {
              icon: ShieldCheck,
              title: "Transparent Billing",
              text: "Final pricing is confirmed before purchase.",
            },
            {
              icon: MessageCircle,
              title: "Easy Enquiries",
              text: `Connect with us on WhatsApp or call ${site.phoneDisplay}.`,
            },
          ].map(({ icon: Icon, title, text }, index) => (
            <div
              key={title}
              className={`flex items-start gap-4 px-6 py-8 ${
                index > 0
                  ? "border-t border-[#ded4c6] md:border-l md:border-t-0"
                  : ""
              }`}
            >
              <Icon
                size={20}
                strokeWidth={1.35}
                className="mt-0.5 shrink-0 text-[#a47738]"
              />
              <div>
                <p className="font-serif text-base text-[#403630]">
                  {title}
                </p>
                <p className="mt-1 text-[11px] leading-5 text-[#81756c]">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
