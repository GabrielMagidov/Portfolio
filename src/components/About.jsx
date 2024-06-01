import React from "react";
import "./About.css";
import about_me_photo from "../about_me.png";

export default function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I am a highly motivated 3rd year Computer
            <br /> Science student at Ben-Gurion University
            <br /> of the Negev, currently in my last semester.
            <br /> Passionate about technology since childhood, <br />I focus on
            programming and problem-solving.
            <br />
            Eager to learn new technologies and deliver <br />
            high-quality independently and collaboratively,
            <br /> valuing open communication and knowledge <br />
            sharing. I seek opportunities to contribute my <br />
            technical skills, adaptability, and strong work <br />
            ethic to a dynamic organization.
          </p>
        </div>
        <div className="about-image">
          <img src={about_me_photo} alt="about me photo" />
        </div>
      </div>
    </section>
  );
}
