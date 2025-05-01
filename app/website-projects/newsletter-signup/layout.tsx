import { Metadata } from "next";
import "./newsletter-signup.css";

export const metadata: Metadata = {
  title: "Newsletter sign-up form with success message",
  description: "Demo of a React component form for subcribing to a newsletter.",
  icons: {
    icon: "/images/newsletter-signup/favicon-32x32.png",
  },
};

export default function NewsletterSignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="h-lvh bg-blue-800">{children}</main>;
}
