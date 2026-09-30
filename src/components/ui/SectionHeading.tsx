import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  size?: "md" | "lg";
  className?: string;
};

export default function SectionHeading({
  title,
  description,
  tone = "dark",
  size = "lg",
  className = "",
}: SectionHeadingProps) {
  const light = tone === "light";
  return (
    <div
      className={`mx-auto text-center ${size === "lg" ? "max-w-3xl" : "max-w-4xl"} ${className}`}
    >
      <h2
        className={`text-3xl font-semibold leading-tight ${
          size === "lg" ? "md:text-[2.75rem]" : "md:text-4xl"
        } ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm leading-relaxed md:text-base ${
            light ? "text-white/80" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
