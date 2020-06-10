import "./app.scss";
import React, { useReducer, useContext } from "react";

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
      throw new Error();
  }
}

const CounterContext = React.createContext<{
  state: CounterState;
  dispatch: (action: CounterAction) => void;
}>(undefined);

function CounterApp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <div>
        <span>Count: </span>
        <span>{state.count}</span>
      </div>
      <Buttons />
    </CounterContext.Provider>
  );
}

function Buttons() {
  const { dispatch } = useContext(CounterContext);

  function handleClickPlus(e: React.MouseEvent): void {
    dispatch({ type: "increment" });
  }

  function handleClickMinus(e: React.MouseEvent): void {
    dispatch({ type: "decrement" });
  }

  return (
    <div>
      <button onClick={handleClickPlus}>+</button>
      <button onClick={handleClickMinus}>-</button>
    </div>
  );
}

export default CounterApp;
