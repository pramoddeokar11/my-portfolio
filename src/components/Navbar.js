import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">Portfolio</div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {/* Close (X) Icon Inside Menu */}
          <span className="close-icon" onClick={() => setMenuOpen(false)}>&times;</span>
          
          <li><a href="#" onClick={handleScrollToTop}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
