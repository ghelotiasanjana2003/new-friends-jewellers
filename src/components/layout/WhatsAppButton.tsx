"use client";

import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { enquiryMessage, getWhatsAppUrl } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl(enquiryMessage)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-5 bottom-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(36,27,24,0.25)] transition-transform hover:scale-105 md:right-8 md:bottom-8"
    >
      <WhatsAppIcon className="size-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap bg-ink px-3 py-2 text-[11px] tracking-[0.12em] uppercase text-ivory opacity-0 transition-opacity group-hover:opacity-100 md:block">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
