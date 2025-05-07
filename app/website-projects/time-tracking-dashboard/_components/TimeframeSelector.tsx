import { cn } from "../_utils/utils";

type TimeframeSelectorProps = {
  className?: string;
};

function TimeframeSelector({ className }: TimeframeSelectorProps) {
  return (
    <div
      className={cn(
        "flex flex-row xl:flex-col text-purple-500 justify-center gap-0 md:gap-2 xl:gap-[1.3125rem]",
        className
      )}
    >
      <div className="flex justify-center xl:justify-start w-[6.8125rem]">
        Daily
      </div>
      <div className="flex text-white justify-center xl:justify-start w-[6.8125rem]">
        Weekly
      </div>
      <div className="flex justify-center xl:justify-start w-[6.8125rem]">
        Monthly
      </div>
    </div>
  );
}

export default TimeframeSelector;
