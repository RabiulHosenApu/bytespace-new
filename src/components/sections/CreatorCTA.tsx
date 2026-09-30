import { ButtonLink } from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { Ornament, Stage } from "@/components/ui/Stage";

// Figma "CTA_Frame" (1440 x 488)
const FRAME = { width: 1440, height: 488 };

const ornaments = [
  { src: "cta-squiggle-lime-tl", x: -118, y: -162, size: 385 },
  { src: "cta-squiggle-white-sm", x: 178, y: 5, size: 175 },
  { src: "cta-cone-white", x: -48, y: 225, size: 188 },
  { src: "cta-ring-lime", x: 20, y: 299, size: 342 },
  { src: "cta-pyramid-lime", x: 1080, y: 0, size: 188 },
  { src: "cta-cylinder-white", x: 1226, y: 6, size: 370 },
  { src: "cta-squiggle-lime-br", x: 1110, y: 289, size: 330 },
];

export default function CreatorCTA() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-brand bg-grid px-4 py-20 md:py-[85px]">
      <Stage
        size={FRAME}
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden md:block"
      >
        {ornaments.map((o) => (
          <Ornament key={o.src} stage={FRAME} {...o} src={`/images/shapes/${o.src}.webp`} />
        ))}
      </Stage>

      <div className="mx-auto flex max-w-[964px] flex-col items-center">
        <SectionHeading
          tone="light"
          gapClass="mt-10"
          className="max-w-[964px]"
          title={
            <>
              Unlock Your Potential as a
              <br className="hidden sm:block" /> Creator with ByteSpace
            </>
          }
          description="Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library."
        />
        <ButtonLink href="/signup" className="mt-10">
          Join as Creator
        </ButtonLink>
      </div>
    </section>
  );
}
