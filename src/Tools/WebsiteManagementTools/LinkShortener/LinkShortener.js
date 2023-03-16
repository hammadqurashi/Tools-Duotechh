import React, { useState } from "react";
import "./linkshortener.css";

const LinkShortener = () => {
  const [url, setUrl] = useState();
  const [originalurl, setoriginalUrl] = useState(null);
  const [copyText, setcopyText] = useState("clipboard");
  const [generateText, setgenerateText] = useState("GENERATE");

  const handleChange = (e) => {
    setoriginalUrl(e.target.value);
  };

  const generateLink = () => {
    setgenerateText("GENERATING...");
    let shorten_link_cont = document.querySelector(".shorten_link_cont");

    fetch(`https://api.shrtco.de/v2/shorten?url=${originalurl}`)
      .then((response) => response.json())
      .then((response) => {
        setgenerateText("GENERATE");
        setUrl(response.result.short_link);
        shorten_link_cont.style.display = "flex";
      })
      .catch((err) => {
        setUrl("Something Went Wrong");
        shorten_link_cont.style.display = "flex";
      });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(url);

    setcopyText("check");

    setTimeout(() => {
      setcopyText("clipboard");
    }, 1000);
  };

  return (
    <div className="Link_Shortener_box">
      <h1 className="tool_h1">Link Shortener</h1>
      <div className="link_shortener_input_link">
        <input
          type="text"
          id="link_shortener_orignal_link"
          placeholder="Enter a Link"
          onChange={handleChange}
        />
        <button
          className="btn-primary"
          id="link_shortener_generate_link"
          onClick={generateLink}
        >
          {generateText}
        </button>
      </div>
      <div
        className="shorten_link_cont"
        title="Click To Copy"
        onClick={handleCopy}
      >
        <span type="text" id="link_shortener_shorten_link">
          {url}
        </span>
        <i
          className={`link_shortener_copyIcon fa-${
            copyText === "clipboard" ? "regular" : "solid"
          } fa-${copyText}`}
          onClick={handleCopy}
        ></i>
      </div>
    </div>
  );
};

export default LinkShortener;
