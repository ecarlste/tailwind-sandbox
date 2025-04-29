export default function ArticlePreviewCardPage() {
  return (
    <div className="bg-white rounded-[10px] shadow-card max-w-[730px] gap-10 flex text-grey-900">
      <div>Image</div>
      <div className="flex flex-col gap-6 pr-10 py-[30px]">
        <div className="text-preset-1">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </div>
        <div>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </div>
        <div className="flex justify-between">
          <div>Profile/Date</div>
          <div>Share Button</div>
        </div>
      </div>
    </div>
  );
}
