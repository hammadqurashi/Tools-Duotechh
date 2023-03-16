import React, { useState } from "react";
import "./qrcodegenerator.css";
const QrCodeGenerator = () => {
  const [url, setUrl] = useState(null);
  const [qrCode, setqrCode] = useState(null);
  const [qrCodeDownload, setqrCodeDownload] = useState(null);
  const [generateText, setgenerateText] = useState("GENERATE");

  const handleChange = (e) => {
    setUrl(e.target.value);
  };
  async function toDataURL(url) {
    const blob = await fetch(url).then((res) => res.blob());
    return URL.createObjectURL(blob);
  }
  const qrCodeGenerate = () => {
    setgenerateText("GENERATING");
    let generated_qr_code_box = document.querySelector(
      ".generated_qr_code_box"
    );
    fetch(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`
    ).then(async (value) => {
      setgenerateText("GENERATE");
      setqrCode(value.url);
      generated_qr_code_box.style.display = "flex";
      let href = await toDataURL(value.url);
      setqrCodeDownload(href);
    });
  };

  return (
    <div className="qr_code_gen_container">
      <h1 className="tool_h1">FREE QR CODE GENERATOR</h1>
      <div className="qr_code_gen_box">
        <input
          type="text"
          id="qr_code_gen_link"
          placeholder="Enter the Link"
          onChange={handleChange}
        />
        <button
          className="btn-primary"
          id="qr_code_generate"
          onClick={qrCodeGenerate}
        >
          {generateText}
        </button>
      </div>
      <div className="generated_qr_code_box">
        <img src={qrCode} alt="qr_code" id="qr_code" />
        <a href={qrCodeDownload} id="qr_code_download" download="qr_code">
          <button className="btn-primary">Download</button>
        </a>
      </div>
    </div>
  );
};

export default QrCodeGenerator;
