import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  /** "lg" = Heading M (44px), "md" = Heading S (36px) from the style guide. */
  size?: "md" | "lg";
  /** Space between title and description; defaults to 16px. */
  gapClass?: string;
  className?: string;
};

export default function SectionHeading({
  title,
  description,
  tone = "dark",
  size = "lg",
  gapClass = "mt-4",
  className = "",
}: SectionHeadingProps) {
  const light = tone === "light";
  return (
    <div className={`mx-auto max-w-[917px] text-center ${className}`}>
      <h2
        className={`font-semibold ${
          size === "lg"
            ? "text-3xl leading-[1.2] md:text-[44px]"
            : "text-[28px] leading-[1.2] md:text-4xl"
        } ${light ? "text-surface" : "text-heading"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`${gapClass} text-base leading-[1.6] md:text-lg ${light ? "text-surface" : "text-muted"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
