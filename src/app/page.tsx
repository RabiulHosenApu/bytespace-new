import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Categories from "@/components/sections/Categories";
import Companies from "@/components/sections/Companies";
import Courses from "@/components/sections/Courses";
import CreateCourses from "@/components/sections/CreateCourses";
import CreatorCTA from "@/components/sections/CreatorCTA";
import Growth from "@/components/sections/Growth";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import GlowBackdrop, { type Glow } from "@/components/ui/GlowBackdrop";

// Figma "Frame 15" background ellipses
const growthGlows: Glow[] = [
  { x: -152, y: -466, size: 1137, color: "lime", opacity: 0.4 },
  { x: 811, y: -458, size: 1137, color: "blue", opacity: 0.08 },
  { x: -508, y: 183, size: 1137, color: "blue", opacity: 0.16 },
  { x: 722, y: 788, size: 1137, color: "blue", opacity: 0.24 },
  { x: -287, y: 946, size: 672, color: "lime", opacity: 0.6 },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-clip">
        <Hero />
        <Companies />
        <Courses />
        <Categories />
        <section className="relative isolate flex flex-col gap-[72px] overflow-hidden px-4 py-20 lg:py-[120px]">
          <GlowBackdrop glows={growthGlows} />
          <Growth />
          <CreateCourses />
        </section>
        <CreatorCTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
