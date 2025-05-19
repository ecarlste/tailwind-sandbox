"use client";

import Input from "./Input";
import IconDollar from "@/app/website-projects/tip-calculator/_components/IconDollar";
import IconPerson from "@/app/website-projects/tip-calculator/_components/IconPerson";
import TipSelectionSection from "@/app/website-projects/tip-calculator/_components/TipSelectionSection";
import { useCalculatorStore } from "@/app/website-projects/tip-calculator/_providers/CalculatorStoreProvider";

export default function BillSection() {
  const { billAmount, setBillAmount, numberOfPeople, setNumberOfPeople } =
    useCalculatorStore((state) => state);

  const handleBillAmountChange = (e: React.FormEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(e.currentTarget.value);

    setBillAmount(!isNaN(parsedValue) ? parsedValue : 0);
  };

  const handleNumberOfPeopleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(e.currentTarget.value);

    setNumberOfPeople(!isNaN(parsedValue) ? parsedValue : 0);
  };

  return (
    <div className={"flex flex-col gap-10"}>
      <Input
        label={"Bill"}
        value={`${billAmount}`}
        onChange={handleBillAmountChange}
      >
        <IconDollar />
      </Input>
      <TipSelectionSection />
      <Input
        label={"Number of People"}
        value={`${numberOfPeople}`}
        onChange={handleNumberOfPeopleChange}
      >
        <IconPerson />
      </Input>
    </div>
  );
}
