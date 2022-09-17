import { StateCreator } from "zustand";

export interface IPropertiesSlice {
  readonly properties: number;
  increaseProperties: () => void;
  resetProperties: () => void;
}

const propertiesSlice: StateCreator<
  IPropertiesSlice,
  [["zustand/devtools", never], ["zustand/immer", never]]
> = (set, get) => ({
  properties: 0,
  increaseProperties: () => {
    // set((state) => ({ properties: state.properties + 1 }));
    set((state) => void (state.properties += 1));
  },
  resetProperties: () => {
    set({ properties: 0 });
  },
});

export default propertiesSlice;
