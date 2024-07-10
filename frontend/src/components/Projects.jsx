import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import TabButton from "./TabButton.jsx";
import { PROJECTS } from "../data.js";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import "./Projects.css";

export default function Projects() {
  const [selectedTopic, setSelectedTopic] = useState("SetCardGame");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = (
    <div className="tab-content" id="tab-content">
      <p className="description">{PROJECTS[selectedTopic].description}</p>
      <p className="skills_p">
        {"Skills: "}
        {PROJECTS[selectedTopic].skills}
      </p>
      <a
        href={PROJECTS[selectedTopic].link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} /> GitHub
      </a>
    </div>
  );

  return (
    <>
      <Section id="project">
        <h2>My projects</h2>
        <div className="projects-container">
          <div className="tab-buttons-column">
            <ul className="tab-buttons-list">
              <li>
                <TabButton
                  isSelected={selectedTopic === "SetCardGame"}
                  onSelect={() => handleSelect("SetCardGame")}
                >
                  Set Card Game
                </TabButton>
              </li>
              <li>
                <TabButton
                  isSelected={selectedTopic === "ClientServer"}
                  onSelect={() => handleSelect("ClientServer")}
                >
                  Client Server
                </TabButton>
              </li>
              <li>
                <TabButton
                  isSelected={selectedTopic === "shell"}
                  onSelect={() => handleSelect("shell")}
                >
                  Linux Shell
                </TabButton>
              </li>
              <li>
                <TabButton
                  isSelected={selectedTopic === "portfolio"}
                  onSelect={() => handleSelect("portfolio")}
                >
                  Portfolio
                </TabButton>
              </li>
            </ul>
          </div>
          <div className="tab-content-container">
            <Tabs ButtonsContainer="div">{tabContent}</Tabs>
          </div>
        </div>
      </Section>
    </>
  );
}
