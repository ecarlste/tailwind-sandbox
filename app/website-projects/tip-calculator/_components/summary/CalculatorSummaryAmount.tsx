type CalculatorSummaryAmountProps = {
  title: string;
  amount: number;
};

export default function CalculatorSummaryAmount({
  title,
  amount,
}: CalculatorSummaryAmountProps) {
  return (
    <div className="flex justify-between items-center">
      <div className={"flex flex-col"}>
        <span className={"font-preset-5 text-white"}>{title}</span>
        <span className={"font-preset-6 text-grey-400"}>/ person</span>
      </div>
      <div className={"font-preset-1 text-green-400"}>
        ${(Math.round(amount * 100) / 100).toFixed(2)}
      </div>
    </div>
  );
}
