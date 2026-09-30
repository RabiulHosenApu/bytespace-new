import Image from "next/image";
import GlowBackdrop from "@/components/ui/GlowBackdrop";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="relative isolate w-full overflow-hidden px-4 py-24">
      <GlowBackdrop />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2">
        <h2 className="text-3xl leading-tight font-semibold md:text-[2.75rem]">
          Discover What Our
          <br />
          Community Is Saying
        </h2>
        <p className="text-sm leading-relaxed text-muted md:text-base">
          At ByteSpace, our vibrant community of learners and creators is at the heart of what we
          do. Hear directly from those who have experienced the transformative journey of learning
          and creating on our platform. Explore testimonials that reflect the diverse perspectives
          of enthusiastic learners and accomplished creators.
        </p>
      </div>

      <ul className="relative mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <li key={t.name}>
            <figure className="h-full rounded-2xl bg-white p-7 shadow-sm transition hover:shadow-lg">
              <figcaption>
                <Image
                  src={t.avatar}
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <p className="mt-4 font-heading font-semibold">{t.name}</p>
                <p className="text-sm text-brand">{t.role}</p>
              </figcaption>
              <blockquote className="mt-5 text-sm leading-relaxed text-ink/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
