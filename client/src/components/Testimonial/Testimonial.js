import React from "react";
import ProfilePic from "../../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="testimonial-section-wrapper">
      <div className="testimonial-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What Students Are Saying</h1>
        <p className="primary-text">
          Our platform is transforming how students collaborate, network, and grow together. Here's what some of our users have to say about their experience.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <div className="testimonial-content">
          <img
            src={ProfilePic}
            alt="Student testimonial"
            className="testimonial-profile-pic"
          />
          <p className="testimonial-text">
            "This platform has helped me connect with like-minded students and
            work on exciting projects. The collaborative features are amazing!"
          </p>
          <div className="testimonial-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2 className="testimonial-name">Ashish Kumar</h2>
          <p className="testimonial-designation">Student at KL University</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
