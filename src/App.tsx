import { useState } from "react";
import shallow from "zustand/shallow";
import { useTestStore, useMyStore, ITestStore, IMyStore } from "./stores";
import Hello from "./Hello";

function App() {
  const [name, setName] = useState("React World");

  const { planetNames, properties, increaseProperties, resetProperties } =
    useTestStore(
      (state: ITestStore) => ({
        planetNames: state.planetNames,
        properties: state.properties,
        increaseProperties: state.increaseProperties,
        resetProperties: state.resetProperties,
      }),
      shallow
    );

  const { clicks, increaseClicks, increaseClicks2, resetClicks } = useMyStore(
    (state: IMyStore) => ({
      clicks: state.clicks,
      increaseClicks: state.increaseClicks,
      increaseClicks2: state.increaseClicks2,
      resetClicks: state.resetClicks,
    })
  );

  return (
    <div>
      <Hello name={name} />
      <p>Start editing to see some magic happen :)</p>
      <p>Properties: {properties}</p>
      <button onClick={increaseProperties}>Increase</button>
      <button onClick={resetProperties}>Reset</button>

      {planetNames.length > 0 && (
        <ul>
          {planetNames.map((name, idx) => (
            <li key={idx}>{name}</li>
          ))}
        </ul>
      )}

      <p>Clicks: {clicks}</p>
      <button onClick={increaseClicks}>Increase</button>
      <button onClick={resetClicks}>Reset</button>
      <button onClick={increaseClicks2}>Increase2</button>
    </div>
  );
}

export default App;
