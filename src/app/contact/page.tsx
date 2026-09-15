import type { Metadata } from "next";
import { ContactSection } from "@/components/home/ContactSection";
import { CustomJewelleryCTA } from "@/components/home/CustomJewelleryCTA";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit the New Friends Jewellers showroom in Ladhakh, Rajasthan, or enquire about gold and silver jewellery on WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Come to the showroom, call our jewellers, or start a conversation on WhatsApp."
        image={images.contact}
      />
      <ContactSection showForm />
      <CustomJewelleryCTA />
    </>
  );
}
