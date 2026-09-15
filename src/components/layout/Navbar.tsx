"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SearchModal } from "@/components/layout/SearchModal";
import { getWhatsAppUrl, enquiryMessage, site } from "@/data/site";
import { useCart } from "@/lib/cart";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gold", label: "Gold" },
  { href: "/silver", label: "Silver" },
  { href: "/schemes", label: "Gold Schemes" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { count } = useCart();
  const isHome = pathname === "/";
  const solid = !isHome || scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`transition-all duration-500 ${
          solid
            ? "bg-ivory/95 backdrop-blur-md border-b border-gold/20 shadow-[0_8px_30px_rgba(36,27,24,0.06)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 lg:h-20 lg:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-2.5">
            <Image
              src="/images/favicon.jpeg"
              alt=""
              width={40}
              height={40}
              className="size-9 shrink-0 object-cover sm:size-10"
            />
            <span
              className={`truncate font-serif text-[1.05rem] leading-tight tracking-wide sm:text-xl lg:text-[1.25rem] ${
                solid ? "text-text" : "text-ivory"
              }`}
            >
              {site.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] tracking-[0.14em] uppercase transition-colors ${
                    solid
                      ? active
                        ? "text-burgundy"
                        : "text-muted hover:text-burgundy"
                      : active
                        ? "text-ivory"
                        : "text-ivory/75 hover:text-ivory"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search jewellery"
              className={`grid size-11 place-items-center rounded-full transition-colors ${
                solid ? "text-text hover:bg-beige/70" : "text-ivory hover:bg-white/10"
              }`}
            >
              <Search className="size-[18px]" strokeWidth={1.5} />
            </button>
            <Link
              href="/cart"
              aria-label="Shopping bag"
              className={`relative grid size-11 place-items-center rounded-full transition-colors ${
                solid ? "text-text hover:bg-beige/70" : "text-ivory hover:bg-white/10"
              }`}
            >
              <ShoppingBag className="size-[18px]" strokeWidth={1.5} />
              {count > 0 ? (
                <span className="absolute top-1.5 right-1.5 grid min-w-4 place-items-center rounded-full bg-burgundy px-1 text-[9px] text-ivory">
                  {count}
                </span>
              ) : null}
            </Link>
            <a
              href={getWhatsAppUrl(enquiryMessage)}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              className={`hidden items-center gap-2 rounded-full border px-4 py-2 text-[11px] tracking-[0.16em] uppercase xl:inline-flex ${
                solid
                  ? "border-gold/50 text-burgundy hover:border-gold"
                  : "border-ivory/40 text-ivory hover:border-ivory"
              }`}
            >
              WhatsApp
            </a>
            <button
              type="button"
              className={`grid size-11 place-items-center lg:hidden ${
                solid ? "text-text" : "text-ivory"
              }`}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="size-6" strokeWidth={1.5} /> : <Menu className="size-6" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ivory pt-32 lg:hidden"
          >
            <motion.nav
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col px-8 py-8"
              aria-label="Mobile"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-gold/15 py-4 font-serif text-2xl text-text"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/cart" className="border-b border-gold/15 py-4 font-serif text-2xl text-text">
                Bag {count ? `(${count})` : ""}
              </Link>
              <a
                href={getWhatsAppUrl(enquiryMessage)}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex min-h-12 items-center justify-center bg-burgundy px-6 text-[13px] tracking-[0.16em] uppercase text-ivory"
              >
                WhatsApp Us
              </a>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
