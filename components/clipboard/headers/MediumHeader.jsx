import React from 'react';

function MediumHeader(props) {
  return (
    <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
      {props.children}
    </h5>
  );
}

export default MediumHeader;
