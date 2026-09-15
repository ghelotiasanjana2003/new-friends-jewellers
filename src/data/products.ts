import { images } from "./images";

export type ProductCategory = "Gold" | "Silver";
export type ProductType =
  | "Necklace"
  | "Earrings"
  | "Bangles"
  | "Bracelet"
  | "Anklets"
  | "Ring";
export type Occasion = "Wedding" | "Festive" | "Everyday Elegance" | "Gifting";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  type: ProductType;
  image: string;
  gallery: string[];
  description: string;
  featured: boolean;
  occasion: Occasion;
  price: number;
  makingNote: string;
};

export const products: Product[] = [
  {
    id: "gold-kundan-necklace",
    name: "Royal Kundan Necklace",
    category: "Gold",
    type: "Necklace",
    image: images.gold.kundan,
    gallery: [images.gold.kundan, images.gold.lakshmi, images.gold.choker],
    description:
      "An elegant traditional design inspired by Himalayan craftsmanship, composed to honour bridal splendour and ceremonial gatherings.",
    featured: true,
    occasion: "Wedding",
    price: 186500,
    makingNote: "Making charges extra as per design. Gold rate as on the day of billing.",
  },
  {
    id: "heritage-gold-jhumka",
    name: "Heritage Gold Jhumka",
    category: "Gold",
    type: "Earrings",
    image: images.gold.jhumka,
    gallery: [images.gold.jhumka, images.gold.temple],
    description:
      "A classic jhumka silhouette with refined detailing, made to complement festive attire and heirloom jewellery sets.",
    featured: true,
    occasion: "Festive",
    price: 62400,
    makingNote: "Hallmarked 22K gold. Making charges extra as per design.",
  },
  {
    id: "lakshmi-gold-necklace",
    name: "Lakshmi Gold Necklace",
    category: "Gold",
    type: "Necklace",
    image: images.gold.lakshmi,
    gallery: [images.gold.lakshmi, images.gold.kundan],
    description:
      "A graceful necklace designed for auspicious occasions, balancing traditional motifs with a contemporary drape.",
    featured: true,
    occasion: "Wedding",
    price: 214000,
    makingNote: "Making charges extra as per design. Gold rate as on the day of billing.",
  },
  {
    id: "traditional-gold-bangles",
    name: "Traditional Gold Bangles",
    category: "Gold",
    type: "Bangles",
    image: images.gold.bangles,
    gallery: [images.gold.bangles, images.gold.chain],
    description:
      "A set of finely finished gold bangles, intended to be worn together for weddings, festivals, and everyday luxury.",
    featured: true,
    occasion: "Festive",
    price: 97800,
    makingNote: "Pair pricing. Hallmarked gold. Making charges extra.",
  },
  {
    id: "ladakh-gold-choker",
    name: "Ladakh Gold Choker",
    category: "Gold",
    type: "Necklace",
    image: images.gold.choker,
    gallery: [images.gold.choker, images.gold.kundan],
    description:
      "A close-set choker with a warm, editorial presence, suited to bridal portraits and evening celebrations in Leh.",
    featured: false,
    occasion: "Wedding",
    price: 142500,
    makingNote: "Making charges extra as per design. Gold rate as on the day of billing.",
  },
  {
    id: "temple-gold-earrings",
    name: "Temple Gold Earrings",
    category: "Gold",
    type: "Earrings",
    image: images.gold.temple,
    gallery: [images.gold.temple, images.gold.jhumka],
    description:
      "Temple-inspired earrings with sculpted forms, created for festive puja, family gatherings, and ceremonial wear.",
    featured: false,
    occasion: "Festive",
    price: 54800,
    makingNote: "Hallmarked 22K gold. Making charges extra as per design.",
  },
  {
    id: "everyday-gold-chain",
    name: "Everyday Gold Chain",
    category: "Gold",
    type: "Necklace",
    image: images.gold.chain,
    gallery: [images.gold.chain, images.gold.bangles],
    description:
      "A quietly luxurious chain designed for daily wear, with a refined finish that sits comfortably against the skin.",
    featured: false,
    occasion: "Everyday Elegance",
    price: 41200,
    makingNote: "Weight-based billing. Making charges extra.",
  },
  {
    id: "gift-gold-ring",
    name: "Signature Gold Ring",
    category: "Gold",
    type: "Ring",
    image: images.gold.ring,
    gallery: [images.gold.ring, images.gold.chain],
    description:
      "A thoughtful gold ring with a clean, lasting profile, chosen as a gift that marks a personal milestone.",
    featured: false,
    occasion: "Gifting",
    price: 28600,
    makingNote: "Hallmarked gold. Size can be adjusted in the Leh showroom.",
  },
  {
    id: "himalayan-silver-necklace",
    name: "Himalayan Silver Necklace",
    category: "Silver",
    type: "Necklace",
    image: images.silver.necklace,
    gallery: [images.silver.necklace, images.silver.choker],
    description:
      "A statement silver necklace drawing on Himalayan ornament, designed to feel both heritage-rich and contemporary.",
    featured: true,
    occasion: "Festive",
    price: 12800,
    makingNote: "925 silver. Making charges extra as per design.",
  },
  {
    id: "silver-oxidised-jhumkas",
    name: "Silver Oxidised Jhumkas",
    category: "Silver",
    type: "Earrings",
    image: images.silver.jhumkas,
    gallery: [images.silver.jhumkas, images.silver.hoops],
    description:
      "Oxidised silver jhumkas with a soft antique character, pairing easily with festive cottons, silks, and evening wear.",
    featured: true,
    occasion: "Festive",
    price: 4200,
    makingNote: "925 silver. Light oxidised finish.",
  },
  {
    id: "classic-silver-bracelet",
    name: "Classic Silver Bracelet",
    category: "Silver",
    type: "Bracelet",
    image: images.silver.bracelet,
    gallery: [images.silver.bracelet, images.silver.pendant],
    description:
      "A refined silver bracelet with a quiet gleam, intended for everyday elegance and considered gifting.",
    featured: true,
    occasion: "Everyday Elegance",
    price: 5600,
    makingNote: "925 silver. Making charges extra.",
  },
  {
    id: "silver-anklets",
    name: "Silver Anklets",
    category: "Silver",
    type: "Anklets",
    image: images.silver.anklets,
    gallery: [images.silver.anklets, images.silver.necklace],
    description:
      "Delicate silver anklets with a traditional cadence, crafted for festive gatherings and bridal trousseau.",
    featured: true,
    occasion: "Wedding",
    price: 6800,
    makingNote: "Pair pricing. 925 silver.",
  },
  {
    id: "leh-silver-choker",
    name: "Leh Silver Choker",
    category: "Silver",
    type: "Necklace",
    image: images.silver.choker,
    gallery: [images.silver.choker, images.silver.necklace],
    description:
      "A sculptural silver choker with a modern silhouette, inspired by the ornamental language of Ladakh.",
    featured: false,
    occasion: "Wedding",
    price: 9400,
    makingNote: "925 silver. Making charges extra as per design.",
  },
  {
    id: "everyday-silver-hoops",
    name: "Everyday Silver Hoops",
    category: "Silver",
    type: "Earrings",
    image: images.silver.hoops,
    gallery: [images.silver.hoops, images.silver.jhumkas],
    description:
      "Clean silver hoops designed for daily luxury, with a weight and finish chosen for comfortable wear.",
    featured: false,
    occasion: "Everyday Elegance",
    price: 3100,
    makingNote: "925 silver. Lightweight everyday wear.",
  },
  {
    id: "festive-silver-bangles",
    name: "Festive Silver Bangles",
    category: "Silver",
    type: "Bangles",
    image: images.silver.bangles,
    gallery: [images.silver.bangles, images.silver.bracelet],
    description:
      "A stack of silver bangles for festive dressing, with a polished presence that catches candlelight.",
    featured: false,
    occasion: "Festive",
    price: 8900,
    makingNote: "Set of four. 925 silver.",
  },
  {
    id: "gift-silver-pendant",
    name: "Silver Gift Pendant",
    category: "Silver",
    type: "Necklace",
    image: images.silver.pendant,
    gallery: [images.silver.pendant, images.silver.bracelet],
    description:
      "A silver pendant intended as a keepsake gift, with a simple form that feels personal and lasting.",
    featured: false,
    occasion: "Gifting",
    price: 3800,
    makingNote: "925 silver. Chain included.",
  },
];

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: ProductCategory) {
  return products.filter((product) => product.category === category);
}

export function getFeaturedProducts() {
  const gold = products.filter((product) => product.featured && product.category === "Gold").slice(0, 2);
  const silver = products.filter((product) => product.featured && product.category === "Silver").slice(0, 2);
  return [...gold, ...silver];
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, limit);
}

export function searchProducts(query: string) {
  const value = query.trim().toLowerCase();
  if (!value) return [];
  return products.filter((product) =>
    [product.name, product.category, product.type, product.occasion]
      .join(" ")
      .toLowerCase()
      .includes(value),
  );
}
