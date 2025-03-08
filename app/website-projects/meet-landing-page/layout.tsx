import { Metadata } from "next";
import "./meet-landing-page.css";

export const metadata: Metadata = {
  title: "Meet Landing Page",
  description: "A landing page for a video conferencing app.",
  icons: {
    icon: "/images/meet-landing-page/favicon-32x32.png",
  },
};

export default function MeetLandingPageSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center font-red-hat-display">
      {children}
    </main>
  );
}
