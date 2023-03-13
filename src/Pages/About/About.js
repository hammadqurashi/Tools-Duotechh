import React from "react";
import "./about.css";
import Cover from "../../Components/Cover/Cover";
const About = () => {
  return (
    <div id="about">
      <Cover
        title="DuoTechh - About Us"
        description="Discover a wide range of free online web tools at Tools Duotechh - simplify your daily tasks and enhance your productivity with our user-friendly and efficient tools"
      />
      <div className="about-container">
        <h1 className="about-h">DuoTechh</h1>
        <p className="about-p">
          Welcome to Tools DuoTechh, a platform that provides a wide range of
          free online web tools to help you improve your website's performance
          and functionality. Our website offers a variety of tools such as an
          image format changer, QR code generator, link shortener, image size
          compressor, and much more.
        </p>
        <p className="about-p">
          {" "}
          Our web tools are designed to be user-friendly and easy to use, making
          it simple for anyone to optimize their website. We understand that
          building and maintaining a successful website can be challenging, and
          that's why we provide these tools for free to help you save time and
          effort.
        </p>{" "}
        <p className="about-p">
          Thank you for choosing Tools DuoTechh as your go-to platform for all
          your website needs. We look forward to helping you optimize your
          website with our free online web tools.
        </p>{" "}
        <p className="about-p">
          Don't forget to explore our website{" "}
          <a
            rel="noreferrer"
            className="link-in-p"
            href="https://duotechh.com/"
            target="_blank"
          >
            Duotechh.com
          </a>{" "}
          a platform that offers FREE high-quality WordPress themes, plugins,
          software, scripts, and content management systems for free.
        </p>
      </div>
    </div>
  );
};

export default About;
