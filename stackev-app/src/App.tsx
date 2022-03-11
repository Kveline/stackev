import React, { useState } from "react";
import "./App.css";
import Priority from "./models/priority";
import { geneticAlgorithm } from "./helper/GeneticAlgorithm";
import useInput from "./hooks/useInput";
import Individual from "./models/individual";

function App() {
  const [result, setResult] = useState<Individual[]>([]);

  // input skalabilitas
  const {
    value: enteredSkalabilitas,
    isValid: enteredSkalabilitasIsValid,
    hasError: skalabilitasInputHasError,
    valueChangeHandler: skalabilitasChangedHandler,
    inputBlurHandler: skalabilitasBlurHandler,
  } = useInput(
    (value: any) => value.trim() !== "" && +value > -1 && +value < 11
  );

  // input tool support
  const {
    value: enteredToolsSupport,
    isValid: enteredToolsSupportIsValid,
    hasError: toolsSupportInputHasError,
    valueChangeHandler: toolsSupportChangedHandler,
    inputBlurHandler: toolsSupportBlurHandler,
  } = useInput(
    (value: any) => value.trim() !== "" && +value > -1 && +value < 11
  );

  // input community size
  const {
    value: enteredCommunitySize,
    isValid: enteredCommunitySizeIsValid,
    hasError: communitySizeInputHasError,
    valueChangeHandler: communitySizeChangedHandler,
    inputBlurHandler: communitySizeBlurHandler,
  } = useInput(
    (value: any) => value.trim() !== "" && +value > -1 && +value < 11
  );

  // input cost level
  const {
    value: enteredCostLevel,
    isValid: enteredCostLevelIsValid,
    hasError: costLevelInputHasError,
    valueChangeHandler: costLevelChangedHandler,
    inputBlurHandler: costLevelBlurHandler,
  } = useInput(
    (value: any) => value.trim() !== "" && +value > -1 && +value < 11
  );

  // input maturity
  const {
    value: enteredMaturity,
    isValid: enteredMaturityIsValid,
    hasError: maturityInputHasError,
    valueChangeHandler: maturityChangedHandler,
    inputBlurHandler: maturityBlurHandler,
  } = useInput(
    (value: any) => value.trim() !== "" && +value > -1 && +value < 11
  );

  // parameter GA
  // total populasi
  const {
    value: enteredPopulation,
    isValid: enteredPopulationIsValid,
    hasError: populationInputHasError,
    valueChangeHandler: populationChangedHandler,
    inputBlurHandler: populationBlurHandler,
  } = useInput(
    (value: any) => value.trim() !== "" && +value > 1 && +value < 51
  );

  // total generasi
  const {
    value: enteredGeneration,
    isValid: enteredGenerationIsValid,
    hasError: generationInputHasError,
    valueChangeHandler: generationChangedHandler,
    inputBlurHandler: generationBlurHandler,
  } = useInput(
    (value: any) => value.trim() !== "" && +value > 0 && +value < 1001
  );

  // probabilitas crossover
  const {
    value: enteredPc,
    isValid: enteredPcIsValid,
    hasError: pcInputHasError,
    valueChangeHandler: pcChangedHandler,
    inputBlurHandler: pcBlurHandler,
  } = useInput(
    (value: any) => value.trim() !== "" && +value > -1 && +value < 1.1
  );

  // probabilitas mutasi
  const {
    value: enteredPm,
    isValid: enteredPmIsValid,
    hasError: pmInputHasError,
    valueChangeHandler: pmChangedHandler,
    inputBlurHandler: pmBlurHandler,
  } = useInput(
    (value: any) => value.trim() !== "" && +value > -1 && +value < 1.1
  );

  // total output
  const {
    value: enteredOutput,
    isValid: enteredOutputIsValid,
    hasError: outputInputHasError,
    valueChangeHandler: outputChangedHandler,
    inputBlurHandler: outputBlurHandler,
  } = useInput(
    (value: any) =>
      value.trim() !== "" && +value > 0 && +value < +enteredPopulation
  );

  // checking all input is valid
  let formIsValid = false;

  if (
    enteredSkalabilitasIsValid &&
    enteredToolsSupportIsValid &&
    enteredCommunitySizeIsValid &&
    enteredCostLevelIsValid &&
    enteredMaturityIsValid &&
    enteredPopulationIsValid &&
    enteredGenerationIsValid &&
    enteredPcIsValid &&
    enteredPmIsValid &&
    enteredOutputIsValid
  ) {
    formIsValid = true;
  }

  let content: any = <p>Fill the form!</p>;

  const findTechstack = (event: React.FormEvent<EventTarget>): void => {
    event.preventDefault();
    let userInput = new Priority({
      skalabilitas: +enteredSkalabilitas,
      toolsSupport: +enteredToolsSupport,
      communitySize: +enteredCommunitySize,
      costLevel: +enteredCostLevel,
      maturity: +enteredMaturity,
    });
    let GA = geneticAlgorithm(
      userInput,
      enteredOutput,
      enteredPopulation,
      enteredPc,
      enteredPm,
      enteredGeneration
    );

    setResult(GA);
    // scroll to bottom

    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 200);

    console.log(result, content);
  };

  content = result.map((tech, index) => {
    return (
      <div
        key={index}
        className="my-6 bg-white shadow-md rounded px-8 pt-6 pb-8 w-1/6 text-left flex flex-col justify-between"
      >
        <div className="mb-4">
          <p className="text-sm">Frontend</p>
          <p className="font-bold text-lg">{tech.frontend.name}</p>
        </div>

        <div className="mb-4">
          <p className="text-sm">Backend</p>
          <p className="font-bold text-lg">{tech.backend.name}</p>
        </div>

        <div className="mb-8">
          <p className="text-sm">DBMS</p>
          <p className="font-bold text-lg">{tech.dbms.name}</p>
        </div>

        <div className="text-center">
          <p className="text-sm">Score</p>
          <p className="font-black text-2xl text-gray">{tech.fitness}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="App">
      {/* judul */}
      <div className="mt-14">
        <h1 className="font-bold text-3xl">
          Technology Stack Recommender System
        </h1>
        <p className="mt-4 font-medium text-2xl">
          using <span className="font-bold">Genetic Algorithm</span>{" "}
        </p>
      </div>
      {/* end of judul */}

      <div className="flex justify-center">
        <div className="w-full max-w-xs mt-10 flex">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
            {/* judul */}
            <h2 className="mb-4 pb-4 font-bold text-xl border-b-2 border-gray-700">
              Nilai Prioritas <br /> Atribut
            </h2>
            {/* end of judul */}
            {/* input skalabilitas */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Skalabilitas (0-10)
              </label>
              <input
                onChange={skalabilitasChangedHandler}
                value={enteredSkalabilitas}
                onBlur={skalabilitasBlurHandler}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Skalabilitas"
              />
              {skalabilitasInputHasError && (
                <p className="text-rose-500 text-sm">Invalid input!</p>
              )}
            </div>
            {/* end of input skalabilitas */}

            {/* input tool support */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Tools Support (0-10)
              </label>
              <input
                onChange={toolsSupportChangedHandler}
                value={enteredToolsSupport}
                onBlur={toolsSupportBlurHandler}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Tools support"
              />
              {toolsSupportInputHasError && (
                <p className="text-rose-500 text-sm">Invalid input!</p>
              )}
            </div>
            {/* end of input tool support */}

            {/* input Community Size */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Community Size (0-10)
              </label>
              <input
                onChange={communitySizeChangedHandler}
                value={enteredCommunitySize}
                onBlur={communitySizeBlurHandler}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Community Size"
              />
              {communitySizeInputHasError && (
                <p className="text-rose-500 text-sm">Invalid input!</p>
              )}
            </div>
            {/* end of input Community Size */}

            {/* input cost level */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Cost Level (0-10)
              </label>
              <input
                onChange={costLevelChangedHandler}
                value={enteredCostLevel}
                onBlur={costLevelBlurHandler}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Cost level"
              />
              {costLevelInputHasError && (
                <p className="text-rose-500 text-sm">Invalid input!</p>
              )}
            </div>
            {/* end of input cost level */}

            {/* input Maturity */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Maturity (0-10)
              </label>
              <input
                onChange={maturityChangedHandler}
                value={enteredMaturity}
                onBlur={maturityBlurHandler}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Maturity"
              />
              {maturityInputHasError && (
                <p className="text-rose-500 text-sm">Invalid input!</p>
              )}
            </div>
            {/* end of input maturity */}
          </form>
        </div>
        {/* parameter GA */}
        <div className="w-full max-w-xs mt-10">
          <form
            onSubmit={findTechstack}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left"
          >
            {/* judul */}
            <h2 className="mb-4 pb-4 font-bold text-xl border-b-2 border-gray-700">
              Parameter Algoritma Genetika
            </h2>
            {/* end of judul */}
            {/* input populasi */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Total populasi (2-50)
              </label>
              <input
                onChange={populationChangedHandler}
                value={enteredPopulation}
                onBlur={populationBlurHandler}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Total populasi"
              />
              {populationInputHasError && (
                <p className="text-rose-500 text-sm">Invalid input!</p>
              )}
            </div>
            {/* end of input populasi */}

            {/* input otal generasi */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Total generasi (1-1000)
              </label>
              <input
                onChange={generationChangedHandler}
                value={enteredGeneration}
                onBlur={generationBlurHandler}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder=" Total generasi"
              />
              {generationInputHasError && (
                <p className="text-rose-500 text-sm">Invalid input!</p>
              )}
            </div>
            {/* end of input total generasi */}

            {/* input pc */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Probabilitas crossover (0-1)
              </label>
              <input
                onChange={pcChangedHandler}
                value={enteredPc}
                onBlur={pcBlurHandler}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Probabilitas crossover"
              />
              {pcInputHasError && (
                <p className="text-rose-500 text-sm">Invalid input!</p>
              )}
            </div>
            {/* end of input pc */}

            {/* input pm */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Probabilitas mutasi (0-1)
              </label>
              <input
                onChange={pmChangedHandler}
                value={enteredPm}
                onBlur={pmBlurHandler}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Probabilitas mutasi"
              />
              {pmInputHasError && (
                <p className="text-rose-500 text-sm">Invalid input!</p>
              )}
            </div>
            {/* end of input pm */}

            {/* input total output */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Total output (&lt; populasi)
              </label>
              <input
                onChange={outputChangedHandler}
                value={enteredOutput}
                onBlur={outputBlurHandler}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Total output"
              />
              {outputInputHasError && (
                <p className="text-rose-500 text-sm">Invalid input!</p>
              )}
            </div>
            {/* end of input total output */}

            <div className="mt-8">
              <button
                disabled={!formIsValid}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:cursor-not-allowed disabled:bg-gray-400"
                type="submit"
              >
                Find
              </button>
            </div>
          </form>
        </div>
        {/* end of parameter GA */}
      </div>

      <div className="flex justify-center space-x-24 flex-wrap">{content}</div>
    </div>
  );
}

export default App;
