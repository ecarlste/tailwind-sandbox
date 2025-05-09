import { cn } from "@/utils/utils";
import React from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

const variantClassNames: Record<ButtonVariant, string> = {
  primary: "bg-green-900 text-white hover:bg-green-200 hover:text-green-900",
  secondary: "bg-green-400 text-green-900 hover:bg-green-200",
  tertiary: "bg-grey-50 text-grey-550",
};

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

export default function Button({
  children,
  className,
  variant = "primary",
  onClick,
}: ButtonProps) {
  return (
    <button
      className={cn(
        className,
        variantClassNames[variant],
        "rounded-[5px] font-preset-4 h-12 hover:cursor-pointer",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
