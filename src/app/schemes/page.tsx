import type { Metadata } from "next";
import { CustomJewelleryCTA } from "@/components/home/CustomJewelleryCTA";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/data/images";
import { SchemePage } from "@/components/SchemePage/SchemePage";

export const metadata: Metadata = {
  title: "Schemes",
  description:
    "Visit the New Friends Jewellers showroom in Ladhakh, Rajasthan, or enquire about gold and silver jewellery on WhatsApp.",
};

export default function Schemes() {
  return (
    <>
      <PageHero
        title="Schemes"
        subtitle="Come to the showroom, call our jewellers, or start a conversation on WhatsApp."
        image={images.contact}
      />
      <SchemePage/>
      <CustomJewelleryCTA />
    </>
  );
}
