import Image from "next/image";
import IconShare from "./_components/icon-share";

export default function ArticlePreviewCardPage() {
  return (
    <article className="bg-white rounded-[10px] shadow-card max-w-[730px] gap-10 flex text-grey-900 overflow-hidden">
      <div className="shrink-0 w-[285px] h-70 bg-image" />
      <div className="flex flex-col gap-6 pr-10 py-[30px]">
        <h1 className="text-preset-1">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p className="text-preset-2 text-grey-500">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I&apos;ve got some simple tips to
          help you make any room feel complete.
        </p>
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
          <IconShare />
        </div>
      </div>
    </article>
  );
}
