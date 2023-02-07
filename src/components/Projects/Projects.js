import React from "react";
import "./Projects.css";
import SingleProject from "./SingleProject/SingleProject";
import img from "./NotesApp.png";

function Projects() {
  const data = [
    {
      title: "Notes App",
      description:
        "User can create, delete and search the created notes. Notes app helps user to track notes. Uses javascript local storage concept to store todos in the clint side.",
      img: img,
      videoLink: "",
      liveLink: "",
      gitHubLink: "",
    },
    {
      title: "News App",
      description:
        "Fetch news daily using newsapi and display the news in minimal and categorized manner. There are many category for news.",
      img: img,
      videoLink: "",
      liveLink: "",
      gitHubLink: "",
    },
  ];


  return (
    <div className="projects-container">
      <h1 className="project-header">
        My <span className="primary-color">Projects</span>
      </h1>
      {data.map((item) => (
        <SingleProject item={item} />
      ))}
    </div>
  );
}

export default Projects;
