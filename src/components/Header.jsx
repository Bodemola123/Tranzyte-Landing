import React, { useState } from "react";
import "./Header.css";
import Logo from "../assets/images/logo.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo-image">
          <img src={Logo} alt="Tranzyte Logo" />
        </div>
      </div>

      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a>
        <a href="#who" onClick={() => setMenuOpen(false)}>Who We Serve</a>
        <a href="#enroll" onClick={() => setMenuOpen(false)}>Enroll</a>
      </nav>

      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>
    </header>
  );
};

export default Header;
