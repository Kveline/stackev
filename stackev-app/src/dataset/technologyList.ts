import Technology from "../models/technology";

export const frontend = {
  react: new Technology([0, 0, 0], "React", "Frontend", {
    skalabilitas: 5,
    toolsSupport: 2,
    communitySize: 2,
    costLevel: 0,
    maturity: 4,
  }),

  angular: new Technology([0, 0, 1], "Angular", "Frontend", {
    skalabilitas: 4,
    toolsSupport: 2,
    communitySize: 2,
    costLevel: 3,
    maturity: 1,
  }),

  vue: new Technology([0, 1, 0], "Vue", "Frontend", {
    skalabilitas: 4,
    toolsSupport: 1,
    communitySize: 2,
    costLevel: 0,
    maturity: 1,
  }),

  svelte: new Technology([0, 1, 1], "Svelte", "Frontend", {
    skalabilitas: 3,
    toolsSupport: 3,
    communitySize: 2,
    costLevel: 0,
    maturity: 1,
  }),

  preact: new Technology([1, 0, 0], "Preact", "Frontend", {
    skalabilitas: 2,
    toolsSupport: 2,
    communitySize: 3,
    costLevel: 0,
    maturity: 1,
  }),

  ember: new Technology([1, 0, 1], "Ember", "Frontend", {
    skalabilitas: 3,
    toolsSupport: 3,
    communitySize: 2,
    costLevel: 0,
    maturity: 1,
  }),

  listElement: new Technology([1, 1, 0], "List Element", "Frontend", {
    skalabilitas: 2,
    toolsSupport: 2,
    communitySize: 2,
    costLevel: 0,
    maturity: 1,
  }),

  alphine: new Technology([1, 1, 1], "Alphine", "Frontend", {
    skalabilitas: 2,
    toolsSupport: 2,
    communitySize: 2,
    costLevel: 0,
    maturity: 1,
  }),
};
