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

function DashboardDataCard({ title, className }: DashboardDataCardProps) {
  return <div className={className}>{title}</div>;
}

export default DashboardDataCard;
