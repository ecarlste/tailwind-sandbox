"use client";

import Input from "../forms/Input";
import IconDollar from "@/app/website-projects/tip-calculator/_components/icons/IconDollar";
import IconPerson from "@/app/website-projects/tip-calculator/_components/icons/IconPerson";
import TipSelectionSection from "@/app/website-projects/tip-calculator/_components/bill/TipSelectionSection";
import { useCalculatorStore } from "@/app/website-projects/tip-calculator/_providers/CalculatorStoreProvider";

export default function BillSection() {
  const { billAmount, setBillAmount, numberOfPeople, setNumberOfPeople } =
    useCalculatorStore((state) => state);

  const handleBillAmountChange = (e: React.FormEvent<HTMLInputElement>) => {
    setBillAmount(e.currentTarget.value);
  };

  const handleNumberOfPeopleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setNumberOfPeople(e.currentTarget.value);
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
