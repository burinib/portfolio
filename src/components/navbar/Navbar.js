import React from "react";
import "./Navbar.css";

export const Navbar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : ""}`}>
      <div className="navbarContainer">
        <div className="navbar-logo" onClick={toTheTop}>
          Home
        </div>
        <ul className="navbarSecond">
          <a href="#about"> 
          <li>About me</li>
          </a>
          <a href="#proyects">
          <li>Proyects</li>
          </a>
          <a href="#skills">
          <li>Skills</li>
          </a>
          <a href="#contact">
          <li>Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
