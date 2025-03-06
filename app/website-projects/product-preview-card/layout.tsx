import { Metadata } from "next";
import "./product-preview-card.css";

export const metadata: Metadata = {
  title: "Product preview card component",
  description: "A product preview card component.",
  icons: {
    icon: "/images/product-preview-card/favicon-32x32.png",
  },
};

export default function ProductPreviewCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
