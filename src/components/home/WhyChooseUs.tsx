import { Compass, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Quality",
    text: "Quality you can rely on, from selection to purchase.",
  },
  {
    icon: Sparkles,
    title: "Timeless Designs",
    text: "Traditional craftsmanship meets contemporary elegance.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Service",
    text: "Guidance tailored to your style and occasion.",
  },
  {
    icon: Compass,
    title: "Ladhakh Heritage",
    text: "Jewellery inspired by the rich culture and artistry of Rajasthan.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="border-y border-gold/15 bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading title="Why Choose Us" subtitle="A showroom experience rooted in care and craft." />
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.06}>
              <feature.icon className="size-6 text-gold" strokeWidth={1.3} />
              <h3 className="mt-5 font-serif text-2xl text-text">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{feature.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
