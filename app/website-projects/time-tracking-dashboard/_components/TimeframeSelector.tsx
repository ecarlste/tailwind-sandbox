import { cn } from "../_utils/utils";

type TimeframeSelectorProps = {
  className?: string;
};

function TimeframeSelector({ className }: TimeframeSelectorProps) {
  return (
    <div className={cn("flex text-purple-500 justify-center", className)}>
      <div className="flex justify-center w-[6.8125rem]">Daily</div>
      <div className="flex text-white justify-center w-[6.8125rem]">Weekly</div>
      <div className="flex justify-center w-[6.8125rem]">Monthly</div>
    </div>
  );
}

export default TimeframeSelector;
