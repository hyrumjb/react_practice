import { useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";
import './index.css'

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const myStyle = {
    color: "white",
    backgroundColor: "black",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div style={myStyle}>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);