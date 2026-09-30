import Image from "next/image";
import { partnerLogos } from "@/lib/data";

export default function Companies() {
  return (
    <section aria-label="Trusted by" className="w-full bg-surface px-4 py-12 md:py-20">
      <ul className="mx-auto flex max-w-[1132px] flex-wrap items-center justify-center gap-x-12 gap-y-6 lg:justify-between">
        {partnerLogos.map((src, i) => (
          <li key={src}>
            <Image
              src={src}
              alt={`Partner ${i + 1}`}
              width={167}
              height={41}
              className="h-8 w-auto md:h-[41px]"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
