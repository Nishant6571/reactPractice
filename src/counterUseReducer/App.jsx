import { useReducer } from "react";
import "./App.css";
import { countReducer, initialState } from "./reducer";

function App() {
  const [state, dispatch] = useReducer(countReducer, initialState);
  return (
    <>
      <h1>Counter App</h1>
      <p>count:{state.count}</p>
      <button onClick={() => dispatch({ type: "Increment" })}>+</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>-</button>
    </>
  );
}

export default App;
