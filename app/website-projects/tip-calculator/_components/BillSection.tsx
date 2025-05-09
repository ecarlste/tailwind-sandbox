"use client";

import Input from "./Input";
import IconDollar from "@/app/website-projects/tip-calculator/_components/IconDollar";
import IconPerson from "@/app/website-projects/tip-calculator/_components/IconPerson";
import TipSelectionSection from "@/app/website-projects/tip-calculator/_components/TipSelectionSection";

export default function BillSection() {
  return (
    <div className={"flex flex-col gap-10"}>
      <Input label={"Bill"}>
        <IconDollar />
      </Input>
      <TipSelectionSection />
      <Input label={"Number of People"}>
        <IconPerson />
      </Input>
    </div>
  );
}
