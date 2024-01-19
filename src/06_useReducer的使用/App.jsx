import React, { memo, useReducer } from "react";

// useReducer 是state的替代 复杂用法

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "add_number":
      return { ...state, counter: state.counter + action.num };
    case "sub_number":
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
}
const App = memo(() => {
  const [state, dispatch] = useReducer(reducer, { counter: 0, friends: []});
  // const [counter, setCounter] = useState(12);
  return (
    <div>
      <h2>当前计数; {state.counter}</h2>
      <button onClick={(e) => dispatch({ type: "increment" })}>+ 1</button>
      <button onClick={(e) => dispatch({ type: "decrement" })}>-1 </button>
      <button onClick={(e) => dispatch({ type: "add_number", num: 5 })}>
        + 5
      </button>
      <button onClick={(e) => dispatch({ type: "sub_number", num: 5 })}>
        -5
      </button>
    </div>
  );
});

export default App;
