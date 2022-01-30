interface TechnologyAttribute {
  Skalabilitas: number;
  toolsSupport: number;
  communitySize: number;
  costLevel: number;
  maturity: number;
}

class Priority {
  priorityScore: TechnologyAttribute;

  constructor(userPriority: TechnologyAttribute) {
    this.priorityScore = userPriority;
  }
}

export default Priority;
