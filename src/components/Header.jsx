import React from 'react';
import './Header.css';
import Logo from "../assets/images/logo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <div className='logo-image'>
          <img src={Logo} alt="Tranzyte Logo" />
        </div>
      </div>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#courses">Courses</a>
        <a href="#who">Who We Serve</a>
        <a href="#enroll">Enroll</a>
      </nav>
    </header>
  );
};

export default Header;
