import { StateCreator, StoreApi } from "zustand";

export interface IPlanetNamesSlice {
  readonly planetNames: string[];
  getPlanetNames: () => Promise<void>;
  setPlanetNames: (data: string[]) => void;
}

const planetNamesSlice: StateCreator<
  IPlanetNamesSlice,
  [["zustand/devtools", never]]
> = (set, get) => ({
  planetNames: [],
  getPlanetNames: async () => {
    const planetsData = await (
      await fetch("https://swapi.dev/api/planets")
    ).json();
    set({ planetNames: planetsData.results.map((pd: any) => pd.name) });
  },
  setPlanetNames: (data: string[]) => {
    set({ planetNames: data });
  },
});

export default planetNamesSlice;
