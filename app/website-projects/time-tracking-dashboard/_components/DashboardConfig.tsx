import { cn } from "@/utils/utils";
import UserInfo from "./UserInfo";
import TimeframeSelector from "./TimeframeSelector";

type DashboardConfigProps = {
  className?: string;
};

function DashboardConfig({ className }: DashboardConfigProps) {
  return (
    <div
      className={cn(className, "flex flex-col rounded-[0.9375rem] bg-navy-900")}
    >
      <UserInfo />
      <TimeframeSelector className="py-6 px-0 xl:px-8 xl:pb-8 xl:pt-7 gap-0 md:gap-2" />
    </div>
  );
}

export default DashboardConfig;
