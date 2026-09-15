import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import { enquiryMessage, getWhatsAppUrl, site } from "@/data/site";

const columns = [
  {
    title: "Jewellery",
    links: [
      { href: "/gold", label: "Gold Jewellery" },
      { href: "/silver", label: "Silver Jewellery" },
      { href: "/collections", label: "Collections" },
      { href: "/schemes", label: "Gold Savings Schemes" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
      { href: "/cart", label: "Shopping Bag" },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "/shipping", label: "Shipping" },
      { href: "/returns", label: "Returns" },
      { href: "/privacy", label: "Privacy" },
      { href: getWhatsAppUrl(enquiryMessage), label: "WhatsApp", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_2fr_0.9fr] lg:py-20">
        <div>
           <Link href="/" className="flex min-w-0 items-center gap-2.5">
            <Image
              src="/images/favicon.jpeg"
              alt=""
              width={40}
              height={40}
              className="size-9 shrink-0 object-cover sm:size-10"
            />
            <span
              className={`truncate font-serif text-[1.05rem] leading-tight tracking-wide sm:text-xl text-beige/80 lg:text-[1.25rem] 
              }`}
            >
              {site.name}
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-beige/80">{site.tagline}</p>
          <p className="mt-6 text-sm leading-relaxed text-beige/70">{site.address}</p>
          <a href={site.phoneHref} className="mt-3 inline-block text-sm text-gold hover:text-ivory">
            {site.phoneDisplay}
          </a>
        </div>
        <div className="grid gap-10 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="mb-4 text-[11px] tracking-[0.22em] uppercase text-gold">{column.title}</p>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a href={link.href} target="_blank" rel="noreferrer" className="text-sm text-beige/80 hover:text-ivory">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm text-beige/80 hover:text-ivory">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-[12rem]">
          <p className="mb-4 text-[11px] tracking-[0.22em] uppercase text-gold">Visit the showroom</p>
          <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="block">
            <Image
              src={site.qrImage}
              alt="Scan to open New Friends Jewellers on Google Maps"
              width={180}
              height={180}
              className="w-full border border-white/10 bg-ivory p-2"
            />
          </a>
          <p className="mt-3 text-xs leading-relaxed text-beige/60">Scan the QR code to find us in Leh, Ladakh.</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 py-6 sm:flex-row sm:items-center sm:px-8">
          <p className="text-xs tracking-wide text-beige/60">© 2026 {site.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={site.instagramUrl} aria-label="Instagram" className="text-beige/80 hover:text-ivory">
              <InstagramIcon className="size-4" />
            </a>
            <a href={site.facebookUrl} aria-label="Facebook" className="text-beige/80 hover:text-ivory">
              <FacebookIcon className="size-4" />
            </a>
            <a href={getWhatsAppUrl(enquiryMessage)} aria-label="WhatsApp" className="text-beige/80 hover:text-ivory">
              <WhatsAppIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
