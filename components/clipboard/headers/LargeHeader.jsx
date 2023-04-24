import React from 'react';

function LargeHeader(props) {
  return (
    <h3 className="mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
      {props.children}
    </h3>
  );
}

export default LargeHeader;
