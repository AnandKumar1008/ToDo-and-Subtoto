import React, { useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import SubToDo from "./SubToDo";
import "./ToDo.css";
const ToDo = ({ title }) => {
  const [text, setText] = useState(title);
  const [edit, setEdit] = useState(false);
  const [subToDo, setSubToDo] = useState([]);
  const [addlist, setAddList] = useState(false);
  const [id, setId] = useState(0);
  const inpRef = useRef();
  const handleClick = () => {
    if (!inpRef.current.value) return;
    setSubToDo([...subToDo, { id, text: inpRef.current.value }]);
    setId((p) => p + 1);
  };
  const handleAddlist = () => {
    setAddList(true);
  };
  return (
    <div className="to_do-container">
      <div className="to_do-heading">
        <input type="checkbox" name="" id="" />
        {edit || <p>{text}</p>}
        {edit && (
          <input value={text} onChange={(e) => setText(e.target.value)} />
        )}
        <div>
          <button onClick={() => setEdit((p) => !p)}>
            {edit ? "Save" : " Edit"}
          </button>

          {addlist || <button onClick={handleAddlist}>Add List</button>}
        </div>
      </div>
      {addlist && (
        <div className="to_do-add_sub_to_do">
          <input type="text" name="" id="" ref={inpRef} />
          <button onClick={handleClick}>Add SubToDo</button>
          <AiOutlineClose onClick={() => setAddList(false)} />
        </div>
      )}
      <div className="to_do-subto">
        <div></div>
        <div className="to_do-sub_items">
          {subToDo.map((item, i) => (
            <li key={item.id} className="to_do-li">
              <SubToDo title={item.text} />
              <button
                onClick={() => {
                  const arr = [...subToDo];
                  arr.splice(i, 1);
                  setSubToDo(arr);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
