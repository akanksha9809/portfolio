import React from "react";
import "./SingleProject.css";
import { FaExternalLinkAlt } from "react-icons/fa";

function SingleProject({ item }) {
  console.log(item.img);
  return (
    <div className="singleProjectContainer">
      <div className="left-column">
        <h2 className="heading">{item.title}</h2>
        <p>{item.description}</p>
        <div className="footer">
          <button className="button" onClick={() => window.open("#")}>
            Video Demo
            <div className="icons">
              <FaExternalLinkAlt />
            </div>
          </button>
          <button className="button" onClick={() => window.open("#")}>
            Live Link
            <div className="icons">
              <FaExternalLinkAlt />
            </div>
          </button>
          <button
            className="button"
            onClick={() => window.open(item.gitHubLink)}
          >
            GitHub
            <div className="icons">
              <FaExternalLinkAlt />
            </div>
          </button>
        </div>
      </div>
      <div className="right-column">
        <img src={item.img} alt="" />
      </div>
    </div>
  );
}

export default SingleProject;
{
  /* <div className="all-icons">
            <IoOpenOutline/>
            </div> */
}
