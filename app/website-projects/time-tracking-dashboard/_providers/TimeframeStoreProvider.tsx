"use client";

import { createContext, ReactNode, useContext, useRef } from "react";
import {
  createTimeframeStore,
  initTimeframeStore,
  TimeframeStore,
} from "../_stores/TimeframeStore";
import { useStore } from "zustand";

export type TimeframeStoreApi = ReturnType<typeof createTimeframeStore>;

export const TimeframeStoreContext = createContext<
  TimeframeStoreApi | undefined
>(undefined);

export type TimeframeStoreProviderProps = {
  children: ReactNode;
};

export const TimeframeStoreProvider = ({
  children,
}: TimeframeStoreProviderProps) => {
  const storeRef = useRef<TimeframeStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createTimeframeStore(initTimeframeStore());
  }

  return (
    <TimeframeStoreContext.Provider value={storeRef.current}>
      {children}
    </TimeframeStoreContext.Provider>
  );
};

export const useTimeframeStore = <T,>(
  selector: (store: TimeframeStore) => T
): T => {
  const timeframeStoreContext = useContext(TimeframeStoreContext);

  if (!timeframeStoreContext) {
    throw new Error(
      `useTimeframeStore must be used within TimeframeStoreProvider`
    );
  }

  return useStore(timeframeStoreContext, selector);
};
