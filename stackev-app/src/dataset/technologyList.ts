import Technology from "../models/technology";

// frontend
export const frontend = {
  react: new Technology([0, 0, 0], "React", "Frontend", {
    skalabilitas: 4,
    toolsSupport: 5,
    communitySize: 5,
    costLevel: 0,
    maturity: 5,
  }),

  angular: new Technology([0, 0, 1], "Angular", "Frontend", {
    skalabilitas: 5,
    toolsSupport: 4,
    communitySize: 4,
    costLevel: 0,
    maturity: 3,
  }),

  vue: new Technology([0, 1, 0], "Vue", "Frontend", {
    skalabilitas: 4,
    toolsSupport: 4,
    communitySize: 4,
    costLevel: 0,
    maturity: 4,
  }),

  svelte: new Technology([0, 1, 1], "Svelte", "Frontend", {
    skalabilitas: 5,
    toolsSupport: 3,
    communitySize: 3,
    costLevel: 0,
    maturity: 2,
  }),

  preact: new Technology([1, 0, 0], "Preact", "Frontend", {
    skalabilitas: 3,
    toolsSupport: 3,
    communitySize: 3,
    costLevel: 0,
    maturity: 2,
  }),

  ember: new Technology([1, 0, 1], "Ember", "Frontend", {
    skalabilitas: 4,
    toolsSupport: 3,
    communitySize: 2,
    costLevel: 0,
    maturity: 5,
  }),

  litElement: new Technology([1, 1, 0], "LitElement", "Frontend", {
    skalabilitas: 3,
    toolsSupport: 2,
    communitySize: 2,
    costLevel: 0,
    maturity: 2,
  }),

  alphine: new Technology([1, 1, 1], "Alphine", "Frontend", {
    skalabilitas: 3,
    toolsSupport: 3,
    communitySize: 3,
    costLevel: 0,
    maturity: 2,
  }),
};

// backend
export const backend = {
  laravel: new Technology([0, 0, 0], "Laravel", "Backend", {
    skalabilitas: 3,
    toolsSupport: 5,
    communitySize: 5,
    costLevel: 0,
    maturity: 4,
  }),

  django: new Technology([0, 0, 1], "Django", "Backend", {
    skalabilitas: 4,
    toolsSupport: 3,
    communitySize: 3,
    costLevel: 0,
    maturity: 3,
  }),

  flask: new Technology([0, 1, 0], "Flask", "Backend", {
    skalabilitas: 4,
    toolsSupport: 4,
    communitySize: 4,
    costLevel: 0,
    maturity: 1,
  }),

  springBoot: new Technology([0, 1, 1], "Spring Boot", "Backend", {
    skalabilitas: 3,
    toolsSupport: 3,
    communitySize: 4,
    costLevel: 0,
    maturity: 1,
  }),

  express: new Technology([1, 0, 0], "Express", "Backend", {
    skalabilitas: 4,
    toolsSupport: 5,
    communitySize: 5,
    costLevel: 0,
    maturity: 3,
  }),

  rubyOnRails: new Technology([1, 0, 1], "Ruby on Rails", "Backend", {
    skalabilitas: 3,
    toolsSupport: 3,
    communitySize: 3,
    costLevel: 0,
    maturity: 4,
  }),

  meteor: new Technology([1, 1, 0], "Golang", "Backend", {
    skalabilitas: 5,
    toolsSupport: 4,
    communitySize: 5,
    costLevel: 0,
    maturity: 4,
  }),

  nest: new Technology([1, 1, 1], "Nest", "Backend", {
    skalabilitas: 4,
    toolsSupport: 5,
    communitySize: 3,
    costLevel: 0,
    maturity: 2,
  }),
};

// DBMS
export const dbms = {
  oracle: new Technology([0, 0, 0], "Oracle", "DBMS", {
    skalabilitas: 4,
    toolsSupport: 3,
    communitySize: 3,
    costLevel: 5,
    maturity: 5,
  }),

  mysql: new Technology([0, 0, 1], "MySQL", "DBMS", {
    skalabilitas: 3,
    toolsSupport: 4,
    communitySize: 5,
    costLevel: 1,
    maturity: 5,
  }),

  microsoftSqlServer: new Technology(
    [0, 1, 0],
    "Microsoft SQL Server",
    "DBMS",
    {
      skalabilitas: 3,
      toolsSupport: 2,
      communitySize: 2,
      costLevel: 3,
      maturity: 4,
    }
  ),

  postgreSql: new Technology([0, 1, 1], "PostgreSQL", "DBMS", {
    skalabilitas: 3,
    toolsSupport: 3,
    communitySize: 3,
    costLevel: 1,
    maturity: 4,
  }),

  mongoDb: new Technology([1, 0, 0], "MongoDB", "DBMS", {
    skalabilitas: 5,
    toolsSupport: 4,
    communitySize: 5,
    costLevel: 2,
    maturity: 3,
  }),

  redis: new Technology([1, 0, 1], "Redis", "DBMS", {
    skalabilitas: 3,
    toolsSupport: 3,
    communitySize: 3,
    costLevel: 1,
    maturity: 3,
  }),

  ibmDb2: new Technology([1, 1, 0], "IBM Db 2", "DBMS", {
    skalabilitas: 3,
    toolsSupport: 3,
    communitySize: 2,
    costLevel: 3,
    maturity: 5,
  }),

  elasticsearch: new Technology([1, 1, 1], "Elasticsearch", "DBMS", {
    skalabilitas: 4,
    toolsSupport: 3,
    communitySize: 2,
    costLevel: 3,
    maturity: 3,
  }),
};
