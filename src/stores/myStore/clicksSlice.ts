import { StateCreator } from "zustand";

export interface IClicksSlice {
  readonly clicks: number;
  increaseClicks: () => void;
  resetClicks: () => void;
}

const clicksSlice: StateCreator<IClicksSlice, [["zustand/devtools", never]]> = (
  set,
  get
) => ({
  clicks: 0,
  increaseClicks: () => {
    set((state) => ({ clicks: state.clicks + 1 }));
  },
  resetClicks: () => {
    set({ clicks: 0 });
  },
});

export default clicksSlice;
