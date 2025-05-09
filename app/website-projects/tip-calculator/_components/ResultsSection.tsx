import CalculatorSummaryAmount from "@/app/website-projects/tip-calculator/_components/CalculatorSummaryAmount";
import Button from "@/app/website-projects/tip-calculator/_components/Button";

export default function ResultsSection() {
  return (
    <div
      className={
        "rounded-[15px] bg-green-900 px-8 py-6 flex flex-col gap-[128px] w-[413px]"
      }
    >
      <div className={"flex flex-col gap-6"}>
        <CalculatorSummaryAmount title={"Tip Amount"} amount={4.27} />
        <CalculatorSummaryAmount title={"Total"} amount={32.79} />
      </div>
      <Button className={"uppercase"} variant={"secondary"}>
        Reset
      </Button>
    </div>
  );
}
