import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { enquiryMessage, getWhatsAppUrl } from "@/data/site";

export function CustomJewelleryCTA() {
  return (
    <section className="bg-burgundy py-20 text-center lg:py-28">
      <Reveal className="mx-auto max-w-2xl px-5">
        <p className="text-[11px] tracking-[0.28em] uppercase text-gold">Bespoke Enquiries</p>
        <h2 className="mt-4 font-serif text-3xl text-ivory sm:text-5xl">Have Something Special in Mind?</h2>
        <p className="mt-5 text-base text-beige">Work with us to create a piece that is uniquely yours.</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/contact" variant="light">
            Talk to Our Jewellers
          </ButtonLink>
          <ButtonLink href={getWhatsAppUrl(enquiryMessage)} variant="secondary" external>
            WhatsApp Us
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
