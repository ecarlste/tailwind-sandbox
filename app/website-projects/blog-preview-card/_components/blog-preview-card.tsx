import { Figtree } from "next/font/google";
import { BlogPost } from "../blog-post";
import Image from "next/image";
import Link from "next/link";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["500", "800"],
});

type BlogPreviewCardProps = {
  post: BlogPost;
};

export default function BlogPreviewCard({ post }: BlogPreviewCardProps) {
  const date = post.date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      className={
        `flex flex-col gap-5 p-5 bg-white rounded-2xl shadow-solid ${figtree.className} text-base text-gray-950 ` +
        `border max-w-xs border-gray-950 shadow-gray-950`
      }
    >
      <Image
        className="rounded-xl"
        src={post.thumbnail}
        alt="Blog post thumbnail image"
        width={336}
        height={201}
      />
      <div className="flex flex-col gap-3">
        <div className="font-bold bg-yellow rounded-sm p-3 py-1 w-min text-xs">
          {post.category}
        </div>
        <span className="text-xs">Published {date}</span>
        <span className="font-bold text-xl hover:text-yellow">
          <Link href="#">{post.title}</Link>
        </span>
        <span className="text-gray-500 text-sm">{post.description}</span>
        <div className="flex items-center gap-2">
          <Image
            src={post.author.avatar}
            alt={`Avatar image of ${post.author.name}`}
            width={28}
          />
          <span className={`font-bold text-sm`}>{post.author.name}</span>
        </div>
      </div>
    </div>
  );
}
