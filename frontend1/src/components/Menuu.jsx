import { useState } from "react";
import "./Menu.css";

export default function Menu() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    const nav = document.getElementById("myNav");
    if (isNavOpen) {
      nav.style.width = "0%";
    } else {
      nav.style.width = "100%";
    }
    setIsNavOpen(!isNavOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
    toggleNav(); // Close the nav after scrolling
  };

  return (
    <>
      <div>
        <span className="toggle-button" onClick={toggleNav}>
          &#9776;
        </span>
      </div>
      <div id="myNav" className="overlay">
        <a className="closebtn" onClick={toggleNav}>
          &times;
        </a>
        <div className="overlay-content">
          <a onClick={() => scrollToSection("home")}>Home</a>
          <a onClick={() => scrollToSection("about")}>About Me</a>
          <a onClick={() => scrollToSection("projects")}>My Projects</a>
          <a onClick={() => scrollToSection("skills")}>Skills</a>
          <a onClick={() => scrollToSection("contact")}>Contact Me</a>
        </div>
      </div>
    </>
  );
}
