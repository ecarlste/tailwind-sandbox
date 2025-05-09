import DashboardConfig from "./_components/DashboardConfig";
import DashboardDataCard from "./_components/DashboardDataCard";
import data from "@/app/website-projects/time-tracking-dashboard/_utils/data.json";

export default function NewsletterSignupPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
      <DashboardConfig className="row-span-1 col-span-1 md:col-span-3 xl:row-span-2 xl:col-span-1" />
      {data.map((entry) => (
        <DashboardDataCard
          key={entry.title}
          title={entry.title}
          timeframes={entry.timeframes}
          className="col-span-1"
        />
      ))}
    </div>
  );
}
