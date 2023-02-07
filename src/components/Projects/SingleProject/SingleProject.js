import React from "react";
import "./SingleProject.css";

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
          </button>
          <button className="button" onClick={() => window.open("#")}>
            Live Link
          </button>
          <button className="button" onClick={() => window.open("#")}>
            GitHub
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
