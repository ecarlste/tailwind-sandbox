import ArticleDetails from "./_components/article-details";
import ArticleImage from "./_components/article-image";
import { articleData } from "./_util/article-data";

export default function ArticlePreviewCardPage() {
  return (
    <article className="bg-white rounded-[10px] shadow-card md:w-[600px] lg:w-[730px] md:gap-8 lg:gap-10 flex text-grey-900 md:h-[346px] lg:h-[280px]">
      <ArticleImage />
      <ArticleDetails article={articleData} />
    </article>
  );
}
