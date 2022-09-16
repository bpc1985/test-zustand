import create from "zustand";
import { devtools } from "zustand/middleware";

import clicksSlice, { IClicksSlice } from "./clicksSlice";

export interface IMyStore extends IClicksSlice {}

export const useMyStore = create<IMyStore>()(
  devtools(
    (...args) => ({
      ...clicksSlice(...args),
    }),
    { name: "my-zustand" }
  )
);
