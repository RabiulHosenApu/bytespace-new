import Link from "next/link";
import { Building2, Camera, Code2, Laptop, Megaphone, PenTool, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { categories } from "@/lib/data";

const icons: Record<(typeof categories)[number]["icon"], LucideIcon> = {
  pen: PenTool,
  code: Code2,
  laptop: Laptop,
  building: Building2,
  megaphone: Megaphone,
  camera: Camera,
};

export default function Categories() {
  return (
    <section id="categories" className="w-full scroll-mt-8 bg-white px-4 pb-24">
      <SectionHeading
        title="Explore Diverse Learning Paths at Bytespace"
        description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        size="md"
      />

      <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map(({ name, icon }) => {
          const Icon = icons[icon];
          return (
            <li key={name}>
              <Link
                href="/#courses"
                className="flex aspect-[5/4] flex-col items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white text-sm font-medium transition hover:-translate-y-1 hover:border-lime hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lime">
                  <Icon className="h-5 w-5 text-ink" aria-hidden="true" />
                </span>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
