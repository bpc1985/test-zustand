import { FC } from "react";
import { useTestStore } from "./stores";

interface IHello {
  name: string;
}

const Hello: FC<IHello> = ({ name }) => {
  const increaseProperties = useTestStore((state) => state.increaseProperties);
  const getPlanetNames = useTestStore((state) => state.getPlanetNames);

  return (
    <div>
      <h1>Hello {name}!</h1>
      <button onClick={increaseProperties}>Increase from Hello</button>
      <button onClick={getPlanetNames}>Get Planet Names</button>
    </div>
  );
};

export default Hello;
