import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import RandomPaletteGenerator from "./Tools/WebsiteManagementTools/RandomPaletteGenerator/RandomPaletteGenerator";
import LinkShortener from "./Tools/WebsiteManagementTools/LinkShortener/LinkShortener";
import QrCodeGenerator from "./Tools/WebsiteManagementTools/QrCodeGenerator/QrCodeGenerator";
import QrCodeReader from "./Tools/WebsiteManagementTools/QrCodeReader/QrCodeReader";
import WordCounter from "./Tools/TextContentTools/WordCounter/WordCounter";
import CaseConverter from "./Tools/TextContentTools/CaseConverter/CaseConverter";
import RemoveExtraSpaces from "./Tools/TextContentTools/RemoveExtraSpaces/RemoveExtraSpaces";
import MultiTextGenerator from "./Tools/TextContentTools/MultiTextGenerator/MultiTextGenerator";
import PickColorFromImage from "./Tools/OnlineImagesTools/PickColorFromImage/PickColorFromImage";
import RgbToHex from "./Tools/WebsiteManagementTools/RgbToHex/RgbToHex";
import ImageFormatChanger from "./Tools/OnlineImagesTools/ImageFormatChanger/ImageFormatChanger";
import PngToJpegConverter from "./Tools/OnlineImagesTools/OtherFormatChangers/PngToJpegConverter";
import WebpToJpegConverter from "./Tools/OnlineImagesTools/OtherFormatChangers/WebpToJpegConverter";
import JpegToWebpConverter from "./Tools/OnlineImagesTools/OtherFormatChangers/JpegToWebpConverter";
import PngToWebpConverter from "./Tools/OnlineImagesTools/OtherFormatChangers/PngToWebpConverter";
import WebpToPngConverter from "./Tools/OnlineImagesTools/OtherFormatChangers/WebpToPngConverter";
import JpegToPngConverter from "./Tools/OnlineImagesTools/OtherFormatChangers/JpegToPngConverter";

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <div className="container">
          <LoadingBar
            color="#d2601a"
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Navbar setProgress={setProgress} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/random-palette-generator"
              element={<RandomPaletteGenerator />}
            />
            <Route exact path="/link-shortener" element={<LinkShortener />} />
            <Route
              exact
              path="/qr-code-generator"
              element={<QrCodeGenerator />}
            />
            <Route exact path="/qr-code-reader" element={<QrCodeReader />} />
            <Route exact path="/word-counter" element={<WordCounter />} />
            <Route exact path="/case-converter" element={<CaseConverter />} />
            <Route
              exact
              path="/remove-extra-spaces"
              element={<RemoveExtraSpaces />}
            />
            <Route
              exact
              path="/multi-text-generator"
              element={<MultiTextGenerator />}
            />
            <Route
              exact
              path="/pick-color-from-image"
              element={<PickColorFromImage />}
            />
            <Route exact path="/rgb-to-hex" element={<RgbToHex />} />
            <Route
              exact
              path="/image-format-changer"
              element={<ImageFormatChanger />}
            />
            <Route
              exact
              path="/png-to-jpeg-converter"
              element={<PngToJpegConverter />}
            />
            <Route
              exact
              path="/webp-to-jpeg-converter"
              element={<WebpToJpegConverter />}
            />
            <Route
              exact
              path="/jpeg-to-webp-converter"
              element={<JpegToWebpConverter />}
            />
            <Route
              exact
              path="/png-to-webp-converter"
              element={<PngToWebpConverter />}
            />
            <Route
              exact
              path="/webp-to-png-converter"
              element={<WebpToPngConverter />}
            />
            <Route
              exact
              path="/jpeg-to-png-converter"
              element={<JpegToPngConverter />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
