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
import GlowBackdrop from "@/components/ui/GlowBackdrop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-clip">
        <Hero />
        <Companies />
        <Courses />
        <Categories />
        <div className="relative isolate overflow-hidden">
          <GlowBackdrop />
          <Growth />
          <CreateCourses />
        </div>
        <CreatorCTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
