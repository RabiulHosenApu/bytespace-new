import { useId } from "react";

/*
 * Decorative pseudo-3D shapes used across the blue hero / CTA panels.
 * Pure SVG so they stay crisp at any size and need no image assets.
 */

type ShapeProps = {
  className?: string;
  color?: "lime" | "white";
};

const palette = {
  lime: { light: "#ecff7a", base: "#d4ff1a", dark: "#9fc200" },
  white: { light: "#ffffff", base: "#eef1f7", dark: "#b9c2d6" },
};

export function Squiggle({ className = "", color = "lime" }: ShapeProps) {
  const id = useId();
  const c = palette[color];
  const d = "M20 30 L70 12 L40 50 L95 32 L60 72 L115 54 L80 94";
  return (
    <svg viewBox="0 0 135 110" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c.light} />
          <stop offset="0.55" stopColor={c.base} />
          <stop offset="1" stopColor={c.dark} />
        </linearGradient>
      </defs>
      <path d={d} fill="none" stroke={c.dark} strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" transform="translate(3 5)" />
      <path d={d} fill="none" stroke={`url(#${id})`} strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Ring({ className = "", color = "white" }: ShapeProps) {
  const id = useId();
  const c = palette[color];
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c.light} />
          <stop offset="0.6" stopColor={c.base} />
          <stop offset="1" stopColor={c.dark} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="34" fill="none" stroke={`url(#${id})`} strokeWidth="22" />
    </svg>
  );
}

export function Cone({ className = "", color = "white" }: ShapeProps) {
  const id = useId();
  const c = palette[color];
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={c.dark} />
          <stop offset="0.45" stopColor={c.light} />
          <stop offset="1" stopColor={c.base} />
        </linearGradient>
      </defs>
      <path d="M50 6 L92 84 Q50 100 8 84 Z" fill={`url(#${id})`} />
    </svg>
  );
}

export function Cylinder({ className = "", color = "lime" }: ShapeProps) {
  const id = useId();
  const c = palette[color];
  return (
    <svg viewBox="0 0 100 120" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={c.dark} />
          <stop offset="0.4" stopColor={c.light} />
          <stop offset="1" stopColor={c.base} />
        </linearGradient>
      </defs>
      <path d="M10 20 V100 A40 14 0 0 0 90 100 V20 Z" fill={`url(#${id})`} />
      <ellipse cx="50" cy="20" rx="40" ry="14" fill={c.light} />
    </svg>
  );
}
