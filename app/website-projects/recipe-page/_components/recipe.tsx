import Image from "next/image";

import topImage from "@/public/images/recipe-page/image-omelette.jpeg";
import RecipePrepSection from "./recipe-prep-section";
import RecipeTitleSection from "./recipe-title-section";
import RecipeIngredientsSection from "./recipe-ingredients-section";
import SeparationLine from "./separation-line";
import RecipeInstructionsSection from "./recipe-instructions-section";
import { instructions } from "../_data/recipe-instructions";
import NutritionSection from "./nutrition-section";
import { recipeNutruitionValues } from "../_data/recipe-nutrition-values";

export default function Recipe() {
  return (
    <div className="w-full bg-white max-w-[768px] rounded-none sm:rounded-3xl">
      <div className="p-0 sm:pt-[40px] sm:px-[40px]">
        <Image
          className="rounded-none sm:rounded-xl"
          src={topImage}
          alt="Omelette"
        />
      </div>
      <div className="flex flex-col px-[32px] py-[40px] gap-[32px] sm:px-[40px]">
        <RecipeTitleSection />
        <RecipePrepSection />
        <RecipeIngredientsSection />
        <SeparationLine />
        <RecipeInstructionsSection instructions={instructions} />
        <SeparationLine />
        <NutritionSection nutritionValues={recipeNutruitionValues} />
      </div>
    </div>
  );
}
