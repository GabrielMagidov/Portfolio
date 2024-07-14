import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-bubble">
          <h3>Programming Languages</h3>
          <p>Python, Java, JavaScript, C, C++, C#</p>
        </div>
        <div className="skill-bubble">
          <h3>Web Development</h3>
          <p>HTML, CSS, React, Node.js</p>
        </div>
        <div className="skill-bubble">
          <h3>Database Management</h3>
          <p>SQL, Pandas, MongoDB</p>
        </div>
        <div className="skill-bubble">
          <h3>Tools and Frameworks</h3>
          <p>Git, Docker, TensorFlow</p>
        </div>
      </div>
    </section>
  );
}
