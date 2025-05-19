"use client";

import CalculatorSummaryAmount from "@/app/website-projects/tip-calculator/_components/CalculatorSummaryAmount";
import Button from "@/app/website-projects/tip-calculator/_components/Button";
import { useCalculatorStore } from "@/app/website-projects/tip-calculator/_providers/CalculatorStoreProvider";

export default function ResultsSection() {
  const { results, resetBill } = useCalculatorStore((state) => state);

  return (
    <div
      className={
        "rounded-[15px] bg-green-900 px-8 py-6 flex flex-col gap-[128px] w-[413px]"
      }
    >
      <div className={"flex flex-col gap-6"}>
        <CalculatorSummaryAmount
          title={"Tip Amount"}
          amount={results.tipPerPerson}
        />
        <CalculatorSummaryAmount
          title={"Total"}
          amount={results.totalPerPerson}
        />
      </div>
      <Button className={"uppercase"} variant={"secondary"} onClick={resetBill}>
        Reset
      </Button>
    </div>
  );
}
