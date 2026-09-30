import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

/*
 * Illustrations are laid out in the Figma frame's own pixel coordinates.
 * A Stage keeps the frame's aspect ratio and sets its font-size so that
 * 1em === 16 design pixels at full size; everything inside is sized in
 * % / em, so the whole composition scales down proportionally.
 * The caller positions the stage itself (relative or absolute).
 */

export type StageSize = { width: number; height: number };

type StageProps = {
  size: StageSize;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export function Stage({ size, className = "", style, children }: StageProps) {
  return (
    <div
      className={`@container ${className}`}
      style={{ aspectRatio: `${size.width} / ${size.height}`, ...style }}
    >
      <div className="absolute inset-0" style={{ fontSize: `calc(100cqw * 16 / ${size.width})` }}>
        {children}
      </div>
    </div>
  );
}

type PlaceProps = {
  stage: StageSize;
  /** Position and size in design pixels, relative to the stage. */
  x: number;
  y: number;
  w?: number;
  h?: number;
  className?: string;
  children: ReactNode;
};

export function Place({ stage, x, y, w, h, className = "", children }: PlaceProps) {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        left: `${(x / stage.width) * 100}%`,
        top: `${(y / stage.height) * 100}%`,
        width: w === undefined ? undefined : `${(w / stage.width) * 100}%`,
        height: h === undefined ? undefined : `${(h / stage.height) * 100}%`,
      }}
    >
      {children}
    </div>
  );
}

type OrnamentProps = {
  stage: StageSize;
  src: string;
  x: number;
  y: number;
  size: number;
  className?: string;
};

/** A decorative 3D render exported from Figma, placed on a stage. */
export function Ornament({ stage, src, x, y, size, className = "" }: OrnamentProps) {
  return (
    <Place stage={stage} x={x} y={y} w={size} h={size} className={className}>
      <Image src={src} alt="" fill sizes="400px" className="object-contain" aria-hidden="true" />
    </Place>
  );
}
