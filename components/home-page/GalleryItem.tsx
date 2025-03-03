import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

function GalleryItem(props: {
  linkUrl: string;
  image: StaticImageData;
  imageAlt: string;
}) {
  const { linkUrl, image, imageAlt } = props;

  return (
    <div className="w-full md:p-6 lg:w-1/3 md:w-1/2">
      <Link href={linkUrl}>
        <Image src={image} alt={imageAlt} className="border-2 shadow-sm" />
      </Link>
    </div>
  );
}

export default GalleryItem;
