import type { Metadata } from "next";
import { ContactSection } from "@/components/home/ContactSection";
import { CustomJewelleryCTA } from "@/components/home/CustomJewelleryCTA";
import { PageHero } from "@/components/ui/PageHero";
import { images } from "@/data/images";
import { CartPage } from "@/components/CartPage/CartPage";

export const metadata: Metadata = {
  title: "Cart",
  description:
    "Visit the New Friends Jewellers showroom in Ladhakh, Rajasthan, or enquire about gold and silver jewellery on WhatsApp.",
};

export default function Cart() {
  return (
    <>
      <PageHero
        title="Cart"
        subtitle="Come to the showroom, call our jewellers, or start a conversation on WhatsApp."
        image={images.contact}
      />
      <CartPage/>
    </>
  );
}
