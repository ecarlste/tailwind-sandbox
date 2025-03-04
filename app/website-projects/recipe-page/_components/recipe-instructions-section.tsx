import { RecipeInstructionType } from "../recipe-instruction-type";
import RecipeInstruction from "./recipe-instruction";

type RecipeInstructionsSectionProps = {
  instructions: RecipeInstructionType[];
};

export default function RecipeInstructionsSection({
  instructions,
}: RecipeInstructionsSectionProps) {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="font-young-serif text-[28px] text-brown-800">
        Instructions
      </div>
      <div className="flex flex-col gap-[8px]">
        {instructions.map((instruction, index) => (
          <RecipeInstruction
            key={index}
            instruction={instruction}
            stepNumber={index + 1}
          />
        ))}
      </div>
    </div>
  );
}
