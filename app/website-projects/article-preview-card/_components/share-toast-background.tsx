import { Dispatch, SetStateAction } from "react";
import IconShare from "./icon-share";
import ShareToastLinks from "./share-toast-links";

type ShareToastBackgroundProps = {
  className?: string;
  variant?: "default" | "mobile";
  setIsToastVisible?: Dispatch<SetStateAction<boolean>>;
};

export default function ShareToastBackground({
  className,
  variant = "default",
  setIsToastVisible,
}: ShareToastBackgroundProps) {
  return (
    <>
      {variant === "mobile" && (
        <div
          className={`flex w-[327px] h-[76px] bg-grey-900 rounded-b-[10px] px-[30px] py-4 text-white ${className}`}
        >
          <div className="flex justify-between w-full items-center">
            <ShareToastLinks className="flex gap-6" />
            <IconShare setIsToastVisible={setIsToastVisible || (() => {})} />
          </div>
        </div>
      )}
      {variant === "default" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="268"
          height="87"
          viewBox="0 0 268 87"
          fill="none"
          className={className}
        >
          <g filter="url(#filter0_d_43_79)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 0C14.4772 0 10 4.47715 10 10V45C10 50.5228 14.4772 55 20 55H122L134 67L146 55H248C253.523 55 258 50.5228 258 45V10C258 4.47715 253.523 0 248 0H20Z"
              fill="#48556A"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_43_79"
              x="0"
              y="0"
              width="268"
              height="87"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.788235 0 0 0 0 0.835294 0 0 0 0 0.882353 0 0 0 0.503415 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_43_79"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_43_79"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      )}
    </>
  );
}
