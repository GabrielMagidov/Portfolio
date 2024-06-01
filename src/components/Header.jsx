import React from "react";
import "./Header.css";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <button
              className="NavButton"
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="NavButton"
              onClick={() => scrollToSection("about")}
            >
              About Me
            </button>
          </li>
          <li>
            <button
              className="NavButton"
              onClick={() => scrollToSection("projects")}
            >
              My Projects
            </button>
          </li>
          <li>
            <button
              className="NavButton"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              className="NavButton"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
