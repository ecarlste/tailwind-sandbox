import { Metadata } from "next";
import "./time-tracking-dashboard.css";
import { TimeframeStoreProvider } from "./_providers/TimeframeStoreProvider";

export const metadata: Metadata = {
  title: "Time Tracking Dashboard",
  description: "Demo of a React dashboard displaying time tracking data.",
  icons: {
    icon: "/images/time-tracking-dashboard/favicon-32x32.png",
  },
};

export default function TimeTrackingDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TimeframeStoreProvider>
      <main className="h-auto md:h-lvh flex justify-center items-start md:items-center bg-navy-950 text-white text-preset-5 py-[5.0625rem] md:py-0">
        {children}
      </main>
    </TimeframeStoreProvider>
  );
}
