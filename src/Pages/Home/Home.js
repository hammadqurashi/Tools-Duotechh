import React from "react";
import Cover from "../../Components/Cover/Cover";
import SideBar from "../../Components/Sidebar/SideBar";
import ToolsContainer from "../../Components/ToolsContainer/ToolsContainer";
import "./home.css";
const Home = () => {
  const toolstypes = [
    {
      tooltype: "Online Images Tools",
      tooltypedesc:
        "Change the Format of Image, compress an image or resize a picture with a single click. All essentials for image editing are available in one place.",
    },
    {
      tooltype: "Text Content Tools",
      tooltypedesc:
        "A complete set of text tools is now at your fingertips. Create dummy text, count words or change text case.",
    },
    {
      tooltype: "Website Management Tools",
      tooltypedesc:
        "If you are struggling to get more traffic and enhance your website performance, then use these website management tools.",
    },
  ];

  return (
    <>
      <Cover
        title="Tools Duotechh - Free Discover Online Web Tools"
        description="Image Format Changer, Qr Code Generator, Link Shortener And Much More"
      />
      <div className="home-container">
        <div className="home-tools-container">
          {toolstypes.map((item) => {
            return (
              <ToolsContainer
                key={item.tooltype}
                tooltype={item.tooltype}
                tooltypedesc={item.tooltypedesc}
              />
            );
          })}
        </div>
        <div className="sidebar-container">
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default Home;
