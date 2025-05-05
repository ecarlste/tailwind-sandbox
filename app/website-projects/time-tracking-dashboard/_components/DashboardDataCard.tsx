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
};

function DashboardDataCard({ title }: DashboardDataCardProps) {
  return <div>{title}</div>;
}

export default DashboardDataCard;
