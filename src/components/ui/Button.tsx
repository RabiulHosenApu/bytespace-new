import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "lime" | "brand" | "outline";

const variants: Record<Variant, string> = {
  lime: "bg-lime text-ink hover:bg-lime-dark",
  brand: "bg-brand text-white hover:bg-brand-dark",
  outline: "border border-gray-200 bg-white text-ink hover:bg-gray-50",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-60";

type ButtonProps = ComponentProps<"button"> & { variant?: Variant };

export function Button({ variant = "lime", className = "", ...props }: ButtonProps) {
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: Variant };

export function ButtonLink({ variant = "lime", className = "", ...props }: ButtonLinkProps) {
  return <Link className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
