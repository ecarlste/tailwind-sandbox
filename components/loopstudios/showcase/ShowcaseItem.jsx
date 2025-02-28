import React from 'react';
import CreationName from '../CreationName';

function ShowcaseItem(props) {
  const { desktopImage, mobileImage, name } = props;

  return (
    <div className="group relative overflow-hidden md:w-1/4">
      <img
        src={desktopImage}
        alt=""
        className="hidden w-full duration-200 md:block group-hover:scale-110"
      />
      <img src={mobileImage} alt="" className="w-full md:hidden" />

      {/* <!-- Item Gradient --> */}
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-linear-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>

      <CreationName text={name} />
    </div>
  );
}

export default ShowcaseItem;
