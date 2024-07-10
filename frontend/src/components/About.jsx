import React from "react";
import "./About.css";
import about_me_photo from "../about_me.jpg";

export default function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="pText">
            I am a highly motivated 3rd year Computer Science student at
            Ben-Gurion University of the Negev, currently in my last semester.
            Passionate about technology since childhood, I focus on programming
            and problem-solving. Eager to learn new technologies and deliver
            high-quality independently and collaboratively, valuing open
            communication and knowledge sharing. I seek opportunities to
            contribute my technical skills, adaptability, and strong work ethic
            to a dynamic organization.
          </p>
        </div>
        <div className="about-image">
          <img src={about_me_photo} alt="about me" />
        </div>
      </div>
    </section>
  );
}
