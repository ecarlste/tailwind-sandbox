import Link from 'next/link';
import React from 'react';

function GalleryItem(props) {
  const { linkUrl, image, imageAlt } = props;

  return (
    <div className="w-full md:p-6 lg:w-1/3 md:w-1/2">
      <Link href={linkUrl}>
        <img src={image} alt={imageAlt} className="border-2 shadow" />
      </Link>
    </div>
  );
}

export default GalleryItem;
