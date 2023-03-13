import React, { useState } from "react";
import "./removeextraspaces.css";
const RemoveExtraSpaces = () => {
  const [text, settext] = useState("");

  const handleChange = (e) => {
    settext(e.target.value);
  };

  const removeExtraSpaces = () => {
    settext(text.replace(/\s+/gm, " "));
  };
  return (
    <div className="remove-extra-spaces-container">
      <h1 className="tool_h1">Word And Character Counter</h1>
      <div className="remove-extra-spaces-box">
        <textarea
          className="text"
          placeholder="Enter The Text"
          value={text}
          onChange={handleChange}
        ></textarea>
        <button className="btn" onClick={removeExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
    </div>
  );
};

export default RemoveExtraSpaces;
