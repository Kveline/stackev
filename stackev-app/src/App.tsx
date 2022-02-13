import "./App.css";
import { geneticAlgorithm } from "./helper/GeneticAlgorithm";
import useInput from "./hooks/useInput";

function App() {
  const {
    value: enteredSkalabilitas,
    isValid: enteredSkalabilitasIsValid,
    hasError: skalabilitasInputHasError,
    valueChangeHandler: skalabilitasChangedHandler,
    inputBlurHandler: skalabilitasBlurHandler,
  } = useInput(
    (value: any) => value.trim() !== "" && +value > -1 && +value < 11
  );

  // checking all input is valid
  let formIsValid = false;

  if (enteredSkalabilitasIsValid) {
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
        </form>
      </div>
    </div>
  );
}

export default App;
