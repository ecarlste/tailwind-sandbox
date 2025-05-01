import ArticleDetails from "./_components/article-details";
import ArticleImage from "./_components/article-image";
import { articleData } from "./_util/article-data";

export default function ArticlePreviewCardPage() {
  return (
    <article className="bg-white rounded-[10px] shadow-card w-[327px] md:w-[600px] lg:w-[730px] gap-8 lg:gap-10 flex flex-col md:flex-row text-grey-900 h-[538px] md:h-[346px] lg:h-[280px]">
      <ArticleImage />
      <ArticleDetails article={articleData} />
    </article>
  );
}
