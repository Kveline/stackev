import { useState } from "react";
import "./App.css";
import { geneticAlgorithm } from "./helper/GeneticAlgorithm";

function App() {
  // TODO : bikin variabel total ouput techstach yang diinginkan

  // create individual
  console.log(geneticAlgorithm(6, 10, 0.5, 0.1, 500));

  return <div className="App"></div>;
}

export default App;
