"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { images } from "@/data/images";

export function Hero() {
  const slides = images.hero;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  return (
    <section
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={slides[index]}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index]}
            alt="New Friends Jewellers showroom and jewellery in Leh, Ladakh"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/50 to-ink/25" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-36 pb-24 sm:px-8 lg:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[11px] tracking-[0.32em] uppercase text-gold"
        >
          Leh, Ladakh • Est. with Trust
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-3xl font-serif text-[2.6rem] leading-[1.12] text-ivory sm:text-6xl lg:text-[4.4rem]"
        >
          Timeless Jewellery,
          <br />
          Crafted to Be Cherished.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22 }}
          className="mt-6 max-w-lg text-base leading-relaxed text-beige sm:text-lg"
        >
          Discover gold and silver jewellery from our Leh showroom — for weddings, festivals, gifting, and everyday luxury.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <ButtonLink href="/gold">Explore Gold Jewellery</ButtonLink>
          <ButtonLink href="/silver" variant="secondary">
            Explore Silver Jewellery
          </ButtonLink>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-5 z-10 flex items-center gap-2 sm:left-8">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => setIndex((current) => (current - 1 + slides.length) % slides.length)}
          className="grid size-10 place-items-center rounded-full border border-ivory/40 text-ivory hover:bg-white/10"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => setIndex((current) => (current + 1) % slides.length)}
          className="grid size-10 place-items-center rounded-full border border-ivory/40 text-ivory hover:bg-white/10"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide}
            type="button"
            aria-label={`Show slide ${slideIndex + 1}`}
            onClick={() => setIndex(slideIndex)}
            className={`h-1.5 rounded-full transition-all ${
              slideIndex === index ? "w-8 bg-gold" : "w-3 bg-ivory/40"
            }`}
          />
        ))}
      </div>
      <a
        href="#trust"
        className="absolute right-5 bottom-8 z-10 hidden flex-col items-center gap-2 text-ivory/80 sm:right-8 sm:flex"
        aria-label="Scroll to explore"
      >
        <span className="text-[10px] tracking-[0.28em] uppercase">Scroll</span>
        <ChevronDown className="size-5 animate-pulse" strokeWidth={1.25} />
      </a>
    </section>
  );
}
