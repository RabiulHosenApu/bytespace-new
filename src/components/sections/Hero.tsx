import Image from "next/image";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HappyStudentsCard, ProgressCard, TopicCard } from "@/components/ui/InfoCards";
import { Ornament, Place, Stage } from "@/components/ui/Stage";

// Coordinates below are taken from the Figma "Hero_Frame" (1440 x 1024).
const FRAME = { width: 1440, height: 1024 };
const ART = { width: 1149, height: 512 }; // ring + student + floating cards

const ornaments = [
  { src: "hero-squiggle-lime", x: -118, y: 221, size: 385 },
  { src: "hero-cylinder-lime", x: 1231, y: 221, size: 370 },
  { src: "hero-squiggle-white-sm", x: 183, y: 477, size: 175 },
  { src: "hero-pyramid-white", x: 1106, y: 464, size: 188 },
  { src: "hero-ring-white", x: 18, y: 682, size: 342 },
  { src: "hero-squiggle-white", x: 1127, y: 672, size: 330 },
];

export default function Hero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-brand bg-grid text-surface">
      <Stage
        size={FRAME}
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden md:block"
      >
        {ornaments.map((o) => (
          <Ornament key={o.src} stage={FRAME} {...o} src={`/images/shapes/${o.src}.webp`} />
        ))}
      </Stage>

      <div className="mx-auto flex max-w-[1200px] flex-col items-center px-4 pt-32 text-center md:pt-[169px]">
        <h1 className="max-w-[935px] text-[40px] leading-[1.2] font-semibold tracking-[-0.01em] sm:text-6xl md:text-[72px]">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mt-8 max-w-[935px] text-base leading-[1.6] text-[#e5e6e8] md:text-lg">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide
          range of courses.
        </p>

        <form
          action="/#courses"
          role="search"
          className="mt-[60px] flex w-full max-w-[581px] gap-4"
        >
          <label className="flex h-[52px] flex-1 items-center gap-2 rounded-full bg-white px-6 text-ink">
            <Search className="h-6 w-6 shrink-0 text-muted" aria-hidden="true" />
            <span className="sr-only">Search courses</span>
            <input
              type="search"
              name="q"
              placeholder="Course, topic, creator"
              className="w-full min-w-0 bg-transparent text-lg outline-none placeholder:text-muted"
            />
          </label>
          <Button type="submit" className="h-[52px]">
            Search
          </Button>
        </form>
      </div>

      {/* Illustration: scales proportionally; kept legible on phones by a min width. */}
      <div className="relative mx-auto mt-10 w-full max-w-[1149px] md:mt-0">
        <Stage size={ART} className="relative left-1/2 w-full min-w-[620px] -translate-x-1/2">
          <div
            aria-hidden="true"
            className="absolute top-[13.7%] left-0 aspect-square w-full rounded-full"
            style={{
              background:
                "radial-gradient(circle closest-side, transparent 44.3%, var(--color-lime-bright) 44.3%)",
            }}
          />
          {/* Export includes the drop shadow: 21px left / 3px top padding around the 578x541 photo */}
          <Place stage={ART} x={265} y={-3} w={722} h={689}>
            <Image
              src="/images/student.webp"
              alt="Smiling student with headphones holding a laptop"
              fill
              preload
              sizes="(min-width: 1149px) 722px, 60vw"
              className="object-contain object-bottom"
            />
          </Place>
          <Place stage={ART} x={259} y={127} className="animate-float max-sm:hidden">
            <TopicCard />
          </Place>
          <Place stage={ART} x={697} y={139} className="animate-float [animation-delay:1.5s]">
            <ProgressCard />
          </Place>
          <Place
            stage={ART}
            x={183}
            y={325}
            className="animate-float [animation-delay:3s] max-sm:hidden"
          >
            <HappyStudentsCard />
          </Place>
        </Stage>
      </div>
    </section>
  );
}
