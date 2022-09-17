import create from "zustand";
import { devtools } from "zustand/middleware";
import { mountStoreDevtool } from "simple-zustand-devtools";
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

// Inspect your store in React DevTools
if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("myStore", useMyStore);
}
