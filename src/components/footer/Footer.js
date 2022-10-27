import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Burini Braian</h1>
        <p>Argentina</p>
        <p>San pedro | Pcia. Buenos Aires</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p> And lets down to work</p>
      </div>
      <div className="footer-sns">
        <div className="desing-by">Desing By your name</div>
        <div className="sns-links">
            <a href="https://www.linkedin.com/in/braian-burini-a440501a8/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin linkedin"></i>
            </a>
            <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter twitter"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook facebook"></i>
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
