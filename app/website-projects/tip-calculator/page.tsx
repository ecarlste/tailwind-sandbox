import ResultsSection from "@/app/website-projects/tip-calculator/_components/summary/ResultsSection";
import BillSection from "@/app/website-projects/tip-calculator/_components/bill/BillSection";

export default function TipCalculatorPage() {
  return (
    <div
      className={"bg-white rounded-[25px] px-10 py-8 flex gap-12 w-fit h-fit"}
    >
      <BillSection />
      <ResultsSection />
    </div>
  );
}
