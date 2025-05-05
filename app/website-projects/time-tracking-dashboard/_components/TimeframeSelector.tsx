import { cn } from "../_utils/utils";

type TimeframeSelectorProps = {
  className?: string;
};

function TimeframeSelector({ className }: TimeframeSelectorProps) {
  return (
    <div className={cn("flex text-purple-500", className)}>
      <div className="flex grow justify-center">Daily</div>
      <div className="flex text-white grow justify-center">Weekly</div>
      <div className="flex grow justify-center">Monthly</div>
    </div>
  );
}

export default TimeframeSelector;
