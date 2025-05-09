import React from "react";

type ButtonProps = { children: React.ReactNode };

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className={
        "rounded-[5px] bg-green-400 text-green-900 text-preset-4 uppercase h-12"
      }
    >
      {children}
    </button>
  );
}
