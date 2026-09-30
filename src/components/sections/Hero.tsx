import Image from "next/image";
import { Search } from "lucide-react";
import AvatarStack from "@/components/ui/AvatarStack";
import { Button } from "@/components/ui/Button";
import { Cone, Cylinder, Ring, Squiggle } from "@/components/ui/Shapes";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-brand bg-grid text-white">
      {/* Decorative shapes */}
      <Squiggle className="absolute top-40 -left-6 hidden w-36 -rotate-12 md:block lg:w-48" />
      <Cylinder className="absolute top-36 -right-4 hidden w-28 rotate-[25deg] md:block lg:w-36" />
      <Squiggle color="white" className="absolute top-[26rem] left-[14%] hidden w-16 rotate-12 lg:block" />
      <Cone className="absolute top-[24rem] right-[18%] hidden w-16 rotate-12 lg:block" />
      <Ring className="absolute bottom-10 left-[4%] hidden w-28 md:block lg:w-36" />
      <Squiggle color="white" className="absolute right-[6%] bottom-16 hidden w-20 -rotate-12 md:block" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pt-36 text-center md:pt-40">
        <h1 className="max-w-3xl text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mt-5 max-w-xl text-sm text-white/80 md:text-base">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide
          range of courses.
        </p>

        <form
          action="/#courses"
          role="search"
          className="mt-8 flex w-full max-w-md items-center gap-2"
        >
          <label className="flex flex-1 items-center gap-2 rounded-full bg-white px-4 py-2.5 text-ink">
            <Search className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
            <span className="sr-only">Search courses</span>
            <input
              type="search"
              name="q"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
            />
          </label>
          <Button type="submit">Search</Button>
        </form>

        {/* Illustration */}
        <div className="relative mt-12 h-[340px] w-full max-w-3xl sm:h-[420px]">
          <div className="absolute bottom-0 left-1/2 aspect-square w-[640px] max-w-[150%] -translate-x-1/2 translate-y-1/2 rounded-full bg-lime" />

          <div className="absolute bottom-0 left-1/2 h-full w-60 -translate-x-1/2 overflow-hidden rounded-t-full sm:w-72">
            <Image
              src="/images/hero-student.jpg"
              alt="Smiling student ready to learn"
              fill
              preload
              sizes="(min-width: 640px) 288px, 240px"
              className="object-cover object-top"
            />
          </div>

          <div className="animate-float absolute top-8 left-0 rounded-xl bg-white px-4 py-3 text-left text-ink shadow-xl sm:left-6">
            <p className="text-sm font-semibold">UI/UX Design</p>
            <p className="mt-0.5 text-[11px] text-muted">200 Courses • 1000+ Students</p>
          </div>

          <div className="animate-float absolute top-16 right-0 w-36 rounded-xl bg-white p-3 text-left text-ink shadow-xl [animation-delay:1.5s] sm:right-6 sm:w-44">
            <p className="text-[11px] font-medium">Learning Progress</p>
            <p className="mt-1 font-heading text-3xl font-semibold">55%</p>
            <div className="mt-2 h-1.5 rounded-full bg-gray-100">
              <div className="h-full w-[55%] rounded-full bg-lime" />
            </div>
          </div>

          <div className="animate-float absolute bottom-10 left-0 hidden rounded-xl bg-white p-3 text-left text-ink shadow-xl [animation-delay:3s] sm:left-10 sm:block">
            <p className="text-sm font-semibold">Happy Students</p>
            <p className="mb-2 text-[11px] text-muted">4.8 ★★★★★</p>
            <AvatarStack count={5} extra="2K+" size="md" />
          </div>
        </div>
      </div>
    </section>
  );
}
