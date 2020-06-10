import "./app.scss";
import React, { useReducer } from "react";

type CounterAction =
  | {
      type: "increment";
    }
  | {
      type: "decrement";
    };

interface CounterState {
  count: number;
}

const initialState: CounterState = { count: 0 };

function reducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function CounterApp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleClickPlus(e: React.MouseEvent): void {
    dispatch({ type: "increment" });
  }

  function handleClickMinus(e: React.MouseEvent): void {
    dispatch({ type: "decrement" });
  }

  return (
    <div>
      <div>
        <span>Count: </span>
        <span>{state.count}</span>
      </div>
      <div>
        <button onClick={handleClickPlus}>+</button>
        <button onClick={handleClickMinus}>-</button>
      </div>
    </div>
  );
}

export default CounterApp;
