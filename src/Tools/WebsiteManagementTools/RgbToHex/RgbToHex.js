import React, { useState, useRef } from "react";
import "./rgbtohex.css";
const RgbToHex = () => {
  const [hexcolor, sethexcolor] = useState("");

  const red = useRef();
  const green = useRef();
  const blue = useRef();

  const valuetoHex = (value) => {
    let hex = value.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const rgbToHexa = (r, g, b) => {
    return valuetoHex(r) + valuetoHex(g) + valuetoHex(b);
  };

  const convertToHex = async () => {
    let r = Number.parseInt(red.current.value);
    let g = Number.parseInt(green.current.value);
    let b = Number.parseInt(blue.current.value);
    let newhexColor = "#" + rgbToHexa(r, g, b);
    sethexcolor(newhexColor);
  };

  const copyColor = (e) => {
    navigator.clipboard.writeText(hexcolor);
    e.target.src = require("../../../Assets/OtherImages/tick.webp");
    setTimeout(() => {
      e.target.src = require("../../../Assets/OtherImages/copy.webp");
    }, 1000);
  };

  return (
    <>
      <div className="rgbtohex-container">
        <h1 className="tool_h1">RGB To HEX Converter</h1>
        <div className="rgbtohex-box">
          <div className="rgbtohex-fields">
            <label htmlFor="red" className="rgbtohex-labels">
              Red Color (R)
            </label>
            <input
              // onChange={handleChange}
              ref={red}
              type="number"
              id="red"
              className="rgbtohex-inputs"
              min={0}
              max={255}
            ></input>
          </div>
          <div className="rgbtohex-fields">
            <label htmlFor="green" className="rgbtohex-labels">
              Green Color (G)
            </label>
            <input
              // onChange={handleChange}
              type="number"
              ref={green}
              id="green"
              className="rgbtohex-inputs"
              min={0}
              max={255}
            ></input>
          </div>
          <div className="rgbtohex-fields">
            <label htmlFor="blue" className="rgbtohex-labels">
              Blue Color (B)
            </label>
            <input
              // onChange={handleChange}
              type="number"
              ref={blue}
              id="blue"
              className="rgbtohex-inputs"
              min={0}
              max={255}
            ></input>
          </div>
          <div className="rgbtohex-btns">
            <button className="btn-primary" onClick={convertToHex}>
              Convert
            </button>
          </div>
          <div className="rgbtohex-responsebox">
            <div
              className="colorpreview"
              style={{ backgroundColor: hexcolor }}
            ></div>
            <div className="rgbtohex-fields">
              <label htmlFor="hexcolorcode" className="rgbtohex-labels">
                Hex Color Code
              </label>
              <span id="hexcolorcode" className="rgbtohex-inputs">
                {hexcolor}
              </span>
              <img
                title="Click To Copy"
                src={require("../../../Assets/OtherImages/copy.webp")}
                alt="copy"
                width="25px"
                style={{ cursor: "pointer" }}
                onClick={copyColor}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RgbToHex;
