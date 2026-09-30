"use client";

import { useState } from "react";
import CourseCard from "@/components/ui/CourseCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { courses, courseTags, type CourseTag } from "@/lib/data";

const COLLAPSED_TAG_COUNT = 14;

export default function Courses() {
  const [active, setActive] = useState<CourseTag>("Featured");
  const [showAllTags, setShowAllTags] = useState(false);

  const visibleTags = showAllTags ? courseTags : courseTags.slice(0, COLLAPSED_TAG_COUNT);
  const filtered = courses.filter((c) => c.tags.includes(active));

  return (
    <section id="courses" className="w-full scroll-mt-8 bg-white px-4 py-20">
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

      <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2.5">
        {visibleTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(tag)}
            aria-pressed={active === tag}
            className={`rounded-full px-4 py-2 text-xs transition-colors md:text-sm ${
              active === tag
                ? "bg-lime font-medium text-ink"
                : "bg-gray-100 text-ink/70 hover:bg-gray-200"
            }`}
          >
            {tag}
          </button>
        ))}
        <button
          onClick={() => setShowAllTags((s) => !s)}
          className="px-2 text-xs font-medium text-brand hover:underline md:text-sm"
        >
          {showAllTags ? "− Less" : "+ More"}
        </button>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mx-auto mt-4 max-w-md rounded-2xl border border-dashed border-gray-200 p-8 text-center text-sm text-muted">
          No <span className="font-medium text-ink">{active}</span> courses yet — new ones are
          added every week.
        </p>
      )}
    </section>
  );
}
