import React from "react";

import "./Skills.css";

export const Skills = () => {
  return (
    <section className="skillContainer">
      <div className="skillTextContainer">
        <h1 className="skillTittle">Mis habilidades</h1>
        <h3 className="skillText">
          Estas son las tecnologias en las cuales me desempeño:
        </h3>


        <div className="skillIconContainer" data-aos="flip-right">
          <i className="fa-brands fa-html5" ></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-square-js"></i>
          <i className="fa-brands fa-react"></i>
          <i className="fa-brands fa-sass"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-bootstrap"></i>
          <i className="fa-brands fa-npm"></i>
        </div>
      </div>
    </section>
  );
};

export default Skills;
