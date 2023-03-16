import React, { useState } from "react";
import "./wordcounter.css";
const WordCounter = () => {
  const [text, settext] = useState("");

  const changeHandler = (e) => {
    settext(e.target.value);
  };

  return (
    <div className="wordCounterContainer">
      <h1 className="tool_h1">Word And Character Counter</h1>
      <div className="wordCounterBox">
        <div className="wordCounter-showCounts-top">
          {
            text
              .replace(/\./g, "")
              .split(" ")
              .filter((str) => {
                return str !== "";
              }).length
          }{" "}
          Word and {text.length} Character
        </div>
        <textarea
          className="wordCounter-text"
          placeholder="Enter The Text"
          onChange={changeHandler}
        ></textarea>
        <div className="wordCounter-showCounts-bottom">
          {
            text
              .replace(/\./g, "")
              .split(" ")
              .filter((str) => {
                return str !== "";
              }).length
          }{" "}
          Word and {text.length} Character
        </div>
      </div>
    </div>
  );
};

export default WordCounter;
