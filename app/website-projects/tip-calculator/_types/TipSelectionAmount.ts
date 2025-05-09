export const tipSelectionAmounts = [5, 10, 15, 25, 50] as const;
export type TipSelectionAmount = (typeof tipSelectionAmounts)[number] | null;
