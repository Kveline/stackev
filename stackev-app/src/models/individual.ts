import Technology from "./technology";

class Individual {
  fitness: number;
  frontendTechnology: Technology;
  backendTechnology: Technology;
  dbmsTechnology: Technology;

  constructor(
    fitnessValue: number,
    frontendTech: Technology,
    backendTech: Technology,
    dbmsTech: Technology
  ) {
    this.fitness = fitnessValue;
    this.frontendTechnology = frontendTech;
    this.backendTechnology = backendTech;
    this.dbmsTechnology = dbmsTech;
  }
}

export default Individual;
