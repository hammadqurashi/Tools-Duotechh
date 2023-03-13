import React from "react";
import ToolShowcase from "../ToolShowcase/ToolShowcase";
import "./ToolsContainer.css";

const ToolsContainer = (props) => {
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("../../Assets/toolshowcaseimg", false, /\.(webp)$/)
  );

  const toolsInShowcase = [
    {
      toolShowCaseName: "Image Format Changer",
      toolShowCaseImg: images["image-format-changer.webp"],
      toolShowCaseLink: "/about",
      category: "Online Images Tools",
    },
    {
      toolShowCaseName: "Image Resizer",
      toolShowCaseImg: images["image-resizer.webp"],
      toolShowCaseLink: "/about",
      category: "Online Images Tools",
    },
    {
      toolShowCaseName: "Image Compressor",
      toolShowCaseImg: images["image-compressor.webp"],
      toolShowCaseLink: "/about",
      category: "Online Images Tools",
    },
    {
      toolShowCaseName: "PNG To JPEG Converter",
      toolShowCaseImg: images["png-to-jpeg.webp"],
      toolShowCaseLink: "/about",
      category: "Online Images Tools",
    },
    {
      toolShowCaseName: "Webp To JPEG Converter",
      toolShowCaseImg: images["webp-to-jpeg.webp"],
      toolShowCaseLink: "/about",
      category: "Online Images Tools",
    },
    {
      toolShowCaseName: "JPEG To Webp Converter",
      toolShowCaseImg: images["jpeg-to-webp.webp"],
      toolShowCaseLink: "/about",
      category: "Online Images Tools",
    },
    {
      toolShowCaseName: "PNG To Webp Converter",
      toolShowCaseImg: images["png-to-webp.webp"],
      toolShowCaseLink: "/about",
      category: "Online Images Tools",
    },
    {
      toolShowCaseName: "Webp To PNG Converter",
      toolShowCaseImg: images["webp-to-png.webp"],
      toolShowCaseLink: "/about",
      category: "Online Images Tools",
    },
    {
      toolShowCaseName: "JPEG To PNG Converter",
      toolShowCaseImg: images["jpeg-to-png.webp"],
      toolShowCaseLink: "/about",
      category: "Online Images Tools",
    },
    {
      toolShowCaseName: "QR Code Generator",
      toolShowCaseImg: images["qr-code-generator.webp"],
      toolShowCaseLink: "/qr-code-generator",
      category: "Website Management Tools",
    },
    {
      toolShowCaseName: "QR Code Reader",
      toolShowCaseImg: images["qr-code-reader.webp"],
      toolShowCaseLink: "/qr-code-reader",
      category: "Website Management Tools",
    },
    {
      toolShowCaseName: "Link / URL  Shortener",
      toolShowCaseImg: images["link-shortener.webp"],
      toolShowCaseLink: "/link-shortener",
      category: "Website Management Tools",
    },
    {
      toolShowCaseName: "Password Generator",
      toolShowCaseImg: images["password-generator.webp"],
      toolShowCaseLink: "/about",
      category: "Website Management Tools",
    },
    {
      toolShowCaseName: "Random Palettes Generator",
      toolShowCaseImg: images["random-palettes-generator.webp"],
      toolShowCaseLink: "/random-palette-generator",
      category: "Website Management Tools",
    },
    {
      toolShowCaseName: "Color Converter",
      toolShowCaseImg: images["color-converter.webp"],
      toolShowCaseLink: "/about",
      category: "Website Management Tools",
    },
    {
      toolShowCaseName: "RGB to HEX",
      toolShowCaseImg: images["rgb-to-hex.webp"],
      toolShowCaseLink: "/about",
      category: "Website Management Tools",
    },
    {
      toolShowCaseName: "HEX to RGB",
      toolShowCaseImg: images["hex-to-rgb.webp"],
      toolShowCaseLink: "/about",
      category: "Website Management Tools",
    },
    {
      toolShowCaseName: "Word Counter",
      toolShowCaseImg: images["word-counter.webp"],
      toolShowCaseLink: "/word-counter",
      category: "Text Content Tools",
    },
    {
      toolShowCaseName: "Lorem Ipsum Generator",
      toolShowCaseImg: images["lorem-ipsum-generator.webp"],
      toolShowCaseLink: "/about",
      category: "Text Content Tools",
    },
    {
      toolShowCaseName: "Case Converter",
      toolShowCaseImg: images["case-converter.webp"],
      toolShowCaseLink: "/case-converter",
      category: "Text Content Tools",
    },
    {
      toolShowCaseName: "Fancy Font Generator",
      toolShowCaseImg: images["fancy-font-generator.webp"],
      toolShowCaseLink: "/about",
      category: "Text Content Tools",
    },
    {
      toolShowCaseName: "Remove Extra Spaces",
      toolShowCaseImg: images["remove-extra-spaces.webp"],
      toolShowCaseLink: "/remove-extra-spaces",
      category: "Text Content Tools",
    },
    {
      toolShowCaseName: "Multi Text Generator",
      toolShowCaseImg: images["multi-text-generator.webp"],
      toolShowCaseLink: "/about",
      category: "Text Content Tools",
    },
  ];
  return (
    <>
      <div className="toolsContainer">
        <div className="IntroBox">
          <h3 className="tools_type_heading">{props.tooltype}</h3>
          <p className="tools_type_description">{props.tooltypedesc}</p>
        </div>
        <div className="toolsbox">
          {toolsInShowcase.map((item) => {
            return (
              item.category === props.tooltype && (
                <ToolShowcase
                  key={item.toolShowCaseName}
                  toolShowCaseName={item.toolShowCaseName}
                  toolShowCaseImg={item.toolShowCaseImg}
                  toolShowCaseLink={item.toolShowCaseLink}
                />
              )
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ToolsContainer;
