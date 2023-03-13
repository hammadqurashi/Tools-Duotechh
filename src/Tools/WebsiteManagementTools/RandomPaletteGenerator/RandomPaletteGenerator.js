import React, { useState } from "react";
import "./randompalettegenerator.css";

const RandomPaletteGenerator = (props) => {
  const on = (e) => {
    e.target.classList.add("copy");
  };
  const off = (e) => {
    e.target.classList.remove("copy");
  };

  const valuetoHex = (value) => {
    let hex = value.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const rgbToHex = (r, g, b) => {
    return valuetoHex(r) + valuetoHex(g) + valuetoHex(b);
  };

  const copyColor = async (e) => {
    let RGB = e.target.style.backgroundColor.split(",");
    let r = Number.parseInt(RGB[0].trim().slice(4));
    let g = Number.parseInt(RGB[1].trim());
    let b = Number.parseInt(RGB[2].trim().substring(0, RGB[2].length - 1));

    let copiedColor = "#" + rgbToHex(r, g, b);
    await navigator.clipboard.writeText(copiedColor);

    let show_Palette = document.querySelector(".show_Palette");
    let showCopiedColor = document.querySelector("#copiedColor");

    show_Palette.style.backgroundColor = copiedColor;
    showCopiedColor.innerHTML = copiedColor;
    show_Palette.style.display = "flex";

    setTimeout(() => {
      show_Palette.style.display = "none";
    }, 500);
  };

  let palettesInitial = [];
  for (let index = 0; index < 15; index++) {
    palettesInitial.push(
      <div
        className={`palette`}
        key={index}
        style={{
          backgroundColor:
            "#" +
            ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"),
        }}
        onClick={copyColor}
        onMouseEnter={on}
        onMouseLeave={off}
      ></div>
    );
  }

  const [palettes, setpalettes] = useState(palettesInitial);

  const refresh = () => {
    let nextPalettes = [];
    for (let index = 0; index < 15; index++) {
      nextPalettes.push(
        <div
          className="palette"
          key={index}
          style={{
            backgroundColor:
              "#" +
              ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"),
          }}
          onClick={copyColor}
          onMouseEnter={on}
          onMouseLeave={off}
        ></div>
      );
    }
    let newPalettes = palettesInitial.concat(nextPalettes);
    setpalettes(newPalettes.splice(15));
    props.setProgress(100);
  };

  return (
    <div className="random-palette-generator">
      <div className="show_Palette">
        <span id="Copied">COPIED!</span>
        <span id="copiedColor"></span>
      </div>
      <div className="palettecontainer">
        <div className="palettes_box">{palettes}</div>
        <button className="btn-primary" id="refresh" onClick={refresh}>
          Refresh
        </button>
      </div>
    </div>
  );
};

export default RandomPaletteGenerator;
