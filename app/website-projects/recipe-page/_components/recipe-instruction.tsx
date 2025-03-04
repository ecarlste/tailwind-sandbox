import { RecipeInstructionType as RecipeInstructionType } from "../recipe-instruction-type";

type RecipeInstructionProps = {
  stepNumber: number;
  instruction: RecipeInstructionType;
};

export default function RecipeInstruction({
  instruction,
  stepNumber,
}: RecipeInstructionProps) {
  return (
    <div className="flex pl-[8px] gap-[16px] font-outfit">
      <div className="text-brown-800 font-bold w-[16px]">{stepNumber}.</div>
      <div className="text-stone-600">
        <span className="font-bold">{instruction.summary}: </span>
        {instruction.description}
      </div>
    </div>
  );
}
