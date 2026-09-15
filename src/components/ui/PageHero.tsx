import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image?: string;
};

export function PageHero({
  title,
  subtitle,
  image,
}: PageHeroProps) {
  const hasImage = Boolean(image?.trim());

  return (
    <section className="relative isolate flex min-h-[46vh] items-end overflow-hidden bg-ink pt-28 pb-14 lg:min-h-[54vh] lg:pt-36">
      {/* Background image */}
      {hasImage ? (
        <Image
          src={image!}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      ) : null}

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          hasImage ? "bg-ink/55" : "bg-ink"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-gold">
          New Friends Jewellers
        </p>

        <h1 className="font-serif text-4xl text-ivory sm:text-5xl">
          {title}
        </h1>

        {subtitle ? (
          <p className="mt-4 max-w-xl text-base text-beige">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}