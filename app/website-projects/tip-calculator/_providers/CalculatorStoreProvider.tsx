"use client";

import { createContext, ReactNode, useContext, useRef } from "react";
import {
  createCalculatorStore,
  initCalculatorStore,
  CalculatorStore,
} from "../_stores/CalculatorStore";
import { useStore } from "zustand";

export type CalculatorStoreApi = ReturnType<typeof createCalculatorStore>;

export const CalculatorStoreContext = createContext<
  CalculatorStoreApi | undefined
>(undefined);

export type CalculatorStoreProviderProps = {
  children: ReactNode;
};

export const CalculatorStoreProvider = ({
  children,
}: CalculatorStoreProviderProps) => {
  const storeRef = useRef<CalculatorStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createCalculatorStore(initCalculatorStore());
  }

  return (
    <CalculatorStoreContext.Provider value={storeRef.current}>
      {children}
    </CalculatorStoreContext.Provider>
  );
};

export const useCalculatorStore = <T,>(
  selector: (store: CalculatorStore) => T,
): T => {
  const calculatorStoreContext = useContext(CalculatorStoreContext);

  if (!calculatorStoreContext) {
    throw new Error(
      `useCalculatorStore must be used within CalculatorStoreProvider`,
    );
  }

  return useStore(calculatorStoreContext, selector);
};
