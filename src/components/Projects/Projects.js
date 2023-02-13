import React from "react";
import "./Projects.css";
import SingleProject from "./SingleProject/SingleProject";
import img from "./NotesApp.png";
import newsImg from "../../asset/Screenshot (87).png"
import socialMedia from "../../asset/social-media.png"
import ecommerce from "../../asset/ecommerce.png"

function Projects() {
  const data = [
    {
      title: "The Book House",
      description:
        "The Book House is an E-commerce web application. People can view all the categories, single book details page, and they can sort and filter books by genre. People can add books to the cart and see all the added books in the cart details. Cart functionality is implemented using Redux. Cart data is persevered using Redux persist.",
      img: ecommerce,
      videoLink: "https://github.com/akanksha9809/ecommerce-client/blob/master/README.md#demo-video",
      liveLink: "",
      gitHubLink: "",
    },
    {
      title: "Social Media App",
      description:
        "Users can post a picture, write a caption, set and update their profile picture and bio. Users can follow/unfollow other users, see the posts of following users, and like/unlike the posts. Users can create an account, log in and log out.",
      img: socialMedia,
      videoLink: "https://github.com/akanksha9809/Social-media-client#demo-video",
      liveLink: "",
      gitHubLink: "https://github.com/akanksha9809/Social-media-server",
    },
    {
      title: "News App",
      description:
        "Fetch news daily using newsapi and display the news in minimal and categorized manner. There are many category for news.",
      img: newsImg,
      videoLink: "",
      liveLink: "",
      gitHubLink: "https://github.com/akanksha9809/Notes-App",
    },
    {
      title: "Notes App",
      description:
        "User can create, delete and search the created notes. Notes app helps user to track notes. Uses javascript local storage concept to store todos in the clint side.",
      img: img,
      videoLink: "",
      liveLink: "",
      gitHubLink: "https://github.com/akanksha9809/Notes-App",
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
      <button className="button" onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>
        Back to top
      </button>
    </div>
  );
}

export default Projects;
