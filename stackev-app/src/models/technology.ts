type TechnologySide = "Frontend" | "Backend" | "DBMS";
type Binary = 1 | 0;

interface TechnologyAttribute {
  skalabilitas: number;
  toolsSupport: number;
  communitySize: number;
  costLevel: number;
  maturity: number;
}

class Technology {
  encoding: [Binary, Binary, Binary];
  name: string;
  side: TechnologySide;
  attributeScore: TechnologyAttribute;

  constructor(
    techEncoding: [Binary, Binary, Binary],
    techName: string,
    techSide: TechnologySide,
    techAttribute: TechnologyAttribute
  ) {
    this.encoding = techEncoding;
    this.name = techName;
    this.side = techSide;
    this.attributeScore = techAttribute;
  }
}

export default Technology;
