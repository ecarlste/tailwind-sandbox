import { Metadata } from "next";
import "./recipe-page.css";

export const metadata: Metadata = {
  title: "Recipe Page",
  description: "A recipe page component.",
  icons: {
    icon: "/images/recipe-page/favicon-32x32.png",
  },
};

export default function RecipePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
