import ArticleDetails from "./_components/article-details";
import ArticleImage from "./_components/article-image";
import { articleData } from "./_util/article-data";

export default function ArticlePreviewCardPage() {
  return (
    <article className="bg-white rounded-[10px] shadow-card max-w-[730px] gap-10 flex text-grey-900">
      <ArticleImage />
      <ArticleDetails article={articleData} />
    </article>
  );
}
