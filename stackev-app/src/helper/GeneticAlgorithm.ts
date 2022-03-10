import Individual from "../models/individual";
import Priority from "../models/priority";
let rouletteWheelSelection = require("roulette-wheel-selection");

// input user
let USER_INPUT: Priority;

var arraysMatch = (arr1: any[], arr2: any[]): boolean => {
  // Check if the arrays are the same length
  if (arr1.length !== arr2.length) return false;

  // Check if all items exist and are in the same order
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  // Otherwise, return true
  return true;
};

const createIndividual = (length: number): Individual => {
  let encoding = new Array(length).fill(1).map(() => Math.round(Math.random()));
  // initialy fitness
  let fitnessValue = 0;
  let individual = new Individual(encoding, fitnessValue);
  return individual;
};

//create population
const createPopulation = (length: number): Individual[] => {
  let population = new Array(length).fill(1).map(() => createIndividual(9));
  return population;
};

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
    fitnessValue(individual, USER_INPUT.priorityScore)
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

// single point crossover
const crossover = (
  population: Individual[],
  probabilityCrossover: number,
  totalPopulation: number
): Individual[] => {
  let totalOffspring = probabilityCrossover * totalPopulation;

  let listOffspring: Individual[] = [];

  while (listOffspring.length < totalOffspring) {
    // get parent index
    let indexParent1 = Math.floor(Math.random() * population.length);
    let indexParent2;
    do {
      indexParent2 = Math.floor(Math.random() * population.length);
    } while (indexParent2 === indexParent1);

    // get each parent
    let parent1 = population[indexParent1];
    let parent2 = population[indexParent2];
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
  return population.concat(listOffspring);
};

const getRandomArbitrary = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

// flip mutation
const mutation = (
  population: Individual[],
  probabilityMutation: number
): Individual[] => {
  let point;
  for (let index in population) {
    let chance = getRandomArbitrary(0, 1);
    if (chance < probabilityMutation) {
      // random flip point
      point = Math.floor(Math.random() * population[index].encoding.length);
      //flipping;
      if (population[index].encoding[point] === 1) {
        population[index].encoding[point] = 0;
      } else {
        population[index].encoding[point] = 1;
      }
    }
  }
  return fitnessPopulation(population);
};

// concat and sort
const concatAndSort = (
  array1: Individual[],
  array2: Individual[],
  n: number
): Individual[] => {
  let combined = [...array1, ...array2];
  // remove duplicate
  combined = combined.filter(
    (value, index, self) =>
      index === self.findIndex((t) => arraysMatch(t.encoding, value.encoding))
  );
  combined.sort((a, b) => (a.fitness > b.fitness ? -1 : 1));
  return combined.slice(0, n);
};

// sort fitness to a population
export const geneticAlgorithm = (
  userInput: Priority,
  totalOutput: number,
  totalPopulation: number,
  probabilityCrossover: number,
  probabilityMutation: number,
  totalGeneration: number
) => {
  USER_INPUT = userInput;

  let bestIndividuals: Individual[] = [];

  for (let i = 0; i < totalGeneration; i++) {
    let newPopulation = createPopulation(10);
    // elitsm strategy
    if (i > 0) {
      newPopulation = concatAndSort(
        newPopulation,
        bestIndividuals,
        totalPopulation
      );
    }

    // mencari nilai fitness
    let populationFitness = fitnessPopulation(newPopulation);
    // melakukan seleksi
    let selectionResult = selection(populationFitness, 5);

    // melakukan crossover
    let crossoverResult = crossover(
      selectionResult,
      probabilityCrossover,
      totalPopulation
    );
    // populasi setelah mutasi
    let mutationResult = mutation(crossoverResult, probabilityMutation);
    // sort berdsarkan fitness terbaik
    mutationResult.sort((a, b) => (a.fitness > b.fitness ? -1 : 1));

    let eliteIndividual = mutationResult.slice(0, totalOutput);
    let newBestIndividuals: Individual[] = concatAndSort(
      eliteIndividual,
      bestIndividuals,
      totalOutput
    );

    bestIndividuals = newBestIndividuals;
  }

  return bestIndividuals;
};
