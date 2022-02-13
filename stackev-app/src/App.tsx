import { useState } from "react";
import "./App.css";
import { geneticAlgorithm } from "./helper/GeneticAlgorithm";

function App() {
  // TODO : bikin variabel total ouput techstach yang diinginkan

  // create individual
  const result = geneticAlgorithm(6, 10, 0.5, 0.1, 5);
  console.log(result);

  return (
    <div className="App">
      {result[0].backend.name} {result[0].frontend.name} {result[0].dbms.name}
    </div>
  );
}

export default App;
