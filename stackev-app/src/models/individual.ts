import { frontend, backend, dbms } from "../dataset/technologyList";
import Technology from "./technology";

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

class Individual {
  encoding: number[];
  fitness: number;

  constructor(encoding: number[], fitnessValue: number) {
    this.encoding = encoding;
    this.fitness = fitnessValue;
  }

  get frontend(): Technology {
    let listFrontEnd = Object.values(frontend);
    let encodingFrontend: number[] = this.encoding.slice(0, 3);

    let tech = listFrontEnd.filter((frontend) =>
      arraysMatch(frontend.encoding, encodingFrontend)
    );

    return tech[0];
  }

  get backend(): Technology {
    let listBackend = Object.values(backend);
    let encodingBackend: number[] = this.encoding.slice(3, 6);

    let tech = listBackend.filter((backend) =>
      arraysMatch(backend.encoding, encodingBackend)
    );

    return tech[0];
  }

  get dbms(): Technology {
    let listDbms = Object.values(dbms);
    let encodingDbms: number[] = this.encoding.slice(6, 9);

    let tech = listDbms.filter((dbms) =>
      arraysMatch(dbms.encoding, encodingDbms)
    );

    return tech[0];
  }
}

export default Individual;
