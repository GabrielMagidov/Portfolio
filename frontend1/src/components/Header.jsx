import React from "react";
import "./Header.css";

const Header = () => {
  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
    closeNav();
  };

  return (
    <header>
      <div style={{ display: "relative" }}>
        <span onClick={openNav}>&#9776;</span>
      </div>
      <div id="myNav" className="overlay">
        <a className="closebtn" onClick={closeNav}>
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
    </header>
  );
};

export default Header;
