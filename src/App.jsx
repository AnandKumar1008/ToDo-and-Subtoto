import React, { useRef, useState } from "react";
import "./App.css";
import { AiOutlineClose } from "react-icons/ai";
import ToDo from "./ToDo";

const App = () => {
  const inpRef = useRef();
  const [list, setList] = useState([]);
  const [id, setId] = useState(0);
  const handleClick = () => {
    if (!inpRef.current.value) return;
    setList([...list, { title: inpRef.current.value, id: id }]);
    setId(id + 1);
    inpRef.current.value = "";
  };
  return (
    <div className="app">
      <h1>To Do List</h1>
      <input type="text" name="" id="" ref={inpRef} />
      <button onClick={handleClick}>Add List</button>
      <ul>
        {list.map((item, i) => (
          <li key={item.id} className="app-ul_item">
            <button
              onClick={() => {
                const arr = [...list];
                arr.splice(i, 1);
                setList(arr);
              }}
            >
              Delete
            </button>
            <ToDo key={item.id} title={item.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
