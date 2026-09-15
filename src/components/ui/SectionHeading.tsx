type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      {eyebrow ? (
        <p
          className={`mb-3 text-[11px] font-medium tracking-[0.28em] uppercase ${
            light ? "text-gold" : "text-gold"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-serif text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-ivory" : "text-text"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-beige" : "text-muted"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
