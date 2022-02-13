import "./App.css";
import { geneticAlgorithm } from "./helper/GeneticAlgorithm";
import useInput from "./hooks/useInput";

function App() {
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

  // input community size
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

  // checking all input is valid
  let formIsValid = false;

  if (
    enteredSkalabilitasIsValid &&
    enteredToolsSupportIsValid &&
    enteredCommunitySizeIsValid &&
    enteredCostLevelIsValid &&
    enteredMaturityIsValid
  ) {
    formIsValid = true;
  }

  // create individual
  const result = geneticAlgorithm(6, 10, 0.5, 0.1, 5);
  console.log(result);
  // {result[0].backend.name} {result[0].frontend.name} {result[0].dbms.name}
  return (
    <div className="App">
      <div className="w-full max-w-xs m-auto mt-10">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
          {/* input skalabilitas */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Skalabilitas
            </label>
            <input
              onChange={skalabilitasChangedHandler}
              value={enteredSkalabilitas}
              onBlur={skalabilitasBlurHandler}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
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
              Tools Support
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
              Community Size
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
              Cost Level
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
              Maturity
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
    </div>
  );
}

export default App;
