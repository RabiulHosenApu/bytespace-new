import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { categories } from "@/lib/data";

export default function Categories() {
  return (
    <section id="categories" className="w-full scroll-mt-8 bg-white px-4 pt-[72px] pb-[120px]">
      <SectionHeading
        size="md"
        title="Explore Diverse Learning Paths at Bytespace"
        description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
      />

      <ul className="mx-auto mt-[68px] grid max-w-[1202px] grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-10">
        {categories.map(({ name, icon }) => (
          <li key={name}>
            <Link
              href="/#courses"
              className="flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border border-line bg-white transition hover:-translate-y-1 hover:border-lime hover:shadow-md"
            >
              <Image src={icon} alt="" width={60} height={60} />
              <span className="text-lg leading-[1.2] font-medium text-ink md:text-xl">{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
