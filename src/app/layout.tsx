import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/layout/Providers";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { site } from "@/data/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "New Friends Jewellers | Gold & Silver Jewellery in Leh, Ladakh",
    template: "%s | New Friends Jewellers",
  },
  description:
    "Discover exquisite gold and silver jewellery from New Friends Jewellers in Leh, Ladakh, crafted for weddings, festivals, gifting, and everyday luxury.",
  metadataBase: new URL("https://newfriendsjewellers.demo"),
  icons: {
    icon: [{ url: "/images/favicon.jpeg", type: "image/jpeg" }],
    apple: "/images/favicon.jpeg",
  },
  openGraph: {
    title: "New Friends Jewellers | Gold & Silver Jewellery in Leh, Ladakh",
    description:
      "Premium gold and silver jewellery from our Leh, Ladakh showroom, crafted for life's most precious moments.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-text font-sans">
        <Providers>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
        <span className="sr-only">{site.name}</span>
      </body>
    </html>
  );
}
