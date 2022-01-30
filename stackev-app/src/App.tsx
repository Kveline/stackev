import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { frontend, backend, dbms } from "./dataset/technologyList";

function App() {
  console.log(Object.values(frontend));

  // bikin individu
  const createIndividual = (length: number): number[] => {
    let individual = new Array(length)
      .fill(1)
      .map(() => Math.round(Math.random()));

    return individual;
  };

  console.log(createIndividual(9));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
