import { Metadata } from "next";
import "./social-links-profile.css";

export const metadata: Metadata = {
  title: "Social Links Profile",
  description: "A social links profile component.",
  icons: {
    icon: "/images/social-links-profile/favicon-32x32.png",
  },
};

export default function SocialLinksProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
