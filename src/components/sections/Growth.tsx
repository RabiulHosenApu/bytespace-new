import Image from "next/image";
import CourseCard from "@/components/ui/CourseCard";
import { Squiggle } from "@/components/ui/Shapes";
import { courses, stats } from "@/lib/data";

export default function Growth() {
  return (
    <section className="relative mx-auto grid max-w-6xl items-center gap-16 px-4 py-24 lg:grid-cols-2">
      <div>
        <h2 className="text-3xl leading-tight font-semibold md:text-[2.75rem]">
          Your Path to Professional Growth Starts Here!
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted md:text-base">
          Explore our curated selection of courses tailored to enhance your capabilities and
          accelerate your career journey. Whether you are looking to sharpen specific skills, gain
          industry expertise, or embark on a new career path entirely, we have the resources you
          need.
        </p>
        <dl className="mt-10 flex gap-12">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-sm text-muted">{s.label}</dt>
              <dd className="font-heading text-3xl font-semibold text-brand">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative mx-auto h-[420px] w-full max-w-md sm:h-[460px]">
        <div className="absolute top-0 left-0 w-52 sm:w-60">
          <CourseCard course={courses[0]} compact />
        </div>

        <div className="absolute right-4 bottom-0 h-[340px] w-60 overflow-hidden rounded-[2rem] shadow-2xl sm:h-[380px] sm:w-72">
          <Image
            src="/images/hero-student.jpg"
            alt="Student learning online"
            fill
            sizes="288px"
            className="object-cover"
          />
        </div>

        <Squiggle className="absolute top-6 -right-2 w-24 rotate-12" />

        <div className="animate-float absolute right-0 bottom-24 w-40 rounded-xl bg-white p-3 shadow-xl sm:-right-6">
          <p className="text-[11px] font-medium">Learning Progress</p>
          <p className="mt-1 font-heading text-3xl font-semibold">55%</p>
          <div className="mt-2 h-1.5 rounded-full bg-gray-100">
            <div className="h-full w-[55%] rounded-full bg-lime" />
          </div>
        </div>
      </div>
    </section>
  );
}
