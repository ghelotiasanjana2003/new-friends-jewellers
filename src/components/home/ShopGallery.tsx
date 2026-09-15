"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/data/images";

export function ShopGallery() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            title="Inside the Showroom"
            subtitle="Visit New Friends Jewellers in Leh — hallmarked gold, silver, and a welcome at every counter."
          />
        </Reveal>
        <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
          {images.shopGallery.map((src, index) => (
            <Reveal key={src} delay={index * 0.05} className="min-w-[78%] snap-center sm:min-w-[48%] lg:min-w-[32%]">
              <div className="relative aspect-[4/5] overflow-hidden bg-beige">
                <Image
                  src={src}
                  alt="New Friends Jewellers showroom in Leh, Ladakh"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 32vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
