"use client";

import Link from "next/link";
import { useState } from "react";
import CourseCard from "@/components/ui/CourseCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { courses, courseTags, type CourseTag } from "@/lib/data";

const TAG_ROWS = [courseTags.slice(0, 8), courseTags.slice(8, 14), courseTags.slice(14)];

export default function Courses() {
  const [active, setActive] = useState<CourseTag>("Featured");

  const filtered = courses.filter((c) => c.tags.includes(active));

  return (
    <section id="courses" className="w-full scroll-mt-8 bg-white px-4 pt-[72px]">
      <SectionHeading
        title={
          <>
            Discover Your Passion,
            <br />
            Build Your Skills
          </>
        }
        description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
      />

      <div className="mx-auto mt-[42px] flex max-w-[1090px] flex-wrap justify-center gap-x-4 gap-y-[21px]">
        {TAG_ROWS.map((row, r) => (
          // On desktop each row is its own line, matching the Figma wrap; below that the
          // wrapper is `display: contents` so all tags flow in one wrapping list.
          <div key={r} className="contents lg:flex lg:w-full lg:justify-center lg:gap-4">
            {row.map((tag) => (
              <button
                key={tag}
                onClick={() => setActive(tag)}
                aria-pressed={active === tag}
                className={`rounded-full px-4 py-3 text-sm leading-[1.2] font-medium transition-colors md:text-base ${
                  active === tag ? "bg-lime text-ink" : "bg-surface text-body hover:bg-line/60"
                }`}
              >
                {tag}
              </button>
            ))}
            {r === TAG_ROWS.length - 1 && (
              <Link
                href="/#categories"
                className="self-center text-sm font-medium text-brand hover:underline md:text-base"
              >
                + More
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="mx-auto mt-[77px] grid max-w-[1199px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mx-auto mt-4 max-w-md rounded-2xl border border-dashed border-line p-8 text-center text-sm text-muted">
          No <span className="font-medium text-ink">{active}</span> courses yet — new ones are added
          every week.
        </p>
      )}
    </section>
  );
}
