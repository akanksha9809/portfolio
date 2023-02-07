import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container white">
      <h1>
        {" "}
        Contact <span className="contact-title">Me</span>{" "}
      </h1>
      <form
        action="https://formspree.io/f/mqkozgno"
        method="POST"
        className="contact-inputs"
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="off"
          required
        />

        <input
          type="email"
          name="Email"
          placeholder="Email"
          autoComplete="off"
          required
        />

        <input
          type="text"
          name="Subject"
          placeholder="Subject"
          autoComplete="off"
          required
        />

        <textarea
          name="message"
          placeholder="Message here"
          cols="30"
          rows="6"
          autoComplete="off"
          required
        ></textarea>

        <input className="submit-btn" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
