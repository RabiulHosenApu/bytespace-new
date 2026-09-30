import CourseCard from "@/components/ui/CourseCard";
import Logo from "@/components/ui/Logo";
import { Cone, Squiggle } from "@/components/ui/Shapes";
import { courses } from "@/lib/data";

export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="relative flex min-h-screen flex-1 overflow-hidden bg-brand bg-grid text-white">
      <div className="relative mx-auto grid w-full max-w-6xl content-start gap-10 px-4 py-8 lg:grid-cols-2 lg:content-center lg:items-center lg:py-12">
        <div className="flex flex-col">
          <Logo tone="light" />

          <div className="mt-8 max-w-md lg:mt-10">
            <h2 className="text-2xl leading-tight font-semibold md:text-3xl">
              Learn, create and grow with ByteSpace
            </h2>
            <p className="mt-3 text-sm text-white/75">
              Join a community of 12K+ students and creators, with hundreds of courses available.
            </p>
          </div>

          {/* Stacked course-card illustration */}
          <div className="relative mt-12 hidden h-[360px] w-full max-w-md lg:block">
            <div className="absolute top-10 left-0 w-56 -rotate-6 opacity-90">
              <CourseCard course={courses[3]} compact />
            </div>
            <div className="absolute top-0 left-24 w-64">
              <CourseCard course={courses[2]} />
            </div>
            <div className="absolute bottom-0 left-52 rounded-xl bg-lime px-4 py-2 font-heading text-ink shadow-xl">
              <p className="text-[11px] font-medium">Lifetime access</p>
              <p className="text-2xl font-semibold">$25.00</p>
            </div>
            <Cone color="lime" className="absolute bottom-2 left-4 w-20 -rotate-12" />
            <Squiggle color="white" className="absolute top-2 -left-4 w-14 rotate-12" />
          </div>
        </div>

        <main className="w-full max-w-md justify-self-center rounded-3xl bg-white p-8 text-ink shadow-2xl sm:p-10 lg:justify-self-end">
          {children}
        </main>
      </div>
    </div>
  );
}
