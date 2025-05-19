import ResultsSection from "@/app/website-projects/tip-calculator/_components/summary/ResultsSection";
import BillSection from "@/app/website-projects/tip-calculator/_components/bill/BillSection";
import Logo from "./_components/Logo";

export default function TipCalculatorPage() {
  return (
    <div className="flex flex-col gap-22 items-center h-fit">
      <Logo />
      <div className={"bg-white rounded-[25px] px-10 py-8 flex gap-12"}>
        <BillSection />
        <ResultsSection />
      </div>
    </div>
  );
}
