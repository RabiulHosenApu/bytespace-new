import { Star } from "lucide-react";
import AvatarStack from "@/components/ui/AvatarStack";
import { avatars } from "@/lib/data";

/*
 * Small floating cards used around the illustrations.
 * All sizes are in em (1em = 16 design px) so they scale inside a Stage.
 */

const card = "rounded-[1em] p-[1em] shadow-[0_1em_2.5em_rgb(4_8_25/0.12)]";

export function TopicCard() {
  return (
    <div className={`${card} flex w-[13em] flex-col gap-[0.5em] bg-white text-ink`}>
      <p className="text-[1em] leading-[1.2] font-medium">UI/UX Design</p>
      <p className="text-[0.75em] leading-[1.6] text-muted">200 Courses • 1000+ Students</p>
    </div>
  );
}

export function ProgressCard() {
  return (
    <div className={`${card} flex w-[14.5em] flex-col gap-[0.5em] bg-white text-ink`}>
      <p className="text-[0.875em] leading-[1.2] font-medium">Learning Progress</p>
      <p className="font-heading text-[3em] leading-[1.2] font-semibold">55%</p>
      <div className="h-[0.5em] rounded-full bg-surface">
        <div className="h-full w-[55%] rounded-full bg-lime" />
      </div>
    </div>
  );
}

type HappyStudentsCardProps = { tone?: "white" | "lime" };

export function HappyStudentsCard({ tone = "white" }: HappyStudentsCardProps) {
  const lime = tone === "lime";
  return (
    <div
      className={`${card} flex w-[16.125em] flex-col gap-[0.5em] text-ink ${lime ? "bg-lime" : "bg-white"}`}
    >
      <div>
        <p className="text-[1em] leading-[1.5] font-medium">Happy Students</p>
        <p className="flex items-center gap-[0.25em]">
          <span className="text-[0.75em] leading-[1.6] text-muted">
            <span className="text-ink">4.5</span> (240)
          </span>
          <Star
            className={`h-[1em] w-[1em] ${lime ? "fill-brand text-brand" : "fill-lime text-lime"}`}
            aria-hidden="true"
          />
        </p>
      </div>
      <AvatarStack avatars={avatars} extra="2K+" size="lg" extraTone={lime ? "dark" : "lime"} />
    </div>
  );
}

type RevenueCardProps = {
  title: string;
  period: string;
  amount: string;
  variant: "progress" | "badge";
};

export function RevenueCard({ title, period, amount, variant }: RevenueCardProps) {
  return (
    <div className={`${card} flex flex-col gap-[0.5em] bg-brand text-surface`}>
      <div>
        <p className="text-[1em] leading-[1.2] font-medium">{title}</p>
        <p className="text-[0.625em] leading-[1.2]">{period}</p>
      </div>
      <p className="font-heading text-[1.5em] leading-[1.33] font-semibold">{amount}</p>
      {variant === "progress" ? (
        <div className="h-[0.5em] w-[12.5em] rounded-full bg-white">
          <div className="h-full w-[60%] rounded-full bg-lime" />
        </div>
      ) : (
        <span className="w-fit rounded-full bg-lime px-[0.5em] text-ink">
          <span className="text-[0.625em] leading-[2] font-medium">+12%</span>
        </span>
      )}
    </div>
  );
}
