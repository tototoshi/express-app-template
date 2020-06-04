import "./app.scss";
import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [count, setCount] = useState(0);

  function handleClick(e: React.MouseEvent): void {
    setCount(count + 1);
  }

  return (
    <div>
      <div>
        <span>Count: </span>
        <span>{count}</span>
      </div>
      <div>
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
