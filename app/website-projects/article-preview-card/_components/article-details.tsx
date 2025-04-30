import { Article } from "../_types/article";
import ArticleAuthorAndSharing from "./article-author-and-sharing";

type ArticleDetailsProps = {
  article: Article;
};

function ArticleDetails({ article }: ArticleDetailsProps) {
  return (
    <section className="flex flex-col gap-6 md:pr-9 lg:pr-10 md:py-[40px] lg:py-[30px]">
      <h1 className="text-preset-1">{article.title}</h1>
      <p className="text-preset-2 text-grey-500">{article.summary}</p>
      <ArticleAuthorAndSharing
        avatarImageUrl={article.avatarImageUrl}
        author={article.author}
        authoredDate={article.authoredDate}
      />
    </section>
  );
}

export default ArticleDetails;
