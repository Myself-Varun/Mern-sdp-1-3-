import React from "react";
import AboutBackground from "../../Assets/about-background.png";
import AboutBackgroundImage from "../../Assets/image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import "./About.css";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="Background" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="About us" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Connecting Students, Empowering Growth
        </h1>
        <p className="primary-text">
          Our platform fosters a dynamic and collaborative space for students to connect, share, and grow. 
          Whether it’s networking, finding resources, or exploring opportunities, we bring it all together.
        </p>
        <p className="primary-text">
          Join a community that celebrates knowledge, creativity, and collaboration. Your journey starts here!
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
