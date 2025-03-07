import { Metadata } from "next";
import "./four-card-feature.css";

export const metadata: Metadata = {
  title: "Four Card Feature Section",
  description: "A four card feature section component.",
  icons: {
    icon: "/images/four-card-feature/favicon-32x32.png",
  },
};

export default function FourCardFeatureSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex px-[30px] pt-14 pb-[46px] justify-center md:py-20 xl:py-[102px]">
      {children}
    </main>
  );
}
