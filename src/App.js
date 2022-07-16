import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const plusButtonClick = () => {
    setCounter((count) => count + 1);
  };
  const minusButtonClick = () => {
    setCounter((count) => count - 1);
  };
  return (
    <div>
      <h3 data-testid="counter">{counter}</h3>
      <div>
        <button data-testid="minus-button" onClick={minusButtonClick}>
          -
        </button>
        <button data-testid="plus-button" onClick={plusButtonClick}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
