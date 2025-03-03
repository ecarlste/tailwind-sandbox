import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Erik Carlsten's Frontend Portfolio",
  description: "Erik Carlsten's Frontend Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
