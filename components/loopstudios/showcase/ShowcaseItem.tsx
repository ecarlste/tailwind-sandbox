import React from "react";
import CreationName from "../CreationName";
import Image, { StaticImageData } from "next/image";

function ShowcaseItem(props: {
  desktopImage: StaticImageData;
  mobileImage: StaticImageData;
  name: string;
}) {
  const { desktopImage, mobileImage, name } = props;

  return (
    <div className="group relative overflow-hidden md:w-1/4">
      <Image
        src={desktopImage}
        alt=""
        className="hidden w-full duration-200 md:block group-hover:scale-110"
      />
      <Image src={mobileImage} alt="" className="w-full md:hidden" />

      {/* <!-- Item Gradient --> */}
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-linear-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>

      <CreationName text={name} />
    </div>
  );
}

export default ShowcaseItem;
