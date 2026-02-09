import React from 'react';
import './Footer.css';
import Logo from "../assets/images/logo1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={Logo} alt="Tranzyte Logo" className="logo1" />
        </div>
        <p className="footer-tagline">School of Transport and Logistics Excellence, Nigeria</p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#who">Who We Serve</a>
          <a href="#">Partner With Us</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Tranzyte. All rights reserved. Building Africa's transport future, one professional at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
