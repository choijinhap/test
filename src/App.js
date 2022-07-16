import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const plusButtonClick = () => {
    setCounter((state) => state + 1);
  };
  const minusButtonClick = () => {
    setCounter((state) => state - 1);
  };
  const onoffButtonClick = () => {
    setDisabled((state) => !state);
  };
  return (
    <div>
      <h3 data-testid="counter">{counter}</h3>
      <div>
        <button
          data-testid="minus-button"
          onClick={minusButtonClick}
          disabled={disabled}
        >
          -
        </button>
        <button
          data-testid="plus-button"
          onClick={plusButtonClick}
          disabled={disabled}
        >
          +
        </button>
      </div>
      <div>
        <button
          data-testid="onoff-button"
          onClick={onoffButtonClick}
          style={{ backgroundColor: "blue" }}
        >
          on/off
        </button>
      </div>
    </div>
  );
}

export default App;
