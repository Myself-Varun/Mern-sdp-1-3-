import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useNavigate, Link } from "react-router-dom"; // Import Link for navigation
import "./Navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      sectionId: "home-section",
    },
    {
      text: "About",
      icon: <InfoIcon />,
      sectionId: "about-section",
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      sectionId: "testimonials-section",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      sectionId: "contact-section",
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
      sectionId: "",
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        {/* Add logo if any */}
      </div>
      <div className="navbar-links-container">
        <a href="#home-section" onClick={() => scrollToSection("home-section")}>Home</a>
        <a href="#about-section" onClick={() => scrollToSection("about-section")}>About</a>
        <a href="#testimonials-section" onClick={() => scrollToSection("testimonials-section")}>Testimonials</a>
        <a href="#contact-section" onClick={() => scrollToSection("contact-section")}>Contact</a>
        <Link to="/Auth" className="primary-link">Login/Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
