import React from "react";

type InputProps = {
  children?: React.ReactNode;
  label: string;
  value?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
};

export default function Input({
  children,
  label,
  value,
  onChange,
}: InputProps) {
  return (
    <div className={"flex flex-col gap-2"}>
      <label className={"text-grey-500 font-preset-5"}>{label}</label>
      <div
        className={
          "flex border-2 border-white focus-within:border-green-400 px-4 py-2 items-center bg-grey-50 rounded-[5px] mx-[-2px]"
        }
      >
        {children}
        <input
          className={
            "text-right text-green-900 font-preset-3 w-full outline-none"
          }
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
