import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/data/images";
import { site } from "@/data/site";

export function InstagramGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <Reveal>
        <SectionHeading title="Follow Our Journey" subtitle="Jewellery moments from the showroom floor." />
      </Reveal>
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
        {images.instagram.map((src, index) => (
          <Reveal key={`${src}-${index}`} delay={index * 0.04}>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-square overflow-hidden bg-beige"
            >
              <Image
                src={src}
                alt="Jewellery photography from New Friends Jewellers"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
            </a>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center gap-4">
        <p className="font-serif text-2xl text-text">{site.instagramHandle}</p>
        <ButtonLink href={site.instagramUrl} variant="ghost" external>
          Follow Us
        </ButtonLink>
      </div>
    </section>
  );
}
