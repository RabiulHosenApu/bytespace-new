import type { ReactNode } from "react";
import CourseCard from "@/components/ui/CourseCard";
import { HappyStudentsCard } from "@/components/ui/InfoCards";
import Logo from "@/components/ui/Logo";
import { Ornament, Place, Stage } from "@/components/ui/Stage";
import { courses } from "@/lib/data";

// Figma "Group 8" illustration on the Login / Register frames (548 x 585)
const ART = { width: 548, height: 585 };

type AuthShellProps = {
  heading: string;
  text: string;
  children: ReactNode;
};

export default function AuthShell({ heading, text, children }: AuthShellProps) {
  return (
    <div className="relative flex min-h-screen flex-1 overflow-hidden bg-brand bg-grid text-surface">
      <div className="mx-auto grid w-full max-w-[1200px] content-start gap-10 px-4 pt-[35px] pb-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,579px)] lg:gap-16 xl:grid-cols-[548px_579px] xl:justify-between xl:gap-0 xl:px-0">
        <div className="relative">
          <Logo tone="light" markOnly />
          <div className="mt-12 max-w-[475px]">
            <h2 className="text-xl leading-[1.2] font-semibold">{heading}</h2>
            <p className="mt-4 text-base leading-[1.6] md:text-lg">{text}</p>
          </div>

          <Stage size={ART} className="absolute top-[270px] left-[-25px] hidden w-[548px] xl:block">
            <Place stage={ART} x={25} y={89}>
              <CourseCard course={courses[1]} starTone="lime" className="w-[23.3125em]" />
            </Place>
            <Place stage={ART} x={136} y={0}>
              <CourseCard course={courses[2]} starTone="lime" className="w-[23.3125em]" />
            </Place>
            <Place stage={ART} x={251} y={435}>
              <HappyStudentsCard tone="lime" />
            </Place>
            <Ornament
              stage={ART}
              src="/images/shapes/auth-squiggle-white.webp"
              x={373}
              y={321}
              size={175}
            />
            <Ornament
              stage={ART}
              src="/images/shapes/auth-ring-lime.webp"
              x={54}
              y={15}
              size={146}
            />
            <Ornament
              stage={ART}
              src="/images/shapes/auth-pyramid-lime.webp"
              x={0}
              y={397}
              size={188}
            />
          </Stage>
        </div>

        <main className="flex w-full flex-col rounded-3xl bg-white px-6 py-10 text-ink sm:px-[63px] sm:pt-[61px] lg:mt-[85px] lg:min-h-[784px]">
          {children}
        </main>
      </div>
    </div>
  );
}
