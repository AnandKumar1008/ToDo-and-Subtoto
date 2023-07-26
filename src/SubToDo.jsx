import React, { useState, useRef } from "react";

const SubToDo = ({ title }) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(title);
  return (
    <div>
      <input type="checkbox" name="" id="" />
      {edit || <p>{text}</p>}
      {edit && (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ display: "block" }}
        />
      )}
      <button onClick={() => setEdit((p) => !p)}>
        {edit ? "Save" : " Edit"}
      </button>
    </div>
  );
};

export default SubToDo;
