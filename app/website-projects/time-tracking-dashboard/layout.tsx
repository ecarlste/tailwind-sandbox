import { Metadata } from "next";
import "./time-tracking-dashboard.css";

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
    <main className="h-lvh flex justify-center items-start bg-navy-950 text-white text-preset-5 px-6 py-[5.0625rem]">
      {children}
    </main>
  );
}
