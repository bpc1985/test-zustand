import { StateCreator } from "zustand";
import produce from "immer";

export interface IClicksSlice {
  clicks: number;
  increaseClicks: () => void;
  increaseClicks2: () => void;
  resetClicks: () => void;
}

const increase = (draft: IClicksSlice) => {
  draft.clicks = draft.clicks + 1;
};

// https://immerjs.github.io/immer/typescript
const increase2 = produce<IClicksSlice>((draft) => {
  draft.clicks = draft.clicks + 1;
});

const clicksSlice: StateCreator<IClicksSlice, [["zustand/devtools", never]]> = (
  set,
  get
) => ({
  clicks: 0,
  increaseClicks: () => {
    // set((state) => ({ clicks: state.clicks + 1 }));
    set((state) => produce(state, increase));
  },
  increaseClicks2: () => {
    // set((state) =>
    //   produce(state, (draft) => {
    //     draft.clicks = draft.clicks + 1;
    //   })
    // );
    set(increase2); // using https://immerjs.github.io/immer/curried-produce
  },
  resetClicks: () => {
    set({ clicks: 0 });
  },
});

export default clicksSlice;
