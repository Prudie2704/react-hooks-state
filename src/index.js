import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";

ReactDOM.render(<Counter />, document.getElementById("root"));


import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <h1>Counter App</h1>
      <Counter />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
