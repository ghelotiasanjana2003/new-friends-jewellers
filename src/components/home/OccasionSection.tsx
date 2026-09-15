import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/data/images";

const occasions = [
  { name: "Wedding", href: "/collections#wedding", image: images.occasionWedding },
  { name: "Festive", href: "/collections#festive", image: images.occasionFestive },
  { name: "Everyday Elegance", href: "/collections#everyday", image: images.occasionEveryday },
  { name: "Gifting", href: "/collections#gifting", image: images.occasionGifting },
];

export function OccasionSection() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading title="Jewellery for Every Occasion" />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {occasions.map((occasion, index) => (
            <Reveal key={occasion.name} delay={index * 0.05}>
              <Link href={occasion.href} className="group relative block aspect-[3/4] overflow-hidden bg-ink">
                <Image
                  src={occasion.image}
                  alt={`${occasion.name} jewellery`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-ink/30 transition-colors group-hover:bg-ink/45" />
                <p className="absolute inset-x-0 bottom-6 text-center font-serif text-xl text-ivory sm:text-2xl">
                  {occasion.name}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
