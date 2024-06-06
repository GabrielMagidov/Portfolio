import React from "react";
import "./Home.css";
import ContactLinks from "./ContactLinks";
import cover_photo from "../cover photo.png";
import cv_file from "../cv.pdf"; // Adjust the path based on your actual file location

export default function Home() {
  const downloadFileName = "Gabriel_Magidov_CV.pdf"; // Specify the desired filename

  return (
    <div className="container">
      <section id="home">
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
      </section>
      <div className="cover-photo">
        <img src={cover_photo} alt='print("Hello World")' />
      </div>
    </div>
  );
}
