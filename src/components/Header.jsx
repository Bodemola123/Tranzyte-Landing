import React, { useState } from "react";
import "./Header.css";
import Logo from "../assets/images/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo-image">
          <img src={Logo} alt="Tranzyte Logo" />
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a>
        <a href="#who" onClick={() => setMenuOpen(false)}>Who We Serve</a>
        <a href="#enroll" onClick={() => setMenuOpen(false)}>Enroll</a>
      </nav>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
