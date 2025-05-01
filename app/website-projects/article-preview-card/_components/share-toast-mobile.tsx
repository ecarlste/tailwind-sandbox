import { Dispatch, SetStateAction } from "react";
import IconShare from "./icon-share";
import ShareToastLinks from "./share-toast-links";

type ShareToastBackgroundProps = {
  className?: string;
  setIsToastVisible: Dispatch<SetStateAction<boolean>>;
};

export default function ShareToastMobile({
  className,
  setIsToastVisible,
}: ShareToastBackgroundProps) {
  return (
    <div
      className={`flex w-[327px] h-[76px] bg-grey-900 rounded-b-[10px] px-[30px] py-4 text-white ${className}`}
    >
      <div className="flex justify-between w-full items-center">
        <ShareToastLinks className="flex gap-6" />
        <IconShare setIsToastVisible={setIsToastVisible} />
      </div>
    </div>
  );
}
