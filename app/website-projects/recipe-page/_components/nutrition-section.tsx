import { NutritionValues } from "../nutrition-values";
import NutritionItem from "./nutrition-item";
import SeparationLine from "./separation-line";

type NutritionSectionProps = {
  nutritionValues: NutritionValues;
};

export default function NutritionSection({
  nutritionValues,
}: NutritionSectionProps) {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="font-young-serif text-[28px] text-brown-800">
        Nutrition
      </div>
      <p className="font-outfit text-stone-600">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div className="flex flex-col gap-[12px]">
        <NutritionItem
          label="Calories"
          value={nutritionValues.calories}
          unit="kcal"
        />
        <SeparationLine />
        <NutritionItem label="Carbs" value={nutritionValues.carbs} unit="g" />
        <SeparationLine />
        <NutritionItem
          label="Protein"
          value={nutritionValues.protein}
          unit="g"
        />
        <SeparationLine />
        <NutritionItem label="Fat" value={nutritionValues.fat} unit="g" />
      </div>
    </div>
  );
}
