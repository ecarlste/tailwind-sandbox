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
        <span className={"text-preset-5 text-white"}>{title}</span>
        <span className={"text-preset-6 text-grey-400"}>/ person</span>
      </div>
      <div className={"text-preset-1 text-green-400"}>${amount}</div>
    </div>
  );
}
