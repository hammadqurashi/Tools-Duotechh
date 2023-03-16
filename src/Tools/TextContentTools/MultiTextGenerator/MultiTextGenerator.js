import React, { useState } from "react";
import "./multitextgenerator.css";
const MultiTextGenerator = () => {
  const [text, setText] = useState("");
  const [generatedText, setgeneratedText] = useState("");
  const [generatedNum, setgeneratedNum] = useState(0);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleChangeNum = (e) => {
    if (e.target.value < 1001) {
      setgeneratedNum(e.target.value);
    }
  };
  const generate = () => {
    let newText = "";
    for (let index = 0; index < generatedNum; index++) {
      newText += text;
    }
    setgeneratedText(newText);
  };

  const handleCopy = (e) => {
    navigator.clipboard.writeText(generatedText);
    e.target.innerText = "Copied!";
    setTimeout(() => {
      e.target.innerText = " Copy to clipboard!";
    }, 1000);
  };

  return (
    <div className="m_t_g_container">
      <h1 className="tool_h1">Multi Text Generator</h1>
      <div className="m_t_g_box">
        <textarea
          className="m_t_g_text_area"
          cols="30"
          rows="5"
          value={text}
          onChange={handleChange}
          placeholder="Enter The Text You Want To Generate."
        ></textarea>
        <div className="m_t_g_num_box">
          <input
            type="number"
            id="m_t_g_num"
            min="0"
            max="1000"
            onChange={handleChangeNum}
            value={generatedNum}
          />
          <button
            className="btn-primary"
            id="m_t_g_btn"
            type="submit"
            onClick={generate}
          >
            Generate
          </button>
        </div>
        <textarea
          value={generatedText}
          readOnly
          placeholder="Generated Text Will Appear Here!"
          className="m_t_g_text_area"
          cols="30"
          rows="10"
        ></textarea>
        <button id="m_t_g_copy" onClick={handleCopy}>
          Copy to clipboard!
        </button>
      </div>
    </div>
  );
};

export default MultiTextGenerator;
