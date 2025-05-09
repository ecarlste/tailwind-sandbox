import React from "react";

type LabelProps = {
  children: React.ReactNode;
};

export default function Label({ children }: LabelProps) {
  return <label className={"text-grey-500 font-preset-5"}>{children}</label>;
}
