import { StateCreator, StoreApi } from "zustand";
// import produce from "immer";

export interface IPropertiesSlice {
  readonly properties: number;
  increaseProperties: () => void;
  resetProperties: () => void;
}

const propertiesSlice: StateCreator<
  IPropertiesSlice,
  [["zustand/devtools", never]]
> = (set, get) => ({
  properties: 0,
  increaseProperties: () => {
    set((state) => ({ properties: state.properties + 1 }));
  },
  resetProperties: () => {
    set({ properties: 0 });
  },
});

export default propertiesSlice;
