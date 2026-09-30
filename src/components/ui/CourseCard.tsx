import Image from "next/image";
import { ChartNoAxesColumnIncreasing, Star } from "lucide-react";
import AvatarStack from "@/components/ui/AvatarStack";
import { learnerAvatars, type Course } from "@/lib/data";

type CourseCardProps = {
  course: Course;
  /** Accent set: grey star + lime bubble (landing page) or lime star + dark bubble (auth pages). */
  starTone?: "grey" | "lime";
  className?: string;
};

/** Course card from the Figma "Course_Card_1" component. Sized in em (1em = 16px). */
export default function CourseCard({ course, starTone = "grey", className = "" }: CourseCardProps) {
  const badges = [`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`];

  return (
    <article
      className={`group rounded-[1.5em] border border-line bg-white p-[1em] text-ink transition-shadow hover:shadow-[0_1em_2.5em_rgb(4_8_25/0.1)] ${className}`}
    >
      <div className="relative h-[12.1875em] overflow-hidden rounded-[0.75em] bg-[#443131]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(min-width: 1024px) 341px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <ul className="absolute inset-x-[0.75em] bottom-[0.8125em] flex gap-[0.75em]">
          {badges.map((b) => (
            <li
              key={b}
              className="flex h-[2.667em] items-center rounded-full bg-[#f6f6f6]/70 px-[1em] text-[0.75em] font-medium whitespace-nowrap text-[#4f4f4f] backdrop-blur-sm"
            >
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-[1.3125em] flex items-start justify-between gap-[0.5em]">
        <div className="min-w-0">
          <h3 className="truncate text-[1.25em] leading-[1.2] font-semibold text-black">
            {course.title}
          </h3>
          <p className="text-[0.75em] leading-[1.6] text-[#4f4f4f]">
            by <span className="text-brand">{course.author}</span>
          </p>
        </div>
        <span className="flex shrink-0 items-center gap-[0.125em] text-[#4f4f4f]">
          <span className="text-[1.125em] leading-[1.6]">{course.rating}</span>
          <Star
            className={`h-[1.25em] w-[1.25em] ${
              starTone === "lime" ? "fill-lime text-lime" : "fill-line text-line"
            }`}
            aria-hidden="true"
          />
        </span>
      </div>

      <div className="mt-[1em] flex items-center gap-[0.75em]">
        <span className="flex h-[2em] items-center gap-[0.25em] rounded-full bg-surface px-[0.75em] text-body">
          <ChartNoAxesColumnIncreasing className="h-[1em] w-[1em]" aria-hidden="true" />
          <span className="text-[0.75em] font-medium">{course.level}</span>
        </span>
        <AvatarStack
          avatars={learnerAvatars}
          extra={`${course.enrolled}+`}
          extraTone={starTone === "lime" ? "dark" : "lime"}
        />
      </div>

      <p className="mt-[1em] flex items-baseline">
        <span className="font-heading text-[1.25em] leading-[1.2] font-semibold text-brand">
          ${course.price}
        </span>
        <span className="text-[0.75em] text-[#4f4f4f]">/lifetime</span>
      </p>
    </article>
  );
}
