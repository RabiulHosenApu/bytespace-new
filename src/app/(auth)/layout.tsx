import Image from "next/image";
import AvatarStack from "@/components/ui/AvatarStack";
import Logo from "@/components/ui/Logo";
import { Cone, Ring, Squiggle } from "@/components/ui/Shapes";

export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="grid min-h-screen flex-1 lg:grid-cols-2">
      <div className="flex flex-col px-6 py-8 sm:px-12">
        <Logo />
        <div className="flex flex-1 items-center justify-center py-12">
          <div className="w-full max-w-sm">{children}</div>
        </div>
      </div>

      <aside className="relative hidden overflow-hidden bg-brand bg-grid text-white lg:flex lg:flex-col lg:items-center lg:justify-center lg:p-12">
        <Squiggle className="absolute top-10 -left-4 w-32 -rotate-12" />
        <Cone className="absolute top-16 right-12 w-16 rotate-12" />
        <Ring color="lime" className="absolute -right-8 bottom-24 w-32" />
        <Squiggle color="white" className="absolute bottom-12 left-16 w-20 rotate-12" />

        <div className="relative w-full max-w-md">
          <h2 className="text-center text-3xl leading-tight font-semibold xl:text-4xl">
            Learn from the best creators, anywhere.
          </h2>

          <div className="relative mx-auto mt-10 h-80 w-64 overflow-hidden rounded-t-full border-4 border-lime">
            <Image
              src="/images/hero-student.jpg"
              alt=""
              fill
              sizes="256px"
              className="object-cover object-top"
            />
          </div>

          <div className="absolute -bottom-6 left-0 rounded-xl bg-white p-3 text-ink shadow-xl">
            <p className="text-sm font-semibold">Happy Students</p>
            <p className="mb-2 text-[11px] text-muted">4.8 ★★★★★</p>
            <AvatarStack count={5} extra="2K+" size="md" />
          </div>
          <div className="absolute top-32 right-0 w-36 rounded-xl bg-white p-3 text-ink shadow-xl">
            <p className="text-[11px] font-medium">Learning Progress</p>
            <p className="mt-1 font-heading text-2xl font-semibold">55%</p>
            <div className="mt-2 h-1.5 rounded-full bg-gray-100">
              <div className="h-full w-[55%] rounded-full bg-lime" />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
