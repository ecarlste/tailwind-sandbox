import ArticleAuthorAndSharing from "./article-author-and-sharing";

function ArticleDetails() {
  return (
    <section className="flex flex-col gap-6 pr-10 py-[30px]">
      <h1 className="text-preset-1">
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </h1>
      <p className="text-preset-2 text-grey-500">
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I&apos;ve got some simple tips to help you
        make any room feel complete.
      </p>
      <ArticleAuthorAndSharing />
    </section>
  );
}

export default ArticleDetails;
