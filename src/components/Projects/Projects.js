import React from "react";
import "./Projects.css";
import SingleProject from "./SingleProject/SingleProject";
import img from "./NotesApp.png";
import newsImg from "../../asset/newsApp.png";
import socialMedia from "../../asset/social-media.png";
import ecommerce from "../../asset/ecommerce.png";
import Flip from "react-reveal/Flip";

function Projects() {
  const data = [
    {
      title: "The Book House",
      description:
        "The Book House is an E-commerce web application for customers to purchase books. The store offers secure online payment options and a reliable fulfillment process. The web app allows customers to sort and filter from the collections and add items to a virtual shopping cart. A fully functional online store that provides customers with a user-friendly interface to browse and purchase books from a comprehensive catalog.",
      img: ecommerce,
      videoLink:
        "https://github.com/akanksha9809/ecommerce-client/blob/master/README.md#demo-video",
      liveLink: "",
      gitHubLink: "https://github.com/akanksha9809/ecommerce-strapi-server",
    },
    {
      title: "Social Media App",
      description:
        "Created a modern, scalable, and interactive web application using React, NodeJS, Express, and MongoDB. Application is secured by implementing users Authentication using JWT tokens. Added advanced features like uploading image with a caption, like, follow, set profile and bio. MVC architecture is followed. Client and server are both deployed on DigitalOcean.",
      img: socialMedia,
      videoLink:
        "https://github.com/akanksha9809/Social-media-client#demo-video",
      liveLink: "https://social-media-client-lnco.onrender.com",
      gitHubLink: "https://github.com/akanksha9809/Social-media-server",
    },
    {
      title: "News App",
      description:
        "Developed a news app that uses the News API to deliver the latest news articles and updates from a variety of sources. Integrated the News API into the app to provide real-time news updates and ensure up-to-date information for users. The app allows users to search for news articles by keywords and topics",
      img: newsImg,
      videoLink: "",
      liveLink: "",
      gitHubLink: "https://github.com/akanksha9809/Notes-App",
    },
    {
      title: "Notes App",
      description:
        "User can create, delete and search the created notes. Notes app helps user to track notes. Used React state and props to manage the app's data and ensure data consistency across different components.",
      img: img,
      videoLink: "",
      liveLink: "",
      gitHubLink: "https://github.com/akanksha9809/Notes-App",
    },
  ];

  return (
    <div className="projects-container">
      <Flip top>
        <h1 className="project-header">
          My <span className="primary-color">Projects</span>
        </h1>
      </Flip>

      {data.map((item) => (
        <SingleProject item={item} />
      ))}
      <button
        className="button"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        Back to top
      </button>
    </div>
  );
}

export default Projects;
