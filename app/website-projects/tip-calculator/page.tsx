import ResultsSection from "@/app/website-projects/tip-calculator/_components/ResultsSection";
import BillSection from "@/app/website-projects/tip-calculator/_components/BillSection";

export default function TipCalculatorPage() {
  return (
    <div className={"bg-white rounded-[25px] p-8 flex gap-12 w-fit h-fit"}>
      <BillSection />
      <ResultsSection />
    </div>
  );
}
