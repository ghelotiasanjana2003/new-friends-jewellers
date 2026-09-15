"use client";

import { FormEvent, useState } from "react";
import { contactEnquiryMessage, getWhatsAppUrl } from "@/data/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const url = getWhatsAppUrl(contactEnquiryMessage(name, phone, message));
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const field =
    "w-full border border-gold/25 bg-ivory px-4 py-3 text-sm text-text outline-none transition-colors focus:border-gold";

  return (
    <form onSubmit={onSubmit} className="border border-gold/20 bg-ivory p-6 sm:p-8">
      <p className="text-[11px] tracking-[0.28em] uppercase text-gold">Enquiries</p>
      <h3 className="mt-3 font-serif text-3xl text-text">Write to Our Jewellers</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Share a few details and we will continue the conversation on WhatsApp.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="block text-[11px] tracking-[0.16em] uppercase text-muted">
          Name
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={`${field} mt-2`}
            autoComplete="name"
          />
        </label>
        <label className="block text-[11px] tracking-[0.16em] uppercase text-muted">
          Phone
          <input
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className={`${field} mt-2`}
            autoComplete="tel"
            inputMode="tel"
          />
        </label>
      </div>
      <label className="mt-4 block text-[11px] tracking-[0.16em] uppercase text-muted">
        Message
        <textarea
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={`${field} mt-2 resize-y`}
          placeholder="Tell us about the piece you have in mind."
        />
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center bg-burgundy px-6 text-[13px] tracking-[0.14em] uppercase text-ivory transition-colors duration-300 hover:bg-[#531922] sm:w-auto"
      >
        Send on WhatsApp
      </button>
    </form>
  );
}
