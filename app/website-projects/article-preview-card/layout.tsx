import { Metadata } from "next";
import "./article-preview-card.css";

export const metadata: Metadata = {
  title: "Article Preview Card",
  description: "An article preview card component.",
  icons: {
    icon: "/images/article-preview-card/favicon-32x32.png",
  },
};

export default function ArticlePreviewCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-grey-200 h-lvh flex items-center justify-center">
      {children}
    </main>
  );
}
