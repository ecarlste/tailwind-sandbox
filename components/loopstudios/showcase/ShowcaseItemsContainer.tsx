import React from "react";

function ShowcaseItemsContainer(props: {
  children: React.ReactNode;
  className?: string;
}) {
  const styles =
    `flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8 ${props.className}`.trimEnd();

  return <div className={styles}>{props.children}</div>;
}

export default ShowcaseItemsContainer;
