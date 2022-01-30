import "./App.css";
import { frontend, backend, dbms } from "./dataset/technologyList";

function App() {
  console.log(Object.values(frontend));

  // create individual
  const createIndividual = (length: number): number[] => {
    let individual = new Array(length)
      .fill(1)
      .map(() => Math.round(Math.random()));

    return individual;
  };

  // create population
  const createPopulation = (length: number): object[] => {
    let population = new Array(length).fill(1).map(() => createIndividual(9));
    return population;
  };

  let x: any = createPopulation(50);
  console.log(x);

  return <div className="App">{createPopulation(50)}</div>;
}

export default App;
