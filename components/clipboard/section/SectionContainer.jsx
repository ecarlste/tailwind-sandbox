import React from 'react';

function SectionContainer(props) {
  console.log(props);

  const classes =
    `max-w-6xl mx-auto text-center px-10 ${props.className}`.trimEnd();

  return <div className={classes}>{props.children}</div>;
}

export default SectionContainer;
