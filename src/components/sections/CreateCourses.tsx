import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { HappyStudentsCard, RevenueCard } from "@/components/ui/InfoCards";
import { Ornament, Place, Stage } from "@/components/ui/Stage";
import { creatorBenefits } from "@/lib/data";

// Figma "Frame 12" (541 x 596)
const ART = { width: 541, height: 596 };

export default function CreateCourses() {
  return (
    <div
      id="creators"
      className="mx-auto grid w-full max-w-[1200px] scroll-mt-8 items-center gap-12 lg:grid-cols-[541px_1fr] lg:gap-[79px]"
    >
      <Stage size={ART} className="relative order-2 mx-auto w-full max-w-[541px] lg:order-1">
        <Place stage={ART} x={0} y={44} w={232}>
          <RevenueCard
            title="Total Revenue"
            period="July 1-28"
            amount="$120.29"
            variant="progress"
          />
        </Place>
        <Place stage={ART} x={0} y={194} w={134}>
          <RevenueCard title="Year to Date" period="2023" amount="$1,200.38" variant="badge" />
        </Place>
        {/* Export includes the drop shadow around the 435x596 photo */}
        <Place stage={ART} x={7} y={-3} w={579} h={744}>
          <Image
            src="/images/creator.webp"
            alt="Course creator with headphones holding a tablet"
            fill
            sizes="(min-width: 1024px) 579px, 100vw"
            className="object-contain"
          />
        </Place>
        <Place stage={ART} x={283} y={413} className="animate-float">
          <HappyStudentsCard />
        </Place>
        <Ornament
          stage={ART}
          src="/images/shapes/create-squiggle-lime.webp"
          x={305}
          y={114}
          size={215}
        />
      </Stage>

      <div className="order-1 lg:order-2">
        <h2 className="text-3xl leading-[1.2] font-semibold text-ink md:text-[44px]">
          Create &amp; Manage
          <br />
          Courses Easily.
        </h2>
        <p className="mt-10 max-w-[574px] text-base leading-[1.6] text-body md:text-lg">
          <strong className="font-bold text-ink">ByteSpace</strong> supports individuals or entities
          in the creation, publication, and administration of educational courses.
        </p>
        <ul className="mt-10 flex flex-col gap-[18px]">
          {creatorBenefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-center gap-2 text-lg leading-[1.2] font-medium text-ink"
            >
              <CircleCheck className="h-6 w-6 fill-brand text-white" aria-hidden="true" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
