import DashboardConfig from "./_components/DashboardConfig";
import DashboardDataCard from "./_components/DashboardDataCard";
import data from "./_utils/data.json";

export default function NewsletterSignupPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <DashboardConfig className="col-span-1 md:col-span-3" />
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
