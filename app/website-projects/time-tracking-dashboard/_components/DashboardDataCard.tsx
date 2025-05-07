import { Ellipsis } from "lucide-react";
import { cn } from "../_utils/utils";

type Timeframe = {
  current: number;
  previous: number;
};

type Timeframes = {
  daily: Timeframe;
  weekly: Timeframe;
  monthly: Timeframe;
};

type DashboardDataCardProps = {
  title: string;
  timeframes: Timeframes;
  className?: string;
};

export default function DashboardDataCard({
  title,
  timeframes,
  className,
}: DashboardDataCardProps) {
  const timeframe = "weekly";
  const { current, previous } = timeframes[timeframe];
  const background = getBackgroundDataByTitle(title);

  return (
    <section
      className={cn(
        "flex flex-col pt-[2.375rem] rounded-t-[0.9375rem] rounded-b-3xl",
        background.bgColor,
        background.bgImage
          ? cn(background.bgImage, "bg-no-repeat bg-top-right")
          : ""
      )}
    >
      <div
        className={cn(
          className,
          "flex flex-col gap-2 p-6 bg-navy-900 rounded-[0.9375rem]"
        )}
      >
        <div className="flex justify-between items-center">
          <div className="font-medium">{title}</div>
          <Ellipsis className="text-navy-200" />
        </div>
        <div className="flex flex-row md:flex-col gap-0 md:gap-2 justify-between md:justify-center items-center md:items-start">
          <div className="text-card-time-primary">{current}hrs</div>
          <div className="text-preset-6 text-navy-200">
            Last Week - {previous}hrs
          </div>
        </div>
      </div>
    </section>
  );
}

function getBackgroundDataByTitle(title: string): {
  bgColor: string;
  bgImage: string;
} {
  switch (title) {
    case "Work":
      return {
        bgColor: "bg-orange-300",
        bgImage: "bg-[url(/images/time-tracking-dashboard/icon-work.svg)]",
      };
    case "Play":
      return {
        bgColor: "bg-blue-300",
        bgImage: "bg-[url(/images/time-tracking-dashboard/icon-play.svg)]",
      };
    case "Study":
      return {
        bgColor: "bg-pink-400",
        bgImage: "bg-[url(/images/time-tracking-dashboard/icon-study.svg)]",
      };
    case "Exercise":
      return {
        bgColor: "bg-green-400",
        bgImage: "bg-[url(/images/time-tracking-dashboard/icon-exercise.svg)]",
      };
    case "Social":
      return {
        bgColor: "bg-purple-700",
        bgImage: "bg-[url(/images/time-tracking-dashboard/icon-social.svg)]",
      };
    case "Self Care":
      return {
        bgColor: "bg-yellow-300",
        bgImage: "bg-[url(/images/time-tracking-dashboard/icon-self-care.svg)]",
      };
    default:
      return { bgColor: "bg-gray-200", bgImage: "" };
  }
}
