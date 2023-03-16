import React, { useRef, useState } from "react";
import "./pickcolorfromimage.css";
const PickColorFromImage = () => {
  const [img, setimg] = useState(
    require("../../../Assets/OtherImages/upload.webp")
  );

  const upload = useRef(null);
  const imgRef = useRef(null);

  const pickColor = () => {
    const eyeDropper = new EyeDropper(); // eslint-disable-line
    if (imgRef.current.Onhover()) {
      eyeDropper
        .open()
        .then((value) => {
          console.log(value);
          // sRGBHex
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const showUploadImg = async (e) => {
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
        <img
          ref={imgRef}
          style={{
            backgroundColor: "black",
          }}
          onClick={() => {
            return (
              img === require("../../../Assets/OtherImages/upload.webp") &&
              upload.current.click()
            );
          }}
          // onMouseOver={() => {
          //   return (
          //     img !== require("../../../Assets/OtherImages/upload.webp") &&
          //     pickColor()
          //   );
          // }}
          src={img}
          alt="uploadedimage"
        />
        <input
          type="file"
          id="img"
          name="img"
          accept="image/*"
          ref={upload}
          onChange={showUploadImg}
        />
        <button
          className="pcfi-btn"
          onClick={() => {
            return (
              img !== require("../../../Assets/OtherImages/upload.webp") &&
              pickColor()
            );
          }}
        >
          Pick Color
        </button>
      </div>
    </div>
  );
};

export default PickColorFromImage;
