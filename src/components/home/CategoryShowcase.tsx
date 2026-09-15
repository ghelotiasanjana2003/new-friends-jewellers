import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/data/images";

const categories = [
  {
    href: "/gold",
    title: "Gold Jewellery",
    description:
      "Celebrate timeless elegance with our collection of beautifully crafted gold jewellery.",
    cta: "Explore Gold",
    image: images.goldCategory,
  },
  {
    href: "/silver",
    title: "Silver Jewellery",
    description:
      "Discover contemporary and traditional silver pieces designed to make every moment special.",
    cta: "Explore Silver",
    image: images.silverCategory,
  },
];

export function CategoryShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <Reveal>
        <SectionHeading
          title="Explore Our Jewellery"
          subtitle="Elegance crafted for every occasion."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
        {categories.map((category, index) => (
          <Reveal key={category.href} delay={index * 0.08}>
            <Link href={category.href} className="group relative block min-h-[460px] overflow-hidden bg-ink lg:min-h-[560px]">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-ink/35 transition-colors duration-500 group-hover:bg-ink/45" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
                <h3 className="font-serif text-3xl text-ivory sm:text-4xl">{category.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-beige">{category.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase text-ivory">
                  {category.cta}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
