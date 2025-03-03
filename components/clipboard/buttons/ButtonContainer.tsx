import React from "react";

function ButtonContainer(props: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
      {props.children}
    </div>
  );
}

export default ButtonContainer;
