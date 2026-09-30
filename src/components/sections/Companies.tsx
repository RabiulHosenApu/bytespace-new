import { Atom, Hexagon, Orbit, Waves, Zap } from "lucide-react";

const logos = [Waves, Orbit, Zap, Hexagon, Atom];

export default function Companies() {
  return (
    <section aria-label="Trusted by" className="w-full border-b border-gray-100 bg-white py-10">
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-14 gap-y-6 px-4 text-gray-400">
        {logos.map((Icon, i) => (
          <li key={i} className="flex items-center gap-2 font-heading text-lg font-semibold">
            <Icon className="h-6 w-6" aria-hidden="true" />
            Logoipsum
          </li>
        ))}
      </ul>
    </section>
  );
}
