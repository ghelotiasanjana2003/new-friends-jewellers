import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { ContactSection } from "@/components/home/ContactSection";
import { CustomJewelleryCTA } from "@/components/home/CustomJewelleryCTA";
import { FeaturedCollection } from "@/components/home/FeaturedCollection";
import { HeritageSection } from "@/components/home/HeritageSection";
import { Hero } from "@/components/home/Hero";
import { InstagramGrid } from "@/components/home/InstagramGrid";
import { OccasionSection } from "@/components/home/OccasionSection";
import { ShopGallery } from "@/components/home/ShopGallery";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { SchemesPreview } from "@/components/home/SchemesPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <CategoryShowcase />
      <FeaturedCollection />
      <SchemesPreview />
      <HeritageSection />
      {/* <ShopGallery /> */}
      <OccasionSection />
      <WhyChooseUs />
      <CustomJewelleryCTA />
      <InstagramGrid />
      <ContactSection />
    </>
  );
}
