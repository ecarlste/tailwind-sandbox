import { createStore } from "zustand/vanilla";
import { TipSelectionAmount } from "@/app/website-projects/tip-calculator/_types/TipSelectionAmount";

export type SplitResults = {
  tipPerPerson: number;
  totalPerPerson: number;
};

export type CalculatorState = {
  billAmount: string;
  tipPercentage: TipSelectionAmount;
  numberOfPeople: string;
  results: SplitResults;
};

export type CalculatorActions = {
  setBillAmount: (billAmount: string) => void;
  setTipPercentage: (tipPercentage: TipSelectionAmount) => void;
  setNumberOfPeople: (numberOfPeople: string) => void;
  resetBill: () => void;
};

export type CalculatorStore = CalculatorState & CalculatorActions;

export const defaultInitState: CalculatorState = {
  billAmount: "0",
  tipPercentage: null,
  numberOfPeople: "0",
  results: {
    tipPerPerson: 0,
    totalPerPerson: 0,
  },
};

export const initCalculatorStore = (): CalculatorState => {
  return defaultInitState;
};

export const createCalculatorStore = (
  initState: CalculatorState = defaultInitState
) => {
  return createStore<CalculatorStore>()((set) => ({
    ...initState,
    setBillAmount: (billAmount) =>
      set((state) => {
        const results = calculateResults(
          +billAmount,
          +state.numberOfPeople,
          state.tipPercentage || 0
        );

        return {
          billAmount,
          results,
        };
      }),
    setTipPercentage: (tipPercentage) =>
      set((state) => {
        const results = calculateResults(
          +state.billAmount,
          +state.numberOfPeople,
          tipPercentage || 0
        );
        console.log(`tipPercentage: ${tipPercentage}`);

        return {
          tipPercentage,
          results,
        };
      }),
    setNumberOfPeople: (numberOfPeople) =>
      set((state) => {
        const results = calculateResults(
          +state.billAmount,
          +numberOfPeople,
          state.tipPercentage || 0
        );

        return {
          numberOfPeople,
          results,
        };
      }),
    resetBill: () =>
      set(() => {
        return defaultInitState;
      }),
  }));
};

function calculateResults(
  billAmount: number,
  numberOfPeople: number,
  tipPercentage: number
): SplitResults {
  const totalTip = billAmount * tipPercentage * 0.01;
  const tipPerPerson = totalTip / numberOfPeople;
  const totalPerPerson = billAmount / numberOfPeople + tipPerPerson;

  return {
    tipPerPerson,
    totalPerPerson,
  };
}
