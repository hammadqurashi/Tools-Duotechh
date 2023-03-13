import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import trendingImg from "../../Assets/OtherImages/trending.webp";

const SideBar = () => {
  const trendingtools = [
    {
      trendingToolName: "QR Code Generator",
      trendingToolLink: "./about",
    },
    {
      trendingToolName: "Link Shortener",
      trendingToolLink: "./about",
    },
    {
      trendingToolName: "Word Counter",
      trendingToolLink: "./about",
    },
    {
      trendingToolName: "Fancy Font Generator",
      trendingToolLink: "./about",
    },
    {
      trendingToolName: "Image Format Changer",
      trendingToolLink: "./about",
    },
    {
      trendingToolName: "RGB To HEX",
      trendingToolLink: "./about",
    },
    {
      trendingToolName: "Image Compressor",
      trendingToolLink: "./about",
    },
    {
      trendingToolName: "HEX To RGB",
      trendingToolLink: "./about",
    },
  ];
  return (
    <>
      <div className="sidebar">
        <h3 className="heading-sidebar">Trending Tools</h3>
        <div className="trending-tools-box">
          {trendingtools.map((item) => {
            return (
              <Link
                to={item.trendingToolLink}
                key={item.trendingToolName}
                className="trending-tools"
              >
                <img
                  src={trendingImg}
                  alt="trending"
                  className="trending-img"
                />
                <span className="trending-tool-name">
                  {item.trendingToolName}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideBar;
