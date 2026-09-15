import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-28 text-center">
      <p className="text-[11px] tracking-[0.28em] uppercase text-gold">New Friends Jewellers</p>
      <h1 className="mt-4 font-serif text-4xl text-text">Page not found</h1>
      <p className="mt-4 max-w-md text-muted">
        This page is not part of the jewellery collection. Return home to continue exploring.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-12 items-center border border-gold/60 px-6 text-[13px] tracking-[0.14em] uppercase text-text"
      >
        Back to Home
      </Link>
    </section>
  );
}
