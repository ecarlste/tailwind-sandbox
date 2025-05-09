"use client";

import Button from "@/app/website-projects/tip-calculator/_components/Button";
import { useState } from "react";
import Input from "./Input";
import IconDollar from "@/app/website-projects/tip-calculator/_components/IconDollar";
import IconPerson from "@/app/website-projects/tip-calculator/_components/IconPerson";

const tipSelectionAmounts = [5, 10, 15, 25, 50] as const;
type TipSelectionAmount = (typeof tipSelectionAmounts)[number] | null;

export default function BillSection() {
  const [tipPercentage, setTipPercentage] = useState<TipSelectionAmount>(15);

  const handleClick = (amount: TipSelectionAmount) => {
    setTipPercentage(amount);
  };

  return (
    <div className={"flex flex-col gap-10"}>
      <Input label={"Bill"}>
        <IconDollar />
      </Input>
      <div className={"flex flex-col gap-2"}>
        <div className={"text-grey-500 font-preset-5"}>Select Tip %</div>
        <div className={"grid grid-cols-3 gap-4"}>
          {tipSelectionAmounts.map((amount) => (
            <Button
              key={amount}
              className={"w-[116px]"}
              variant={amount === tipPercentage ? "secondary" : "primary"}
              onClick={() => handleClick(amount)}
            >
              {amount}%
            </Button>
          ))}
          <Button
            className={"w-[116px"}
            variant={"tertiary"}
            onClick={() => handleClick(null)}
          >
            Custom
          </Button>
        </div>
      </div>
      <Input label={"Number of People"}>
        <IconPerson />
      </Input>
    </div>
  );
}
