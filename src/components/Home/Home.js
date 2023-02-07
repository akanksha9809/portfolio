import React from "react";
import "./Home.css";
import Typed from "react-typed";

function Home() {
  return (
    <div className="home-container white">
      <div className="home-container-left">
        <img id="splash" src={require("./Home-bg.png")} alt="" />
        <img src={require("./Home-img.png")} alt="" />
      </div>
      <div className="home-container-right">
        <h2>Hello! this is</h2>
        <h1 className="name">Akanksha Bodhane</h1>

        <Typed
          strings={["I am a Coder", "I am a Full Stack Developer"]}
          typeSpeed={100}
          backSpeed={80}
          backDelay={1500}
          loop
        ></Typed>
      </div>
    </div>
  );
}

export default Home;
