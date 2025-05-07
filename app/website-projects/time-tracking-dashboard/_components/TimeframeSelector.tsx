"use client";

import { useTimeframeStore } from "../_providers/TimeframeStoreProvider";
import { TimeframeChoices } from "../_types/Timeframe";
import { cn } from "../_utils/utils";

type TimeframeSelectorProps = {
  className?: string;
};

const timeframes: TimeframeChoices[] = ["daily", "weekly", "monthly"];

function TimeframeSelector({ className }: TimeframeSelectorProps) {
  const { timeframe, setTimeframe } = useTimeframeStore((state) => state);

  const selectorClassName =
    "flex justify-center xl:justify-start w-[6.8125rem] capitalize";

  return (
    <div
      className={cn(
        "flex flex-row xl:flex-col text-purple-500 justify-center gap-0 md:gap-2 xl:gap-[1.3125rem]",
        className
      )}
    >
      {timeframes.map((currentTimeframe) => (
        <div
          key={currentTimeframe}
          className={cn(
            selectorClassName,
            timeframe === currentTimeframe
              ? "text-white"
              : "hover:cursor-pointer hover:text-navy-200"
          )}
          onClick={() => setTimeframe(currentTimeframe)}
        >
          {currentTimeframe}
        </div>
      ))}
    </div>
  );
}

export default TimeframeSelector;
