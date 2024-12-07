import React from "react";
import BannerBackground from "../../Assets/home-banner-background.png";
import BannerImage from "../../Assets/first.png";
import Navbar from "../Navbar/Navbar";
import { FiArrowRight } from "react-icons/fi";
import "./Home.css"; // Ensure this CSS file is imported

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="Banner background" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Connect, Collaborate, and Grow Together
          </h1>
          <p className="primary-text">
            Our platform provides students with the perfect space to connect, share ideas, and collaborate on exciting projects. 
            Whether you're networking, finding resources, or joining study groups, it's all here!
          </p>
          <button className="secondary-button">
            Join Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="Students collaborating" />
        </div>
      </div>
    </div>
  );
};

export default Home;
