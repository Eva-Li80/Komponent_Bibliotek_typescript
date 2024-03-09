import React, { useReducer } from "react";



type InitialState = {
    count: number;
  };

  type Action = {
    type: string;
    payload: number;
  };

  const initialState: InitialState = {
    count: 0,
  };

  const reducer = (state: InitialState, action: Action): InitialState => {
    switch (action.type) {
      case "increment":
        return { count: state.count + action.payload };
      case "decrement":
        return { count: state.count - action.payload };
      case "reset":
        return { count: (state.count = action.payload) };
      default:
        return state;
    }
  };

  const CountReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const increment = () => {
      dispatch({ type: "increment", payload: 1 });
    };

    const decrement = () => {
      dispatch({ type: "decrement", payload: 1 });
    };

    const reset = () => {
      dispatch({ type: "reset", payload: 0 });
    };

    return (
      <div className="countreduser">
        <div className="count">
          <h2>Count: {state.count}</h2>
        </div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  };

  export default CountReducer;
