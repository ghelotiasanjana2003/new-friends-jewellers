import { Clock, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/home/ContactForm";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { enquiryMessage, getWhatsAppUrl, site } from "@/data/site";

export function ContactSection({ showForm = false }: { showForm?: boolean }) {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-stretch">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] uppercase text-gold">Showroom</p>
          <h2 className="mt-4 font-serif text-3xl text-text sm:text-5xl">Visit Our Showroom</h2>
          <p className="mt-6 font-serif text-2xl text-text">{site.name}</p>
          <p className="mt-2 max-w-md text-muted">{site.address}</p>
          <ul className="mt-8 space-y-4 text-sm text-muted">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 text-gold" strokeWidth={1.5} />
              <span>
                Phone
                <br />
                <a href={site.phoneHref} className="text-text transition-colors hover:text-burgundy">
                  {site.phoneDisplay}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 text-gold" strokeWidth={1.5} />
              <span>
                Opening hours
                <br />
                {site.hours.days}
                <br />
                {site.hours.time}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 text-gold" strokeWidth={1.5} />
              <span>
                {site.name}
                <br />
                Find us on Google Maps
              </span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={getWhatsAppUrl(enquiryMessage)} external>
              Chat With Us
            </ButtonLink>
            <ButtonLink href={site.mapsUrl} variant="ghost" external>
              Get Directions
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="min-h-[320px] lg:min-h-full">
          <iframe
            title="New Friends Jewellers on Google Maps"
            src={site.mapsEmbed}
            className="h-full min-h-[320px] w-full border border-gold/25 bg-ivory grayscale-[20%] lg:min-h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
      {showForm ? (
        <div className="mx-auto mt-12 max-w-7xl px-5 sm:px-8">
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      ) : null}
    </section>
  );
}
