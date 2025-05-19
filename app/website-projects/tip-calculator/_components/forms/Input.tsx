import React from "react";
import Label from "./Label";
import { cn } from "@/utils/utils";

type InputProps = {
  className?: string;
  children?: React.ReactNode;
  inputClassName?: string;
  label?: string;
  value: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
};

export default function Input({
  className,
  children,
  inputClassName,
  label,
  value,
  onChange,
}: InputProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && <Label>{label}</Label>}
      <div
        className={cn(
          "flex border-2 border-grey-50 focus-within:border-green-400 items-center bg-grey-50 rounded-[5px] px-4 py-2",
          inputClassName
        )}
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
