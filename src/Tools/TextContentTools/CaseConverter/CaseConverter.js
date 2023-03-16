import React, { useState } from "react";
import "./caseconverter.css";
const CaseConverter = () => {
  const [text, settext] = useState("");

  const handleChange = (e) => {
    settext(e.target.value);
  };

  const UpperCase = () => {
    settext(text.toUpperCase());
  };

  const LowerCase = () => {
    settext(text.toLowerCase());
  };

  const Capitalize = () => {
    let newText = text
      .split(".")
      .map(
        (value) => value.trim().charAt(0).toUpperCase() + value.trim().slice(1)
      )
      .join(". ");
    settext(newText);
  };
  return (
    <div className="caseConverterContainer">
      <h1 className="tool_h1">Word And Character Counter</h1>
      <div className="caseConverterBox">
        <textarea
          className="caseConvertertext"
          placeholder="Enter The Text"
          value={text}
          onChange={handleChange}
        ></textarea>
        <div className="caseConverterBtns">
          <button className="caseConverterbtn" onClick={UpperCase}>
            Convert To UpperCase
          </button>
          <button className="caseConverterbtn" onClick={LowerCase}>
            Convert To LowerCase
          </button>
          <button className="caseConverterbtn" onClick={Capitalize}>
            Sentence First Letter Capitalize
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseConverter;
