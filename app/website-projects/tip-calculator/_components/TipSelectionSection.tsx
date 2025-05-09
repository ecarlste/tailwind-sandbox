import Button from "@/app/website-projects/tip-calculator/_components/Button";
import { useState } from "react";
import Label from "@/app/website-projects/tip-calculator/_components/Label";

const tipSelectionAmounts = [5, 10, 15, 25, 50] as const;
type TipSelectionAmount = (typeof tipSelectionAmounts)[number] | null;

export default function TipSelectionSection({}) {
  const [tipPercentage, setTipPercentage] = useState<TipSelectionAmount>(15);

  const handleClick = (amount: TipSelectionAmount) => {
    setTipPercentage(amount);
  };

  return (
    <div className={"flex flex-col gap-2"}>
      <Label>Select Tip %</Label>
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
  );
}
