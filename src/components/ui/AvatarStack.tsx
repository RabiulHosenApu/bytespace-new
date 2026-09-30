import Image from "next/image";

type AvatarStackProps = {
  avatars: string[];
  extra?: string;
  /** "lg" = 43px avatars (floating cards), "sm" = 32px (course cards). */
  size?: "sm" | "lg";
  extraTone?: "lime" | "dark";
};

/** Overlapping avatar row. Sized in em so it scales inside a Stage. */
export default function AvatarStack({
  avatars,
  extra,
  size = "sm",
  extraTone = "lime",
}: AvatarStackProps) {
  const item =
    size === "lg"
      ? "h-[2.6875em] w-[2.6875em] -ml-[1em] first:ml-0"
      : "h-[2em] w-[2em] -ml-[0.5em] first:ml-0";

  return (
    <div className="flex items-center">
      {avatars.map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={48}
          height={48}
          className={`${item} rounded-full border-[0.125em] border-white object-cover`}
        />
      ))}
      {extra && (
        <span
          className={`${item} flex items-center justify-center rounded-full border-[0.125em] border-white ${
            extraTone === "lime" ? "bg-lime text-ink" : "bg-ink text-surface"
          }`}
        >
          <span className="text-[0.75em] font-bold">{extra}</span>
        </span>
      )}
    </div>
  );
}
