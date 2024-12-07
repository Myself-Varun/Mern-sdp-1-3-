import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          
        </div>
        <div className="footer-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <BsTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <SiLinkedin />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <BsYoutube />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <a href="/quality">Qualtiy</a>
          <a href="/help">Help</a>
          <a href="/share">Share</a>
          <a href="/careers">Careers</a>
          <a href="/testimonials">Testimonials</a>
          <a href="/work">Work</a>
        </div>
        <div className="footer-section-columns">
          <a href="tel:+24453337783">244-5333-7783</a>
          <a href="mailto:hello@food.com">hello@food.com</a>
          <a href="mailto:press@food.com">press@food.com</a>
          <a href="mailto:contact@food.com">contact@food.com</a>
        </div>
        <div className="footer-section-columns">
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
