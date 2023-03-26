import React, { useState, useRef } from "react";
import "./imageformatchanger.css";

const ImageFormatChanger = () => {
  const uploadRef = useRef(null);
  const previewImgBox = useRef(null);

  const convertedImgs = [];
  const [convertImg, setConvertImg] = useState(convertedImgs);
  const [imgSrc, setimgSrc] = useState("");
  const [downloadSrc, setdownloadSrc] = useState("");
  const [downloadName, setdownloadName] = useState("");
  const [convertTitle, setconvertTitle] = useState("Convert");

  const addFile = async () => {
    let [file] = await uploadRef.current.files;
    if (!file) {
      return;
    } else {
      let src = URL.createObjectURL(file);
      let convertImgBox = {
        name: file.name,
        type: file.type,
        key: src,
        imageFormat: "",
      };
      setConvertImg(convertImg.concat(convertImgBox));
    }
  };

  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  let formatChange;

  const convert = (key) => {
    setconvertTitle("Converting...");
    setimgSrc(key);
    previewImgBox.current.style.display = "flex";
    setconvertTitle("Convert");
    let image = new Image();
    image.src = key;
    image.onload = async () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
      for (let index = 0; index < convertImg.length; index++) {
        const element = convertImg[index];
        if (element.key === key) {
          formatChange = await canvas.toDataURL(
            `image/${element.imageFormat.toLowerCase()}`,
            0.7
          );
          setdownloadSrc(formatChange);
          setdownloadName(element.name.split(".")[0]);
        }
      }
    };
  };

  const deleteBox = (key) => {
    let newConversions = convertImg.filter((conversion) => {
      return conversion.key !== key;
    });
    setConvertImg(newConversions);
  };

  const handleChange = (e, key) => {
    for (let index = 0; index < convertImg.length; index++) {
      const element = convertImg[index];
      if (element.key === key) {
        element.imageFormat = e.target.value;
      }
    }
  };

  return (
    <div className="imageFormatChange_Container">
      <h1 className="tool_h1">Image Format Changer</h1>
      <div className="imageFormatChange_Box">
        {convertImg.map((item) => {
          return (
            <div className="ifc-convertImg" key={item.key}>
              <span className="ifc-fileName">{item.name}</span>
              <label htmlFor="ifc-fileType" id="ifc-l_fileType">
                Convert To
                <select
                  id="ifc-fileType"
                  onChange={(e) => handleChange(e, item.key)}
                >
                  <option defaultValue="..." hidden>
                    ...
                  </option>
                  <option value="PNG">PNG</option>
                  <option value="JPEG">JPG</option>
                  <option value="WEBP">WEBP</option>
                </select>
              </label>
              <button id="ifc-convert" onClick={() => convert(item.key)}>
                {convertTitle}
              </button>
              <span
                title="Delete"
                className="ifc-delete"
                onClick={() => deleteBox(item.key)}
              >
                X
              </span>
            </div>
          );
        })}
        <div className="ifc-showConvertImg" ref={previewImgBox}>
          <div className="ifc-convertedImgBox">
            <img id="ifc-previewconvertedImg" src={imgSrc} alt="" />
          </div>
          <div className="ifc-buttons">
            <button
              id="ifc-close"
              onClick={() => (previewImgBox.current.style.display = "none")}
            >
              Close
            </button>
            <a href={downloadSrc} download={downloadName} id="ifc-download">
              Download
            </a>
          </div>
        </div>
        <button id="ifc-addFiles" onClick={() => uploadRef.current.click()}>
          <img
            style={{ display: convertImg.length > 0 ? "none" : "block" }}
            id="ifc-addFiles_img"
            src={require("../../../Assets/OtherImages/upload.webp")}
            alt="Upload"
          />
          <span>+ ADD IMAGE</span>
        </button>
        <input
          type="file"
          id="file"
          ref={uploadRef}
          onChange={addFile}
          accept="image/*"
        />
      </div>
    </div>
  );
};

export default ImageFormatChanger;
