import React from "react";
import imgPersonal from "../../media/imgPersonal.jpg";

import "./About.css";



const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Sobre mi</h3>
        <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta)
        </p>
      </div>
      <div className="about-img">
        <img className="img-personal" src={imgPersonal} alt="about" />
      </div>
    </div>
  );
};

export default About;
