import DashboardConfig from "./_components/DashboardConfig";
import DashboardDataCard from "./_components/DashboardDataCard";
import data from "./_utils/data.json";

export default function NewsletterSignupPage() {
  return (
    <div className="bg-green-500">
      <DashboardConfig />
      {data.map((entry) => (
        <DashboardDataCard
          key={entry.title}
          title={entry.title}
          timeframes={entry.timeframes}
        />
      ))}
    </div>
  );
}
