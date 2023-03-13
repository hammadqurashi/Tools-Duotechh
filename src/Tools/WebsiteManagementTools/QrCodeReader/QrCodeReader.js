import React, { useState } from "react";
import "./qrcodereader.css";
const QrCodeReader = () => {
  const [fileUploadText, setfileUploadText] = useState("Click To Upload");

  let inputFile = document.getElementById("inputFile");

  const handleClick = () => {
    inputFile.click();
  };

  const handleChange = () => {
    let [file] = inputFile.files;
    if (!file) {
      return;
    } else {
      setfileUploadText(file.name);
    }
  };

  const qrCodeReader = async () => {
    let [file] = inputFile.files;
    if (!file) {
      return alert("Enter A File");
    } else {
      //   let src = URL.createObjectURL(file);
      //   let src = new FileReader();
      //   src.readAsDataURL(file);
      //   src.onload = () => {
      //     console.log(src.result);
      //   await fetch(`http://api.qrserver.com/v1/read-qr-code/?file=${file}`).then(
      //     (value) => {
      //       console.log(value);
      //     }
      //   );
      //   };
    }
  };

  return (
    <div className="qrCodeReaderContainer">
      <h1 className="tool_h1">Free QR Code Reader</h1>
      <div className="uploadBox" onClick={handleClick}>
        <input type="file" id="inputFile" hidden onChange={handleChange} />
        <img
          src={require("../../../Assets/OtherImages/upload.webp")}
          alt="upload"
          id="uploadFile"
        />
        <span className="fileText">{fileUploadText}</span>
      </div>
      <button className="btn-primary" id="generate" onClick={qrCodeReader}>
        GENERATE
      </button>
      <div className="qrCodeResponseBox">
        <span className="responseUrl">youtube.com</span>
      </div>
    </div>
  );
};

export default QrCodeReader;
