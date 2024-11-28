import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 2,
    annualInvestment: 3,
    expectedReturn: 5,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(identifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [identifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInputProp={userInput} />
      {inputIsValid ? (
        <Results inputValue={userInput} />
      ) : (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
