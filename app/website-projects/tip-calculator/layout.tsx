import { Metadata } from "next";
import "./tip-calculator.css";
import React from "react";

export const metadata: Metadata = {
  title: "Tip Calculator App",
  description: "Demo of a React Tip Calculator App.",
  icons: {
    icon: "/images/tip-calculator/favicon-32x32.png",
  },
};

export default function TipCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex bg-grey-200 h-lvh justify-center">{children}</main>
  );
}
