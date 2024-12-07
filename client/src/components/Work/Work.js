import React from "react";
import PickMeals from "../../Assets/profile.png";
import ChooseMeals from "../../Assets/join.webp";
import DeliveryMeals from "../../Assets/grow.webp";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Create a Profile",
      text: "Set up your profile to showcase your interests, skills, and what you're looking for. It's your space to shine and connect with others.",
    },
    {
      image: ChooseMeals,
      title: "Join Communities",
      text: "Select the communities that align with your goals. Whether it's coding, art, or research, find like-minded students to collaborate with.",
    },
    {
      image: DeliveryMeals,
      title: "Collaborate & Grow",
      text: "Engage in projects, discussions, and networking opportunities. Our platform helps you grow your skills and expand your network.",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Our platform is designed to help students connect, collaborate, and grow. Here’s how you can get started and make the most of it.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt={data.title} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
