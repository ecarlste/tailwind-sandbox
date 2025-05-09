import { createStore } from "zustand/vanilla";
import { TipSelectionAmount } from "@/app/website-projects/tip-calculator/_types/TipSelectionAmount";

export type SplitResults = {
  tipPerPerson: number;
  totalPerPerson: number;
};

export type CalculatorState = {
  billAmount: number;
  tipPercentage: TipSelectionAmount;
  numberOfPeople: number;
  results: SplitResults;
};

export type CalculatorActions = {
  setBillAmount: (billAmount: number) => void;
  setTipPercentage: (tipPercentage: TipSelectionAmount) => void;
  setNumberOfPeople: (numberOfPeople: number) => void;
};

export type CalculatorStore = CalculatorState & CalculatorActions;

export const defaultInitState: CalculatorState = {
  billAmount: 142.55,
  tipPercentage: 15,
  numberOfPeople: 5,
  results: {
    tipPerPerson: 4.27,
    totalPerPerson: 32.79,
  },
};

export const initCalculatorStore = (): CalculatorState => {
  return defaultInitState;
};

export const createCalculatorStore = (
  initState: CalculatorState = defaultInitState,
) => {
  return createStore<CalculatorStore>()((set) => ({
    ...initState,
    setBillAmount: (billAmount) =>
      set(() => {
        console.log(`billAmount: ${billAmount}`);

        return {
          billAmount,
        };
      }),
    setTipPercentage: (tipPercentage) =>
      set(() => {
        console.log(`tipPercentage: ${tipPercentage}`);

        return {
          tipPercentage,
        };
      }),
    setNumberOfPeople: (numberOfPeople) =>
      set(() => {
        console.log(`numberOfPeople: ${numberOfPeople}`);

        return {
          numberOfPeople,
        };
      }),
  }));
};
