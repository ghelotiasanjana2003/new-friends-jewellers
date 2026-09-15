import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-burgundy text-ivory hover:bg-[#531922] border border-burgundy hover:shadow-[0_8px_24px_rgba(100,31,42,0.18)]",
  secondary:
    "bg-transparent text-ivory border border-ivory/70 hover:bg-ivory hover:text-ink",
  ghost:
    "bg-transparent text-text border border-gold/60 hover:border-gold hover:bg-gold/10",
  light:
    "bg-ivory text-burgundy border border-ivory hover:bg-cream",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonLinkProps) {
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 text-[13px] tracking-[0.14em] uppercase transition-colors duration-300 min-h-12 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
