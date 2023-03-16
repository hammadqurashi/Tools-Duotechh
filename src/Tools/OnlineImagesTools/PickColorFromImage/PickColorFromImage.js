import React, { useRef, useState } from "react";
import "./pickcolorfromimage.css";
const PickColorFromImage = () => {
  const [img, setimg] = useState(
    require("../../../Assets/OtherImages/upload.webp")
  );
  const upload = useRef(null);
  const imgRef = useRef(null);

  const initialPickedColor = [];

  const [color, setcolor] = useState(initialPickedColor);

  const eyeDropper = new EyeDropper(); // eslint-disable-line
  const pickColor = () => {
    eyeDropper
      .open()
      .then(async (value) => {
        let Array = [value.sRGBHex];
        setcolor(color.concat(Array));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showUploadImg = async () => {
    let [file] = await upload.current.files;
    if (!file) {
      return;
    } else {
      let src = URL.createObjectURL(file);
      setimg(src);
    }
  };

  return (
    <div className="pcfi-container">
      <h1 className="tool_h1">Pick Color From Image</h1>
      <div className="pcfi-box">
        <div
          className="pcfi-img-box"
          style={{
            width:
              img === require("../../../Assets/OtherImages/upload.webp")
                ? "200px"
                : "100%",
            maxHeight:
              img === require("../../../Assets/OtherImages/upload.webp")
                ? "200px"
                : "300px",
          }}
        >
          <img
            className="pcfi-img"
            ref={imgRef}
            // style={{
            //   backgroundColor: "black",
            // }}
            src={img}
            alt="uploadedimage"
            onClick={() => {
              return (
                img === require("../../../Assets/OtherImages/upload.webp") &&
                upload.current.click()
              );
            }}
          />
        </div>
        <div>
          <input
            type="file"
            name="img"
            accept="image/*"
            ref={upload}
            hidden
            onChange={showUploadImg}
          />
          <button
            className="btn-primary my-10"
            onClick={() => {
              upload.current.click();
            }}
          >
            Upload Image
          </button>
          <button
            onClick={pickColor}
            style={{
              pointerEvents:
                img === require("../../../Assets/OtherImages/upload.webp") &&
                "none",
              opacity:
                img === require("../../../Assets/OtherImages/upload.webp") &&
                "0.7",
            }}
            className="pcfi-pickcolor-btn my-10"
          >
            Pick Color
          </button>
        </div>
        <div className="pcfi-pickedcolors-cont">
          <h4 className="pcfi-pickedcolors-h4">Picked Colors : </h4>
          {color.length === 0 && (
            <span className="pcfi-pickedcolors-note">
              Your Picked Colors Will Appear Here!
            </span>
          )}
          {color.map((e) => {
            return (
              <div
                onClick={() => {
                  navigator.clipboard.writeText(e);
                }}
                key={e}
                className="pcfi-pickedcolors"
                title="Click To Copy Color"
                style={{ backgroundColor: e }}
              >
                {e}
              </div>
            );
          })}
          {/* <div
            className="pcfi-pickedcolors"
            title="Click To Copy Color"
            style={{ backgroundColor: color2 }}
          >
            {color2}
          </div>
          <div
            className="pcfi-pickedcolors"
            title="Click To Copy Color"
            style={{ backgroundColor: color3 }}
          >
            {color3}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PickColorFromImage;
