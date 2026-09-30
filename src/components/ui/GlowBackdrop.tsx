/*
 * Soft radial glows behind the light #fafafa sections, recreated from the
 * Figma ellipses (radial gradient, stops 100% / 23% / 6% / 0%, layer blur).
 * x is relative to the 1440px frame; y and size are in px from the section top.
 */

export type Glow = {
  x: number;
  y: number;
  size: number;
  color: "lime" | "blue";
  opacity: number;
};

const rgb = { lime: "203 252 1", blue: "0 59 226" };

export default function GlowBackdrop({ glows }: { glows: Glow[] }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-canvas">
      {glows.map((g, i) => {
        const c = rgb[g.color];
        const a = (stop: number) => `rgb(${c} / ${(g.opacity * stop).toFixed(3)})`;
        return (
          <div
            key={i}
            className="absolute rounded-full blur-[20px]"
            style={{
              left: `${(g.x / 1440) * 100}%`,
              top: g.y,
              width: g.size,
              height: g.size,
              background: `radial-gradient(closest-side, ${a(1)} 0%, ${a(0.23)} 53%, ${a(0.06)} 75%, transparent 100%)`,
            }}
          />
        );
      })}
    </div>
  );
}
