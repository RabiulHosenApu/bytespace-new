import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import AvatarStack from "@/components/ui/AvatarStack";
import { Squiggle } from "@/components/ui/Shapes";
import { creatorBenefits } from "@/lib/data";

export default function CreateCourses() {
  return (
    <section
      id="creators"
      className="mx-auto grid max-w-6xl scroll-mt-8 items-center gap-16 px-4 py-24 lg:grid-cols-2"
    >
      <div className="relative mx-auto h-[440px] w-full max-w-md">
        <div className="absolute top-0 left-1/2 h-full w-64 -translate-x-1/2 overflow-hidden rounded-[2rem] shadow-2xl sm:w-72">
          <Image
            src="/images/creator-woman.jpg"
            alt="Course creator smiling"
            fill
            sizes="288px"
            className="object-cover"
          />
        </div>

        <Squiggle className="absolute top-16 right-2 w-24 -rotate-6 sm:right-6" />

        <div className="absolute top-8 left-0 w-40 rounded-xl bg-brand p-3 text-white shadow-xl">
          <p className="text-xs text-white/80">Total Revenue</p>
          <p className="text-[10px] text-white/60">July 1–31</p>
          <p className="mt-1 font-heading text-xl font-semibold">$120.29</p>
          <div className="mt-2 h-1 rounded-full bg-white/20">
            <div className="h-full w-2/3 rounded-full bg-lime" />
          </div>
        </div>

        <div className="absolute top-36 left-0 w-40 rounded-xl bg-brand p-3 text-white shadow-xl">
          <p className="text-xs text-white/80">Year to Date</p>
          <p className="text-[10px] text-white/60">2025</p>
          <p className="mt-1 font-heading text-xl font-semibold">$1,200.38</p>
          <span className="mt-2 inline-block rounded-full bg-lime px-2 py-0.5 text-[10px] font-semibold text-ink">
            +12%
          </span>
        </div>

        <div className="animate-float absolute right-0 bottom-8 rounded-xl bg-white p-3 shadow-xl">
          <p className="text-sm font-semibold">Happy Students</p>
          <p className="mb-2 text-[11px] text-muted">4.8 ★★★★★</p>
          <AvatarStack count={5} extra="2K+" size="md" />
        </div>
      </div>

      <div>
        <h2 className="text-3xl leading-tight font-semibold md:text-[2.75rem]">
          Create &amp; Manage
          <br />
          Courses Easily.
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted md:text-base">
          <strong className="font-semibold text-ink">ByteSpace</strong> supports individuals or
          entities in the creation, publication, and administration of educational courses.
        </p>
        <ul className="mt-8 flex flex-col gap-4">
          {creatorBenefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-3 text-sm font-medium">
              <CheckCircle2 className="h-5 w-5 fill-brand text-white" aria-hidden="true" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
