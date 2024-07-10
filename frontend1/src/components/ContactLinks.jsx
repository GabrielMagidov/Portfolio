import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./ContactLinks.css";

export default function ContactLinks() {
  return (
    <div className="contact-links">
      <a
        href="https://wa.me/+972528886503"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
        WhatsApp
      </a>
      <a href="mailto:gabrielmag1999@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
        Email
      </a>
      <a
        href="https://www.linkedin.com/in/gabriel-magidov-a23019255/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
        LinkedIn
      </a>
      <a
        href="https://github.com/GabrielMagidov"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
        GitHub
      </a>
    </div>
  );
}
