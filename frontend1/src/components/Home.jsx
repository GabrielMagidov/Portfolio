import React from "react";
import "./Home.css";
import ContactLinks from "./ContactLinks";
import cv_file from "../cv.pdf"; // Adjust the path based on your actual file location

export default function Home() {
  const downloadFileName = "Gabriel_Magidov_CV.pdf"; // Specify the desired filename

  return (
    <section id="home" className="home-wrapper">
      <div className="home-container">
        <div className="home">
          <h1>Gabriel Magidov</h1>
          <p className="home_p">
            3rd year Computer Science student at Ben-Gurion University of the
            Negev
          </p>
          <ContactLinks />
          <div className="cvButtonContainer">
            <a className="cvButton" href={cv_file} download={downloadFileName}>
              Download CV
            </a>
          </div>
        </div>
        <div className="terminal">
          <div id="head"> </div>
          <div id="bar">
            <div id="red"></div>
            <div id="yellow"></div>
            <div id="green"></div>
          </div>
          <div id="screen">
            <p className="line-1 anim-typewriter">print("Hello World!")</p>
            <p className="line-2 anim-typewriter2">Hello World!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
