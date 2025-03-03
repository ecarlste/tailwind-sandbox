import React from "react";

function SectionContent(props: {
  children: React.ReactNode;
  className?: string;
}) {
  const classes =
    `max-w-3xl mx-auto text-xl leading-9 text-center text-grayish-blue ${props.className}`.trimEnd();

  return <p className={classes}>{props.children}</p>;
}

export default SectionContent;
