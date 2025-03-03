import { Metadata } from "next";
import "./blog-preview-card.css";

export const metadata: Metadata = {
  title: "Blog Preview Card",
  description: "A blog preview card component.",
  icons: {
    icon: "/images/blog-preview-card/favicon-32x32.png",
  },
};

export default function BlogPreviewCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
