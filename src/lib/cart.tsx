"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProductById, type Product } from "@/data/products";

const STORAGE_KEY = "nfj-cart";
const ORDER_KEY = "nfj-last-order";

export type CartLine = {
  productId: string;
  quantity: number;
};

export type PaymentMethod = "upi" | "cod" | "pickup";

export type PlacedOrder = {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  address: string;
  payment: PaymentMethod;
  items: { productId: string; name: string; quantity: number; price: number }[];
  total: number;
};

type CartContextValue = {
  lines: CartLine[];
  items: { product: Product; quantity: number }[];
  count: number;
  subtotal: number;
  add: (productId: string, quantity?: number) => void;
  setQuantity: (productId: string, quantity: number) => void;
  remove: (productId: string) => void;
  clear: () => void;
  placeOrder: (details: Omit<PlacedOrder, "id" | "createdAt" | "items" | "total">) => PlacedOrder;
};

const CartContext = createContext<CartContextValue | null>(null);

function loadLines(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartLine[];
    return Array.isArray(parsed) ? parsed.filter((line) => line.productId && line.quantity > 0) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLines(loadLines());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, ready]);

  const add = useCallback((productId: string, quantity = 1) => {
    setLines((current) => {
      const existing = current.find((line) => line.productId === productId);
      if (existing) {
        return current.map((line) =>
          line.productId === productId ? { ...line, quantity: line.quantity + quantity } : line,
        );
      }
      return [...current, { productId, quantity }];
    });
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    setLines((current) => {
      if (quantity <= 0) return current.filter((line) => line.productId !== productId);
      return current.map((line) => (line.productId === productId ? { ...line, quantity } : line));
    });
  }, []);

  const remove = useCallback((productId: string) => {
    setLines((current) => current.filter((line) => line.productId !== productId));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const items = useMemo(
    () =>
      lines
        .map((line) => {
          const product = getProductById(line.productId);
          if (!product) return null;
          return { product, quantity: line.quantity };
        })
        .filter((item): item is { product: Product; quantity: number } => Boolean(item)),
    [lines],
  );

  const count = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);
  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [items],
  );

  const placeOrder = useCallback(
    (details: Omit<PlacedOrder, "id" | "createdAt" | "items" | "total">) => {
      const order: PlacedOrder = {
        ...details,
        id: `NFJ-${Date.now().toString(36).toUpperCase()}`,
        createdAt: new Date().toISOString(),
        items: items.map((item) => ({
          productId: item.product.id,
          name: item.product.name,
          quantity: item.quantity,
          price: item.product.price,
        })),
        total: subtotal,
      };
      window.sessionStorage.setItem(ORDER_KEY, JSON.stringify(order));
      clear();
      return order;
    },
    [clear, items, subtotal],
  );

  const value = useMemo(
    () => ({ lines, items, count, subtotal, add, setQuantity, remove, clear, placeOrder }),
    [lines, items, count, subtotal, add, setQuantity, remove, clear, placeOrder],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}

export function readLastOrder(): PlacedOrder | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(ORDER_KEY);
    return raw ? (JSON.parse(raw) as PlacedOrder) : null;
  } catch {
    return null;
  }
}

export function orderWhatsAppMessage(order: PlacedOrder) {
  const lines = order.items.map(
    (item) => `• ${item.name} × ${item.quantity} — ₹${item.price.toLocaleString("en-IN")}`,
  );
  const paymentLabel =
    order.payment === "upi" ? "UPI" : order.payment === "cod" ? "Cash on delivery" : "Showroom pickup";
  return [
    `Hello New Friends Jewellers, I would like to confirm order ${order.id}.`,
    `Name: ${order.name}`,
    `Phone: ${order.phone}`,
    `Payment: ${paymentLabel}`,
    order.address ? `Address: ${order.address}` : "",
    "Items:",
    ...lines,
    `Total: ₹${order.total.toLocaleString("en-IN")}`,
  ]
    .filter(Boolean)
    .join("\n");
}
