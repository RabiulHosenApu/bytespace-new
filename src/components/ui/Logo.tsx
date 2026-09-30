import Link from "next/link";

type LogoProps = {
  tone?: "light" | "dark";
};

export default function Logo({ tone = "dark" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="ByteSpace home"
      className={`flex items-center gap-2 font-heading text-xl font-bold ${
        tone === "light" ? "text-white" : "text-ink"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          d="M4 2h5v7.2A7 7 0 1 1 4 15.5V2Z"
          className="fill-lime"
        />
        <circle cx="11" cy="15.5" r="3" className="fill-ink" />
      </svg>
      ByteSpace
    </Link>
  );
}
