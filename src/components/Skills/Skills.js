import React from "react";
import "./Skills.css";
import Fade from 'react-reveal/Fade';

function Skills() {
  return (
    <div className="skills-container">
      <Fade top duration={1500}>
      <h1>
        My <span className="skills-title">Skills</span>{" "}
      </h1>
      </Fade>
      <div className="skills-box">
        <Fade left duration={1500}>
        <div className="language skill-item">
          <h3>Languages</h3>
          <div className="skill-image-section">
            <img
              src="https://e7.pngegg.com/pngimages/46/626/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template.png"
              alt=""
            />
            <img
              src="https://banner2.cleanpng.com/20180412/kye/kisspng-python-programming-language-computer-programming-language-5acfdc3636bac7.8891188615235717662242.jpg"
              alt=""
            />
            <img
              src="https://ih1.redbubble.net/image.815350031.4911/st,small,507x507-pad,600x600,f8f8f8.u1.jpg"
              alt=""
            />
          </div>
        </div>
        </Fade>
        <Fade right duration={1500}>
        <div className="frontend skill-item">
          <h3>Frontend</h3>
          <div className="skill-image-section">
            <img
              src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaiyQiqSxpPIX-mgsWn3doXfHmdwk_RoGTBw&usqp=CAU"
              alt=""
            />
            <img
              src="https://softprodigy.com/wp-content/uploads/2019/06/react-js.png"
              alt=""
            />
          </div>
        </div>
        </Fade>
        <Fade left duration={1500}>
        <div className="backend skill-item">
          <h3>Backend</h3>
          <div className="skill-image-section">
            <img
              src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
              alt=""
            />
            <img
              src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png"
              alt=""
            />
            <img
              src="https://www.seekpng.com/png/detail/117-1177155_mongodb-logo-mongodb-logo-transparent.png"
              alt=""
            />
          </div>
        </div>
        </Fade>
        <Fade right duration={1500}>
        <div className="tools skill-item">
          <h3>Tools</h3>
          <div className="skill-image-section">
            <img
              src="https://3.bp.blogspot.com/-xhNpNJJyQhk/XIe4GY78RQI/AAAAAAAAItc/ouueFUj2Hqo5dntmnKqEaBJR4KQ4Q2K3ACK4BGAYYCw/s1600/logo%2Bgit%2Bicon.png"
              alt=""
            />
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt=""
            />
            <img
              src="https://e1.pngegg.com/pngimages/947/906/png-clipart-clay-os-6-a-macos-icon-visual-studio-code-blue-and-white-illustration.png"
              alt=""
            />
          </div>
          </div>
        </Fade>
        
        
      </div>
    </div>
  );
}

export default Skills;


