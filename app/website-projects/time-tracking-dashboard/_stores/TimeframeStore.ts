import { createStore } from "zustand/vanilla";
import { TimeframeChoices } from "../_types/Timeframe";

export type TimeframeState = {
  timeframe: TimeframeChoices;
};

export type TimeframeActions = {
  setTimeframe: (timeframe: TimeframeChoices) => void;
};

export type TimeframeStore = TimeframeState & TimeframeActions;

export const defaultInitState: TimeframeState = {
  timeframe: "weekly",
};

export const initTimeframeStore = (): TimeframeState => {
  return defaultInitState;
};

export const createTimeframeStore = (
  initState: TimeframeState = defaultInitState
) => {
  return createStore<TimeframeStore>()((set) => ({
    ...initState,
    setTimeframe: (tf) => set(() => ({ timeframe: tf })),
  }));
};
