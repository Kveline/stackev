import { frontend, backend, dbms } from "../dataset/technologyList";

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

const attribute = {
  skalabilitas: 0,
  toolsSupport: 0,
  communitySize: 0,
  costLevel: 0,
  maturity: 0,
};

class Individual {
  encoding: number[];
  fitness: number;

  constructor(encoding: number[], fitnessValue: number) {
    this.encoding = encoding;
    this.fitness = fitnessValue;
  }

  get frontend() {
    let key: keyof object[];
    let listFrontEnd = Object.values(frontend);
    let encodingFrontend: number[] = this.encoding.slice(0, 3);

    for (key in listFrontEnd) {
      if (arraysMatch(listFrontEnd[key].encoding, encodingFrontend)) {
        return listFrontEnd[key];
      }
    }
    return attribute;
  }

  get backend() {
    let key: keyof object[];
    let listBackend = Object.values(backend);
    let encodingBackend: number[] = this.encoding.slice(3, 6);

    for (key in listBackend) {
      if (arraysMatch(listBackend[key].encoding, encodingBackend)) {
        return listBackend[key];
      }
    }
    return attribute;
  }

  get dbms() {
    let key: keyof object[];
    let listDbms = Object.values(dbms);
    let encodingDbms: number[] = this.encoding.slice(6, 9);

    for (key in listDbms) {
      if (arraysMatch(listDbms[key].encoding, encodingDbms)) {
        return listDbms[key];
      }
    }
    return attribute;
  }
}

export default Individual;
