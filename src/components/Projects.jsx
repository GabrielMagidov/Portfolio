import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import TabButton from "./TabButton.jsx";
import { PROJECTS } from "../data.js";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import "./Projects.css";

export default function Projects() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a project.</p>;

  if (selectedTopic) {
    tabContent = (
      <div className="tab-content" id="tab-content">
        <h3>{PROJECTS[selectedTopic].title}</h3>
        <p className="description">{PROJECTS[selectedTopic].description}</p>
        <p>
          <strong>Skills:</strong> {PROJECTS[selectedTopic].skills}
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
  }

  return (
    <Section title="My projects" id="projects">
      <div className="tab-buttons-container">
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
      <Tabs>{tabContent}</Tabs>
    </Section>
  );
}
