import "./App.css";
import Individual from "./models/individual";
import Priority from "./models/priority";

// dummy input user
const DUMMY_INPUT = new Priority({
  skalabilitas: 4,
  toolsSupport: 3,
  communitySize: 5,
  costLevel: 1,
  maturity: 4,
});

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

  //create population
  const createPopulation = (length: number): Individual[] => {
    let population = new Array(length).fill(1).map(() => createIndividual(9));
    return population;
  };

  let individu = createIndividual(9);
  let population = createPopulation(10);

  //fitness function
  const fitnessValue = (individu: any, priority: any): Individual => {
    let frontendAttribute = individu.frontend.attributeScore;
    let backendAttribute = individu.backend.attributeScore;
    let dbmsAttribute = individu.dbms.attributeScore;
    // fitness frontend
    let fitnessFrontend =
      frontendAttribute.skalabilitas * priority.skalabilitas +
      frontendAttribute.toolsSupport * priority.toolsSupport +
      frontendAttribute.communitySize * priority.communitySize -
      frontendAttribute.costLevel * priority.costLevel +
      frontendAttribute.maturity * priority.maturity;
    // fitness backend
    let fitnessBackend =
      backendAttribute.skalabilitas * priority.skalabilitas +
      backendAttribute.toolsSupport * priority.toolsSupport +
      backendAttribute.communitySize * priority.communitySize -
      backendAttribute.costLevel * priority.costLevel +
      backendAttribute.maturity * priority.maturity;
    // fitness dbms
    let fitnessDbms =
      dbmsAttribute.skalabilitas * priority.skalabilitas +
      dbmsAttribute.toolsSupport * priority.toolsSupport +
      dbmsAttribute.communitySize * priority.communitySize -
      dbmsAttribute.costLevel * priority.costLevel +
      dbmsAttribute.maturity * priority.maturity;

    // fitness total
    let fitnessTotal = fitnessFrontend + fitnessBackend + fitnessDbms;
    individu.fitness = fitnessTotal;

    return individu;
  };

  let fitnessPopulation = population.map((individual) =>
    fitnessValue(individual, DUMMY_INPUT.priorityScore)
  );

  // selection, roultte wheel bisa terpilih lebih dari 1x
  // https://stackoverflow.com/questions/50739124/random-number-with-percentage

  console.log(fitnessPopulation);

  return <div className="App"></div>;
}

export default App;
