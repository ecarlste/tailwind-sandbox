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
        `flex flex-col gap-6 p-5 bg-white rounded-2xl shadow-solid ${figtree.className} text-gray-950 ` +
        `border max-w-[380px] border-gray-950 shadow-gray-950`
      }
    >
      <Image
        className="rounded-xl w-full"
        src={post.thumbnail}
        alt="Blog post thumbnail image"
      />

      <div className="flex flex-col gap-3">
        <div className="font-bold bg-yellow rounded-sm p-3 py-1 w-min text-sm">
          {post.category}
        </div>
        <span className="text-sm">Published {date}</span>
        <h1 className="font-bold text-2xl hover:text-yellow mb-1">
          <Link href="#">{post.title}</Link>
        </h1>
        <span className="text-gray-500 mb-3">{post.description}</span>
        <div className="flex items-center gap-3">
          <Image
            src={post.author.avatar}
            alt={`Avatar image of ${post.author.name}`}
            width={32}
            height={32}
          />
          <span className="font-bold text-sm">{post.author.name}</span>
        </div>
      </div>
    </div>
  );
}
