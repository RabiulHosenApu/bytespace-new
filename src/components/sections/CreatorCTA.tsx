import { ButtonLink } from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { Cone, Cylinder, Ring, Squiggle } from "@/components/ui/Shapes";

export default function CreatorCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-brand bg-grid px-4 py-24 text-white">
      <Squiggle className="absolute -top-4 -left-6 hidden w-36 rotate-12 md:block" />
      <Squiggle color="white" className="absolute top-8 left-[14%] hidden w-16 -rotate-12 lg:block" />
      <Cone className="absolute top-1/2 -left-4 hidden w-20 -rotate-12 md:block" />
      <Ring color="lime" className="absolute -bottom-10 left-[6%] hidden w-32 md:block" />
      <Cone color="lime" className="absolute top-6 right-[16%] hidden w-20 rotate-[30deg] lg:block" />
      <Cylinder color="white" className="absolute top-10 -right-6 hidden w-28 -rotate-12 md:block" />
      <Squiggle className="absolute right-[8%] -bottom-6 hidden w-28 -rotate-6 md:block" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center">
        <SectionHeading
          tone="light"
          title={
            <>
              Unlock Your Potential as a
              <br />
              Creator with ByteSpace
            </>
          }
          description="Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library."
        />
        <ButtonLink href="/signup" className="mt-8">
          Join as Creator
        </ButtonLink>
      </div>
    </section>
  );
}
