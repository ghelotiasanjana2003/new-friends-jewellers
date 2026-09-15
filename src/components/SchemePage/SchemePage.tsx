"use client";

import { useState } from "react";
import {
    ArrowDown,
    ArrowRight,
    Check,
    ChevronDown,
    Gem,
    Heart,
    MessageCircle,
    PiggyBank,
    ShieldCheck,
    Sparkles,
    WalletCards,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const schemes = [
    {
        tag: "POPULAR",
        title: "11 + 1 Scheme",
        description:
            "Save for 11 months and get 1 month's contribution free from our side.",
        image:
            "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=85",
        features: [
            "Ideal for wedding purchases",
            "Disciplined monthly savings",
            "Wide range of jewellery options",
        ],
        button: "KNOW MORE",
    },
    {
        tag: "FLEXIBLE",
        title: "6 – 24 Months Scheme",
        description:
            "Choose a tenure from 6 to 24 months & save at your own pace.",
        image:
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85",
        features: [
            "Multiple tenure options",
            "Flexible monthly amounts",
            "Perfect for any occasion",
        ],
        button: "VIEW DETAILS",
    },
    {
        tag: "CUSTOM",
        title: "Custom Scheme",
        description:
            "Looking for something different? We can create a plan for you.",
        image:
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85",
        features: [
            "Personalized savings plan",
            "Suitable for large purchases",
            "Guidance from our experts",
        ],
        button: "TALK TO US",
    },
];

const steps = [
    {
        number: "01",
        title: "Choose a Scheme",
        description: "Select the plan that suits you best.",
        icon: WalletCards,
    },
    {
        number: "02",
        title: "Save Monthly",
        description: "Make easy monthly contributions.",
        icon: PiggyBank,
    },
    {
        number: "03",
        title: "Complete the Plan",
        description: "Enjoy the benefits as per the scheme.",
        icon: Sparkles,
    },
    {
        number: "04",
        title: "Redeem & Shine",
        description: "Take home your favourite jewellery.",
        icon: Heart,
    },
];

const faqs = [
    {
        question: "Who can join the gold scheme?",
        answer:
            "Our gold savings schemes are designed for customers planning a future jewellery purchase. Speak with our team to understand which scheme is suitable for you.",
    },
    {
        question: "Can I choose any jewellery at the time of redemption?",
        answer:
            "Yes. At the time of redemption, our team will help you select jewellery from the available collection according to the terms of your chosen scheme.",
    },
    {
        question: "What happens if I miss a monthly payment?",
        answer:
            "The terms for missed payments can vary depending on the scheme. Our showroom team will explain the applicable terms before you enrol.",
    },
    {
        question: "Can I close the scheme early?",
        answer:
            "Early closure depends on the specific scheme selected. Please contact our jewellers for the applicable terms and conditions.",
    },
];

function SchemeCard({
    scheme,
    index,
}: {
    scheme: (typeof schemes)[number];
    index: number;
}) {
    return (
        <Reveal delay={index * 0.08}>
            <div className="group grid overflow-hidden rounded-xl border border-[#ded4c5] bg-[#fcf9f3] shadow-[0_8px_35px_rgba(54,37,25,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(54,37,25,0.12)] sm:grid-cols-[180px_1fr] lg:grid-cols-[175px_1fr]">
                {/* Image */}
                <div className="relative min-h-[250px] overflow-hidden sm:min-h-full">
                    <img
                        src={scheme.image}
                        alt={scheme.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col p-6 lg:p-7">
                    <span className="mb-4 w-fit rounded-full bg-[#eee1d6] px-3 py-1 text-[9px] font-medium tracking-[0.2em] text-[#762733]">
                        {scheme.tag}
                    </span>

                    <h3 className="font-serif text-[25px] leading-tight text-[#302521]">
                        {scheme.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-6 text-[#6e625b]">
                        {scheme.description}
                    </p>

                    <div className="my-5 h-px bg-[#e5dbcf]" />

                    <ul className="space-y-3">
                        {scheme.features.map((feature) => (
                            <li
                                key={feature}
                                className="flex items-start gap-2 text-[12px] text-[#5e554f]"
                            >
                                <span className="mt-[2px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#eee6d8] text-[#9a7135]">
                                    <Check size={10} strokeWidth={2.5} />
                                </span>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="/contact"
                        className="mt-6 inline-flex w-fit items-center gap-3 rounded-md bg-[#742431] px-5 py-3 text-[10px] font-medium tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#5c1c26] hover:gap-4"
                    >
                        {scheme.button}
                        <ArrowRight size={14} />
                    </Link>
                </div>
            </div>
        </Reveal>
    );
}

export function SchemePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <main className="overflow-hidden bg-[#f8f4ec] text-[#302521]">


            {/* =========================================================
                BENEFITS STRIP
            ========================================================= */}
            <section className="border-b border-[#e6dccd] bg-[#f5eee3]">
                <div className="mx-auto grid max-w-7xl md:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            icon: Gem,
                            title: "Secure Your Future",
                            text: "Save with confidence",
                        },
                        {
                            icon: PiggyBank,
                            title: "Flexible Plans",
                            text: "Choose what suits you",
                        },
                        {
                            icon: ShieldCheck,
                            title: "Trusted by Families",
                            text: "For generations",
                        },
                        {
                            icon: Heart,
                            title: "Jewellery for Every Occasion",
                            text: "Weddings, festivals & more",
                        },
                    ].map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className={`flex items-center gap-4 px-6 py-7 lg:px-7 ${index !== 0
                                        ? "border-t border-[#dfd4c4] md:border-l md:border-t-0"
                                        : ""
                                    }`}
                            >
                                <Icon
                                    size={31}
                                    strokeWidth={1.25}
                                    className="shrink-0 text-[#a77b3b]"
                                />

                                <div>
                                    <h3 className="font-serif text-[17px] text-[#40352e]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-1 text-[11px] text-[#83766c]">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* =========================================================
                SCHEMES
            ========================================================= */}
            <section
                id="schemes"
                className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 lg:py-24"
            >
                <Reveal>
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-[10px] font-medium tracking-[0.28em] text-[#a47738]">
                            OUR GOLD SCHEMES
                        </p>

                        <h2 className="mt-3 font-serif text-4xl leading-tight text-[#302521] sm:text-5xl">
                            Choose a Plan That Suits You
                        </h2>

                        <p className="mt-3 text-sm text-[#756960]">
                            Designed to make your jewellery dreams more
                            accessible.
                        </p>
                    </div>
                </Reveal>

                <div className="mt-12 grid gap-8 lg:grid-cols-2">
                    {schemes.map((scheme, index) => (
                        <SchemeCard
                            key={scheme.title}
                            scheme={scheme}
                            index={index}
                        />
                    ))}
                </div>
            </section>

            {/* =========================================================
                HOW IT WORKS
            ========================================================= */}
            <section className="border-y border-[#e5dbcd] bg-[#f5eee3]">
                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
                    <Reveal>
                        <div className="text-center">
                            <p className="text-[10px] font-medium tracking-[0.28em] text-[#a47738]">
                                HOW IT WORKS
                            </p>

                            <h2 className="mt-3 font-serif text-4xl text-[#302521] sm:text-5xl">
                                Simple Steps to Your Dream Jewellery
                            </h2>
                        </div>
                    </Reveal>

                    <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <Reveal
                                    key={step.number}
                                    delay={index * 0.08}
                                >
                                    <div className="group relative flex items-start gap-5 lg:gap-4">
                                        {/* Icon */}
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#b5894b] text-white shadow-[0_5px_20px_rgba(126,87,39,0.15)] transition-transform duration-300 group-hover:scale-105">
                                            <Icon
                                                size={19}
                                                strokeWidth={1.5}
                                            />
                                        </div>

                                        <div>
                                            <span className="text-[9px] tracking-[0.15em] text-[#a47738]">
                                                {step.number}
                                            </span>

                                            <h3 className="mt-1 font-serif text-lg text-[#39302b]">
                                                {step.title}
                                            </h3>

                                            <p className="mt-1 text-xs leading-5 text-[#766b63]">
                                                {step.description}
                                            </p>
                                        </div>

                                        {/* Arrow */}
                                        {index < steps.length - 1 && (
                                            <ArrowRight
                                                size={17}
                                                className="absolute right-0 top-4 hidden text-[#bd9656] lg:block"
                                            />
                                        )}
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================================
                HELP + FAQ
            ========================================================= */}
            <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
                <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                    {/* Help card */}
                    <Reveal>
                        <div className="relative flex min-h-[370px] flex-col justify-center overflow-hidden rounded-lg bg-[#742431] p-8 sm:p-10">
                            {/* Decorative pattern */}
                            <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle at 1px 1px, #d8ad66 1px, transparent 0)",
                                        backgroundSize: "16px 16px",
                                    }}
                                />
                            </div>

                            <div className="relative">
                                <p className="text-[10px] font-medium tracking-[0.27em] text-[#d4ae70]">
                                    HAVE QUESTIONS?
                                </p>

                                <h2 className="mt-4 max-w-sm font-serif text-4xl leading-tight text-[#fbf5eb]">
                                    We&apos;re Here to Help
                                </h2>

                                <p className="mt-5 max-w-sm text-sm leading-6 text-[#e2cfc7]">
                                    Our team is happy to guide you on choosing
                                    the right gold scheme for your jewellery
                                    plans.
                                </p>

                                <a
                                    href="https://wa.me/910000000000"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-7 inline-flex items-center gap-3 rounded-md bg-[#f8f1e5] px-5 py-3 text-[10px] font-medium tracking-[0.18em] text-[#742431] transition-all duration-300 hover:bg-white hover:gap-4"
                                >
                                    <MessageCircle size={14} />
                                    CHAT ON WHATSAPP
                                    <ArrowRight size={13} />
                                </a>
                            </div>
                        </div>
                    </Reveal>

                    {/* FAQ */}
                    <Reveal delay={0.1}>
                        <div className="overflow-hidden rounded-lg border border-[#e0d6c8] bg-[#fcfaf5]">
                            {faqs.map((faq, index) => {
                                const isOpen = openFaq === index;

                                return (
                                    <div
                                        key={faq.question}
                                        className="border-b border-[#e5ddd1] last:border-b-0"
                                    >
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenFaq(
                                                    isOpen ? null : index
                                                )
                                            }
                                            className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left transition-colors duration-300 hover:bg-[#f7f0e6] sm:px-7"
                                        >
                                            <span className="font-serif text-[16px] text-[#39302b]">
                                                {faq.question}
                                            </span>

                                            <ChevronDown
                                                size={17}
                                                className={`shrink-0 text-[#92703d] transition-transform duration-300 ${isOpen
                                                        ? "rotate-180"
                                                        : ""
                                                    }`}
                                            />
                                        </button>

                                        <div
                                            className={`grid transition-all duration-300 ${isOpen
                                                    ? "grid-rows-[1fr]"
                                                    : "grid-rows-[0fr]"
                                                }`}
                                        >
                                            <div className="overflow-hidden">
                                                <p className="px-6 pb-5 text-sm leading-6 text-[#746a62] sm:px-7">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* =========================================================
                FINAL CTA
            ========================================================= */}
            <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-24">
                <Reveal>
                    <div className="relative min-h-[300px] overflow-hidden rounded-lg bg-[#eee5d6]">
                        {/* Background image */}
                        <img
                            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=85"
                            alt="Jewellery gift"
                            className="absolute inset-0 h-full w-full object-cover opacity-35"
                        />

                        <div className="absolute inset-0 bg-[#eee5d6]/70" />

                        <div className="relative flex min-h-[300px] items-center justify-between gap-10 px-8 py-12 sm:px-14">
                            <div>
                                <p className="text-[10px] font-medium tracking-[0.27em] text-[#a47738]">
                                    NEW FRIENDS JEWELLERS
                                </p>

                                <h2 className="mt-4 max-w-md font-serif text-4xl leading-tight text-[#302521] sm:text-5xl">
                                    Small Savings for Life&apos;s Big Moments
                                </h2>

                                <div className="mt-6 h-px w-10 bg-[#a47738]" />
                            </div>

                            <Link
                                href="#schemes"
                                className="group hidden shrink-0 items-center gap-3 border-b border-[#7a2935] pb-2 text-[10px] font-medium tracking-[0.2em] text-[#742431] transition-all duration-300 hover:gap-5 sm:flex"
                            >
                                EXPLORE SCHEMES
                                <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* =========================================================
                MOBILE CTA
            ========================================================= */}
            <div className="fixed bottom-5 left-5 right-5 z-40 sm:hidden">
                <a
                    href="https://wa.me/910000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 rounded-full bg-[#742431] px-5 py-4 text-xs font-medium tracking-[0.15em] text-white shadow-xl"
                >
                    <MessageCircle size={17} />
                    CHAT WITH OUR JEWELLERS
                </a>
            </div>
        </main>
    );
}