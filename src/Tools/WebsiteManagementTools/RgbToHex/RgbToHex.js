import React, { useState } from "react";
import "./rgbtohex.css";
const RgbToHex = () => {
  const [hexcolor, sethexcolor] = useState("");
  const [rgb, setrgb] = useState({ red: "", green: "", blue: "" });

  const valuetoHex = (value) => {
    let hex = value.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const rgbToHexa = (r, g, b) => {
    return valuetoHex(r) + valuetoHex(g) + valuetoHex(b);
  };

  const convertToHex = async () => {
    let r = Number.parseInt(rgb.red);
    let g = Number.parseInt(rgb.green);
    let b = Number.parseInt(rgb.blue);
    let newhexColor = "#" + rgbToHexa(r, g, b);
    sethexcolor(newhexColor);
  };

  const copyColor = (e) => {
    if (!hexcolor) {
      return;
    } else {
      navigator.clipboard.writeText(hexcolor);
      e.target.src = require("../../../Assets/OtherImages/tick.webp");
      setTimeout(() => {
        e.target.src = require("../../../Assets/OtherImages/copy.webp");
      }, 1000);
    }
  };

  const handleChange = (e) => {
    if (e.target.value <= 255 && e.target.value >= 0) {
      setrgb({ ...rgb, [e.target.id]: e.target.value });
    }
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
              onChange={handleChange}
              value={rgb.red}
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
              onChange={handleChange}
              value={rgb.green}
              type="number"
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
              onChange={handleChange}
              value={rgb.blue}
              type="number"
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
