import create from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import propertiesSlice, { IPropertiesSlice } from "./propertiesSlice";
import planetNamesSlice, { IPlanetNamesSlice } from "./planetNamesSlice";

export interface ITestStore extends IPropertiesSlice, IPlanetNamesSlice {}

export const useTestStore = create<ITestStore>()(
  devtools(
    immer((...args) => ({
      ...propertiesSlice(...args),
      ...planetNamesSlice(...args),
    })),
    { name: "test-zustand" }
  )
);
