import React from "react";
import imgPersonal from "../../media/imgPersonal.jpg";
import descarga from "../../media/CvBuriniBraian.pdf";

import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Sobre mi</h3>
        {/*   <p>
          <h2>Informacion personal:</h2>
          <p>Nac: 20-09-1991 </p>
          <p>D.N.I: 36.262.117 </p>
          <p>Domicilio actual: Hipolito Irigoyen 264</p>
          <p>Tel: +54 03329 15565250</p>
          <p>Email: braianb55@hotmail.com</p>
        </p>
        <h2>Experiencia laboral:</h2>
        <h4>02-09-2013 - 2020 PREAR S.A </h4>
        <h4>Funciones desarrolladas</h4>
           <h5>Deposito Prear San Pedro</h5>
        <p>
          Control de stock, inventarios, compras locales de materia prima e
          insumos para el uso diario de la empresa(distribucion de los mismos)
        y recepcion. Organizacion, clasificacion y orden de la documentacion de la empresa, control de gastos y presupuestos</p>
        <h5>Balanza Prear San Pedro</h5>
        <p>Responsable de ingresos y egresos de camiones dentro de la empresa</p>
        <p>Recepcion de los insumos diarios dentro de esta misma</p>
        <h5>Logistica y expedicion</h5>
      <p>Asistente de despacho y logisitica de la empresa, control de obras en diferentes partes del pais.</p>
      <h4>13-06-2020 - Actual T.A.S.A</h4>
      <p>Operario polivalente de la empresa Toyota ubicada en Zarate.</p>
      <p>Me ecuentro desarrollando tareas en el area de Motores, cumpliendo con los objetivos que dicha empresa necesita, trabajando en equipo y con buena predisposicion para seguir aprendiendo dia a dia</p>
 */}
        <p>
          ¡Hola! Mi nombre es Braian, Soy desarrollador de aplicaciones desktop,
          web y móvil, abocado especificamente en el area de Front-End
        </p>
        <p>
          Apasionado por las tecnologías web, día a día me esfuerzo para mejorar
          mis capacidades y obtener nuevos conocimientos.
        </p>
        <div className="descarga">
          <a href={descarga} download>
            Descargar mi CV
          </a>
        </div>
      </div>
      <div className="about-img">
        <img className="img-personal" src={imgPersonal} alt="about" />
      </div>
    </div>
  );
};

export default About;
