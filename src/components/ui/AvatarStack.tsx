import Image from "next/image";
import { avatars } from "@/lib/data";

type AvatarStackProps = {
  count?: number;
  extra?: string;
  size?: "sm" | "md";
};

export default function AvatarStack({ count = 3, extra, size = "sm" }: AvatarStackProps) {
  const dim = size === "sm" ? "h-6 w-6 text-[9px]" : "h-8 w-8 text-[10px]";
  const px = size === "sm" ? 24 : 32;

  return (
    <div className="flex -space-x-2">
      {avatars.slice(0, count).map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={px}
          height={px}
          className={`${dim} rounded-full border-2 border-white object-cover`}
        />
      ))}
      {extra && (
        <span
          className={`${dim} flex items-center justify-center rounded-full border-2 border-white bg-lime font-bold text-ink`}
        >
          {extra}
        </span>
      )}
    </div>
  );
}
