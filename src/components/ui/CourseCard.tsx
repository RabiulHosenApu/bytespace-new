import Image from "next/image";
import { BarChart3, Star } from "lucide-react";
import AvatarStack from "@/components/ui/AvatarStack";
import type { Course } from "@/lib/data";

type CourseCardProps = {
  course: Course;
  /** Compact variant used as a floating card on top of photos. */
  compact?: boolean;
};

export default function CourseCard({ course, compact = false }: CourseCardProps) {
  const badges = [`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`];

  return (
    <article className="group rounded-2xl border border-gray-100 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className={`relative overflow-hidden rounded-xl ${compact ? "h-28" : "h-44"}`}>
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <ul className="absolute inset-x-2 bottom-2 flex flex-wrap gap-1.5">
          {badges.map((b) => (
            <li
              key={b}
              className="rounded-full bg-white/25 px-2 py-0.5 text-[10px] text-white backdrop-blur-md"
            >
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="px-1 pt-3 pb-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate text-base font-semibold" title={course.title}>
            {course.title}
          </h3>
          <span className="flex shrink-0 items-center gap-1 text-sm text-muted">
            {course.rating}
            <Star className="h-3.5 w-3.5 fill-gray-300 text-gray-300" aria-hidden="true" />
          </span>
        </div>
        <p className="text-xs text-brand">by {course.author}</p>

        {!compact && (
          <div className="mt-4 flex items-center justify-between">
            <span className="flex items-center gap-1.5 rounded-full border border-gray-200 px-2.5 py-1 text-xs text-muted">
              <BarChart3 className="h-3.5 w-3.5" aria-hidden="true" />
              {course.level}
            </span>
            <AvatarStack count={3} extra={`${course.enrolled}+`} />
          </div>
        )}

        <p className="mt-4 font-heading text-lg font-semibold text-brand">
          ${course.price}
          <span className="ml-0.5 text-xs font-normal text-muted">/lifetime</span>
        </p>
      </div>
    </article>
  );
}
