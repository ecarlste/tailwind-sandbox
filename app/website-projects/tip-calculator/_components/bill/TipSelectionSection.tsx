"use client";

import Button from "@/app/website-projects/tip-calculator/_components/Button";
import Label from "@/app/website-projects/tip-calculator/_components/forms/Label";
import { useCalculatorStore } from "@/app/website-projects/tip-calculator/_providers/CalculatorStoreProvider";
import {
  TipSelectionAmount,
  tipSelectionAmounts,
} from "@/app/website-projects/tip-calculator/_types/TipSelectionAmount";
import Input from "../forms/Input";
import { useState } from "react";

export default function TipSelectionSection({}) {
  const { tipPercentage, setTipPercentage } = useCalculatorStore(
    (state) => state
  );
  const [useCustomPercentage, setUseCustomPercentage] = useState(false);

  const handleTipPercentageClick = (amount: TipSelectionAmount) => {
    setUseCustomPercentage(false);
    setTipPercentage(amount);
  };

  const handleCustomPercentageClick = () => {
    setUseCustomPercentage(true);
  };

  const handleCustomPercentageChange = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    setTipPercentage(+e.currentTarget.value);
  };

  return (
    <div className={"flex flex-col gap-2"}>
      <Label>Select Tip %</Label>
      <div className={"grid grid-cols-3 gap-4"}>
        {tipSelectionAmounts.map((amount) => (
          <Button
            key={amount}
            className={"w-[116px] "}
            variant={
              amount === tipPercentage && !useCustomPercentage
                ? "secondary"
                : "primary"
            }
            onClick={() => handleTipPercentageClick(amount)}
          >
            {amount}%
          </Button>
        ))}
        {(!useCustomPercentage && (
          <Button
            className={"w-[116px]"}
            variant={"tertiary"}
            onClick={handleCustomPercentageClick}
          >
            Custom
          </Button>
        )) || (
          <Input
            className="w-[116px]"
            inputClassName="py-1"
            value={`${tipPercentage}`}
            onChange={handleCustomPercentageChange}
          />
        )}
      </div>
    </div>
  );
}
