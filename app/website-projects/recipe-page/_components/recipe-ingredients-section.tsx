import BulletedItem from "./bulleted-item";

export default function RecipeIngredientsSection() {
  return (
    <div className="flex flex-col space-y-[24px]">
      <div className="font-young-serif text-[28px] text-brown-800">
        Ingredients
      </div>
      <div className="flex flex-col space-y-[8px]">
        <BulletedItem>2-3 large eggs</BulletedItem>
        <BulletedItem>Salt, to taste</BulletedItem>
        <BulletedItem>Pepper, to taste</BulletedItem>
        <BulletedItem>1 tablespoon of butter or oil</BulletedItem>
        <BulletedItem>
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </BulletedItem>
      </div>
    </div>
  );
}
