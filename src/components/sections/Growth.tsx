import Image from "next/image";
import CourseCard from "@/components/ui/CourseCard";
import { ProgressCard } from "@/components/ui/InfoCards";
import { Ornament, Place, Stage } from "@/components/ui/Stage";
import { courses, stats } from "@/lib/data";

// Figma "Frame 11" (621 x 552)
const ART = { width: 621, height: 552 };

export default function Growth() {
  return (
    <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-[574px_1fr] lg:gap-[63px] lg:pl-px">
      <div>
        <h2 className="text-3xl leading-[1.2] font-semibold text-ink md:text-[44px]">
          Your Path to Professional Growth Starts Here!
        </h2>
        <p className="mt-10 max-w-[477px] text-base leading-[1.6] text-body md:text-lg">
          Explore our curated selection of courses tailored to enhance your capabilities and
          accelerate your career journey. Whether you are looking to sharpen specific skills, gain
          industry expertise, or embark on a new career path entirely, we have the resources you
          need.
        </p>
        <dl className="mt-10 flex gap-14">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse">
              <dt className="text-base leading-[29px] text-body md:text-lg">{s.label}</dt>
              <dd className="font-heading text-3xl leading-[44px] font-medium text-brand md:text-4xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <Stage
        size={ART}
        className="relative mx-auto w-full max-w-[621px] lg:mx-0 xl:w-[621px] xl:max-w-none"
      >
        <Place stage={ART} x={0} y={0}>
          <CourseCard course={courses[0]} className="w-[23.3125em]" />
        </Place>
        {/* Export includes the drop shadow around the 577x540 photo */}
        <Place stage={ART} x={-21} y={9} w={721} h={688}>
          <Image
            src="/images/growth-student.webp"
            alt="Student learning online with a laptop"
            fill
            sizes="(min-width: 1024px) 721px, 100vw"
            className="object-contain"
          />
        </Place>
        <Place stage={ART} x={345} y={213} className="animate-float">
          <ProgressCard roomy />
        </Place>
        <Ornament
          stage={ART}
          src="/images/shapes/growth-squiggle-lime.webp"
          x={406}
          y={67}
          size={215}
        />
      </Stage>
    </div>
  );
}
