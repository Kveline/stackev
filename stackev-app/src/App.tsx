import "./App.css";
import Individual from "./models/individual";

function App() {
  // create individual
  const createIndividual = (length: number): Individual => {
    let encoding = new Array(length)
      .fill(1)
      .map(() => Math.round(Math.random()));
    // default fitness
    let fitnessValue = 0;

    let individual = new Individual(encoding, fitnessValue);

    return individual;
  };

  console.log(createIndividual(10));

  //create population
  const createPopulation = (length: number): Individual[] => {
    let population = new Array(length).fill(1).map(() => createIndividual(9));
    return population;
  };

  console.log(createPopulation(50));

  //fitness function

  return <div className="App"></div>;
}

export default App;
