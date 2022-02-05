import Technology from "../models/technology";

// frontend
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

// backend
export const backend = {
  laravel: new Technology([0, 0, 0], "Laravel", "Backend", {
    skalabilitas: 5,
    toolsSupport: 2,
    communitySize: 2,
    costLevel: 0,
    maturity: 4,
  }),

  django: new Technology([0, 0, 1], "Django", "Backend", {
    skalabilitas: 4,
    toolsSupport: 2,
    communitySize: 2,
    costLevel: 3,
    maturity: 1,
  }),

  flask: new Technology([0, 1, 0], "Flask", "Backend", {
    skalabilitas: 4,
    toolsSupport: 1,
    communitySize: 2,
    costLevel: 0,
    maturity: 1,
  }),

  springBoot: new Technology([0, 1, 1], "Spring Boot", "Backend", {
    skalabilitas: 3,
    toolsSupport: 3,
    communitySize: 2,
    costLevel: 0,
    maturity: 1,
  }),

  express: new Technology([1, 0, 0], "Express", "Backend", {
    skalabilitas: 2,
    toolsSupport: 2,
    communitySize: 3,
    costLevel: 0,
    maturity: 1,
  }),

  rubyOnRails: new Technology([1, 0, 1], "Ruby on Rails", "Backend", {
    skalabilitas: 3,
    toolsSupport: 3,
    communitySize: 2,
    costLevel: 0,
    maturity: 1,
  }),

  meteor: new Technology([1, 1, 0], "Meteor", "Backend", {
    skalabilitas: 2,
    toolsSupport: 2,
    communitySize: 2,
    costLevel: 0,
    maturity: 1,
  }),

  nest: new Technology([1, 1, 1], "Nest", "Backend", {
    skalabilitas: 2,
    toolsSupport: 2,
    communitySize: 2,
    costLevel: 0,
    maturity: 1,
  }),
};

// DBMS
export const dbms = {
  oracle: new Technology([0, 0, 0], "Oracle", "DBMS", {
    skalabilitas: 5,
    toolsSupport: 2,
    communitySize: 2,
    costLevel: 0,
    maturity: 4,
  }),

  mysql: new Technology([0, 0, 1], "MySQL", "DBMS", {
    skalabilitas: 4,
    toolsSupport: 2,
    communitySize: 2,
    costLevel: 3,
    maturity: 1,
  }),

  microsoftSqlServer: new Technology(
    [0, 1, 0],
    "Microsoft SQL Server",
    "DBMS",
    {
      skalabilitas: 4,
      toolsSupport: 1,
      communitySize: 2,
      costLevel: 0,
      maturity: 1,
    }
  ),

  postgreSql: new Technology([0, 1, 1], "PostgreSQL", "DBMS", {
    skalabilitas: 3,
    toolsSupport: 3,
    communitySize: 2,
    costLevel: 0,
    maturity: 1,
  }),

  mongoDb: new Technology([1, 0, 0], "MongoDB", "DBMS", {
    skalabilitas: 2,
    toolsSupport: 2,
    communitySize: 3,
    costLevel: 0,
    maturity: 1,
  }),

  redis: new Technology([1, 0, 1], "Redis", "DBMS", {
    skalabilitas: 2,
    toolsSupport: 2,
    communitySize: 2,
    costLevel: 0,
    maturity: 1,
  }),

  ibmDb2: new Technology([1, 1, 0], "IBM Db 2", "DBMS", {
    skalabilitas: 2,
    toolsSupport: 2,
    communitySize: 2,
    costLevel: 0,
    maturity: 1,
  }),

  elasticsearch: new Technology([1, 1, 1], "Elasticsearch", "DBMS", {
    skalabilitas: 2,
    toolsSupport: 2,
    communitySize: 2,
    costLevel: 0,
    maturity: 1,
  }),
};
