import React from "react";

function CreationName(props: { text: string }) {
  const { text } = props;

  return (
    <h5 className="absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black">
      {text}
    </h5>
  );
}

export default CreationName;
