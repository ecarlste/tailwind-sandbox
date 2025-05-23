"use client";

import { Dispatch, SetStateAction } from "react";

type IconShareProps = {
  setIsToastVisible: Dispatch<SetStateAction<boolean>>;
  circleClassName?: string;
  arrowClassName?: string;
};

export default function IconShare({
  setIsToastVisible,
  circleClassName = "fill-grey-200 group-hover:fill-grey-500",
  arrowClassName = "fill-grey-500 group-hover:fill-white",
}: IconShareProps) {
  const handleClick = () => {
    setIsToastVisible((prev) => !prev);
  };

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group transition-colors duration-200 hover:cursor-pointer"
      onClick={handleClick}
    >
      <circle cx="16" cy="16" r="16" className={circleClassName} />
      <path
        d="M24 15.495L17.7663 9.01389V12.8806H16.4409C12.3314 12.8806 9 16.0393 9 19.9358V21.9849L9.58868 21.3733C11.5901 19.2941 14.4221 18.1094 17.3912 18.1094H17.7663V21.9761L24 15.495Z"
        className={arrowClassName}
      />
    </svg>
  );
}
