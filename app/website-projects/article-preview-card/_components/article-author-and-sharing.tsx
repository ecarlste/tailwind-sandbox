import Image from "next/image";
import ShareButtonWithToast from "./share-button-with-toast";
import { Article } from "../_types/article";

type ArticleAuthorAndSharingProps = Pick<
  Article,
  "avatarImageUrl" | "author" | "authoredDate"
>;

function ArticleAuthorAndSharing({
  avatarImageUrl,
  author,
  authoredDate,
}: ArticleAuthorAndSharingProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image
          src={avatarImageUrl}
          alt="Article Author Avatar Image"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col text-preset-2">
          <b>{author}</b>
          <span className="text-grey-400">{authoredDate}</span>
        </div>
      </div>
      <ShareButtonWithToast />
    </div>
  );
}

export default ArticleAuthorAndSharing;
