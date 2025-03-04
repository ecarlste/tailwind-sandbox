type NutritionItemProps = {
  label: string;
  value: number;
  unit: string;
};

export default function NutritionItem({
  label,
  value,
  unit,
}: NutritionItemProps) {
  return (
    <div className="flex px-[32px] gap-[16px] w-full font-outfit">
      <div className="flex-1 text-stone-600">{label}</div>
      <div className="flex-1 text-brown-800 font-bold">
        {value}
        {unit}
      </div>
    </div>
  );
}
