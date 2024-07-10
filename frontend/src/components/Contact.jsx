import React, { useState } from "react";
import "./Contact.css";
import ContactLinks from "./ContactLinks";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, subject, message }),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      setStatus("Failed to send email.");
      console.error("Error:", error);
    }
  };

  return (
    <section id="contact">
      <h2>Contact me</h2>
      <p>You can reach me through the following platforms:</p>
      <ContactLinks />
      <h3>Or send me an email directly:</h3>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </section>
  );
}
