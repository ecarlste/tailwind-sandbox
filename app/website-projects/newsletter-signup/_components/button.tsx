"use client";

import { MouseEventHandler } from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg p-4 bg-blue-800 text-preset-2 text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-rose-500 hover:shadow-button hover:cursor-pointer"
    >
      <strong>{children}</strong>
    </button>
  );
}

export default Button;
