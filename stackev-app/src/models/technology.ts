type TechnologySide = "Frontend" | "Backend" | "DBMS";

interface TechnologyAttribute {
  Skalabilitas: number;
  toolsSupport: number;
  communitySize: number;
  costLevel: number;
  maturity: number;
}

class Technology {
  name: string;
  side: TechnologySide;
  attributeScore: TechnologyAttribute;

  constructor(
    techName: string,
    techSide: TechnologySide,
    techAttribute: TechnologyAttribute
  ) {
    this.name = techName;
    this.side = techSide;
    this.attributeScore = techAttribute;
  }
}

export default Technology;
