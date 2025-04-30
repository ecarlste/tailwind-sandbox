import Image from "next/image";
import ShareButtonWithToast from "./share-button-with-toast";

function ArticleAuthorAndSharing() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image
          src="/images/article-preview-card/avatar-michelle.jpg"
          alt="Article Author Avatar Image"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col text-preset-2">
          <b>Michelle Appleton</b>
          <span className="text-grey-400">28 Jun 2020</span>
        </div>
      </div>
      <ShareButtonWithToast />
    </div>
  );
}

export default ArticleAuthorAndSharing;
