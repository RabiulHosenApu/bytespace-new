import Image from "next/image";
import GlowBackdrop from "@/components/ui/GlowBackdrop";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="relative isolate w-full overflow-hidden px-4 py-[74px]">
      <GlowBackdrop />

      <div className="mx-auto grid max-w-[1204px] items-end gap-8 md:grid-cols-2 lg:grid-cols-[577px_580px] lg:justify-between">
        <h2 className="text-3xl leading-[1.2] font-semibold text-black md:text-[44px]">
          Discover What Our
          <br />
          Community Is Saying
        </h2>
        <p className="text-base leading-[1.6] text-[#4f4f4f] md:text-lg">
          At ByteSpace, our vibrant community of learners and creators is at the heart of what we
          do. Hear directly from those who have experienced the transformative journey of learning
          and creating on our platform. Explore testimonials that reflect the diverse perspectives
          of enthusiastic learners and accomplished creators.
        </p>
      </div>

      <ul className="mx-auto mt-[72px] grid max-w-[1204px] items-start gap-10 lg:gap-[41px] md:grid-cols-3">
        {testimonials.map((t) => (
          <li key={t.name}>
            <figure className="rounded-3xl bg-white p-6">
              <figcaption>
                <Image
                  src={t.avatar}
                  alt=""
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-full object-cover"
                />
                <p className="mt-6 font-heading text-xl leading-[1.2] font-semibold text-black">
                  {t.name}
                </p>
                <p className="text-lg leading-[1.6] text-brand">{t.role}</p>
              </figcaption>
              <blockquote className="mt-6 text-lg leading-[1.6] text-[#4f4f4f]">
                &quot;{t.quote}&quot;
              </blockquote>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
