import BlogPreviewCard from "./_components/blog-preview-card";
import { BlogPost } from "./blog-post";

import illustrationArticleSvg from "@/public/images/blog-preview-card/illustration-article.svg";
import imageAvatar from "@/public/images/blog-preview-card/image-avatar.webp";

const blogPost: BlogPost = {
  thumbnail: illustrationArticleSvg,
  category: "Learning",
  date: new Date(Date.UTC(2023, 11, 21, 12)),
  title: "HTML & CSS foundations",
  description:
    "These languages are the backbone of every website, defining structure, content, and presentation.",
  author: { name: "Greg Hooper", avatar: imageAvatar },
};

export default function BlogPreviewCardSitePage() {
  return (
    <div className="flex justify-center items-center bg-yellow min-h-lvh">
      <BlogPreviewCard post={blogPost} />
    </div>
  );
}
