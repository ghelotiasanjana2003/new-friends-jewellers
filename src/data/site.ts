export const site = {
  name: "New Friends Jewellers",
  tagline: "Timeless jewellery for timeless moments.",
  location: "Leh, Ladakh",
  locationFull: "Leh, Ladakh, India",
  address:
    "Shop No. F2, Skitchan Ngodup Complex, Near Old Bus Stand, Leh, Ladakh – 194101",
  phoneDisplay: "++1-555-0024",
  phoneHref: "tel:+919928541909",
  whatsappNumber: "919928541909",
  hours: {
    days: "Mon – Sun",
    time: "10:00 AM – 8:00 PM",
  },
  instagramHandle: "@newfriendsjewellers",
  instagramUrl: "https://instagram.com/newfriendsjewellers",
  facebookUrl: "https://facebook.com",
  mapsUrl:
    "https://www.google.com/maps/place/New+Friends+Jewellers/@34.158812,77.585853,16z/data=!4m6!3m5!1s0x38fdeb00779dfc59:0x2743372324e7d9f9!8m2!3d34.1588116!4d77.5858534!16s%2Fg%2F11wfcgnz4r?hl=en&entry=ttu&g_ep=EgoyMDI2MDkxMy4wIKXMDSoASAFQAw%3D%3D",
  mapsEmbed:   "https://www.google.com/maps?q=34.1588116,77.5858534&z=17&output=embed",
  mapsLat: 34.1588116,
  mapsLng: 77.5858534,
  qrImage: "/images/qr.jpg",
  rates: {
    gold22k: 12162,
    gold18k: 9950,
    silver999: 161,
    updatedLabel: "Indicative showroom rates",
  },
} as const;

export function getWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const enquiryMessage =
  "Hello New Friends Jewellers, I would like to enquire about your jewellery collection.";

export function productEnquiryMessage(productName: string) {
  return `Hello New Friends Jewellers, I would like to enquire about ${productName}.`;
}

export function contactEnquiryMessage(name: string, phone: string, message: string) {
  return [
    "Hello New Friends Jewellers, I would like to make an enquiry.",
    name ? `Name: ${name}` : "",
    phone ? `Phone: ${phone}` : "",
    message ? `Message: ${message}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export function schemeEnquiryMessage(planName: string, name: string, phone: string, amount: string) {
  return [
    `Hello New Friends Jewellers, I would like to join the ${planName}.`,
    name ? `Name: ${name}` : "",
    phone ? `Phone: ${phone}` : "",
    amount ? `Monthly amount: ${amount}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}
