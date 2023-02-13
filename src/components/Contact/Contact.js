import React from "react";
import "./Contact.css";
import Fade from "react-reveal/Fade";

function Contact() {
  return (
    <div className="contact-container white">
      <Fade bottom delay={400}>
        <h1>
          Contact <span className="contact-title">Me</span>{" "}
        </h1>
      </Fade>
      <form
        action="https://formspree.io/f/mqkozgno"
        method="POST"
        className="contact-inputs"
      >
        <Fade bottom delay={800}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="off"
            required
          />
        </Fade>

        <Fade bottom delay={1200}>
          <input
            type="email"
            name="Email"
            placeholder="Email"
            autoComplete="off"
            required
          />
        </Fade>

        <Fade bottom delay={1600}>
          <input
            type="text"
            name="Subject"
            placeholder="Subject"
            autoComplete="off"
            required
          />
        </Fade>

        <Fade bottom delay={2000}>
          <textarea
            name="message"
            placeholder="Message here"
            cols="30"
            rows="6"
            autoComplete="off"
            required
          ></textarea>
        </Fade>

        <Fade bottom delay={2400}>
        <div>
          <input className="submit-btn" type="submit" value="Send" />
        </div>
        </Fade>
      </form>
    </div>
  );
}

export default Contact;
