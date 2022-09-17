import { FC } from "react";
import { ITestStore, useTestStore } from "./stores";
import {
  createSelectorFunctions,
  ZustandFuncSelectors,
  createSelectorHooks,
  ZustandHookSelectors,
} from "auto-zustand-selectors-hook";

interface IHello {
  name: string;
}

// Wrap test store
const testStoreFn1 = createSelectorFunctions(
  useTestStore
) as typeof useTestStore & ZustandFuncSelectors<ITestStore>;

const testStoreFn2 = createSelectorHooks(useTestStore) as typeof useTestStore &
  ZustandHookSelectors<ITestStore>;

const Hello: FC<IHello> = ({ name }) => {
  // const increaseProperties = useTestStore((state) => state.increaseProperties);
  // const getPlanetNames = useTestStore((state) => state.getPlanetNames);

  const increaseProperties1 = testStoreFn1.use.increaseProperties();
  const getPlanetNames1 = testStoreFn1.use.getPlanetNames();

  const increaseProperties2 = testStoreFn2.useIncreaseProperties();
  const getPlanetNames2 = testStoreFn2.useGetPlanetNames();

  return (
    <div>
      <h1>Hello {name}!</h1>
      <button onClick={increaseProperties1}>Increase from Hello [1]</button>
      <button onClick={getPlanetNames1}>Get Planet Names [1]</button>
      <br />
      <button onClick={increaseProperties2}>Increase from Hello [2]</button>
      <button onClick={getPlanetNames2}>Get Planet Names [2]</button>
    </div>
  );
};

export default Hello;
