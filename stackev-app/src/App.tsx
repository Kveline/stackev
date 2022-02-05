import "./App.css";
import Individual from "./models/individual";
import Priority from "./models/priority";
let rouletteWheelSelection = require("roulette-wheel-selection");

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

    let fitnessFrontend = 0;
    let fitnessBackend = 0;
    let fitnessDbms = 0;

    if (frontendAttribute && backendAttribute && dbmsAttribute) {
      // fitness frontend
      fitnessFrontend =
        frontendAttribute.skalabilitas * priority.skalabilitas +
        frontendAttribute.toolsSupport * priority.toolsSupport +
        frontendAttribute.communitySize * priority.communitySize -
        frontendAttribute.costLevel * priority.costLevel +
        frontendAttribute.maturity * priority.maturity;

      // fitness backend
      fitnessBackend =
        backendAttribute.skalabilitas * priority.skalabilitas +
        backendAttribute.toolsSupport * priority.toolsSupport +
        backendAttribute.communitySize * priority.communitySize -
        backendAttribute.costLevel * priority.costLevel +
        backendAttribute.maturity * priority.maturity;
      // fitness dbms
      fitnessDbms =
        dbmsAttribute.skalabilitas * priority.skalabilitas +
        dbmsAttribute.toolsSupport * priority.toolsSupport +
        dbmsAttribute.communitySize * priority.communitySize -
        dbmsAttribute.costLevel * priority.costLevel +
        dbmsAttribute.maturity * priority.maturity;
    }

    // fitness total
    let fitnessTotal = fitnessFrontend + fitnessBackend + fitnessDbms;
    individu.fitness = fitnessTotal;

    return individu;
  };

  // add fitness value to a population
  let fitnessPopulation = (population: Individual[]) =>
    population.map((individual) =>
      fitnessValue(individual, DUMMY_INPUT.priorityScore)
    );

  // selection, roultte wheel
  const selection = (
    population: Individual[],
    numberOfSelected: number
  ): Individual[] => {
    let selectedIndividuals = [];

    for (let i = 0; i < numberOfSelected; i++) {
      selectedIndividuals.push(rouletteWheelSelection(population, "fitness"));
    }
    return selectedIndividuals;
  };

  // single point crossover, mainin array.slice
  const crossover = (
    individuals: Individual[],
    pc: number,
    totalPopulation: number
  ): Individual[] => {
    let totalOffspring = pc * totalPopulation;

    let listOffspring: Individual[] = [];

    while (listOffspring.length < totalOffspring) {
      // get parent index
      let indexParent1 = Math.floor(Math.random() * individuals.length);
      let indexParent2;
      do {
        indexParent2 = Math.floor(Math.random() * individuals.length);
      } while (indexParent2 === indexParent1);

      // get each parent
      let parent1 = individuals[indexParent1];
      let parent2 = individuals[indexParent2];
      // random point (single point)
      let point = Math.floor(Math.random() * parent1.encoding.length);

      // offspring gene
      let leftGene = parent1.encoding.slice(0, point);
      let rightGene = parent2.encoding.slice(point, parent2.encoding.length);

      // offspring gene
      let offspring1Gene = leftGene.concat(rightGene);
      let offspring2Gene = rightGene.concat(leftGene);

      // offsping object
      let offspring1 = new Individual(offspring1Gene, 0);
      let offspring2 = new Individual(offspring2Gene, 0);

      // push it to list offspring
      listOffspring.push(offspring1, offspring2);

      //  get its fitness
      listOffspring = fitnessPopulation(listOffspring);
    }
    return listOffspring;
  };

  let populationFitness = fitnessPopulation(population);
  let selectionResult = selection(populationFitness, 5);

  let crossoverResult = crossover(selectionResult, 0.5, 10);
  let currentResult = selectionResult.concat(crossoverResult);

  console.log(currentResult);

  return <div className="App"></div>;
}

export default App;
