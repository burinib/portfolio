import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src: "https://images.unsplash.com/photo-1578932750355-5eb30ece487a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    alt: "Project 1",
    agreg: "Project 1 React",
    desc: "BahiaInformal",
    link: "https://burinib.github.io/react-ecommerce/",
  },
  {
    src: "https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "Project 2",
    agreg: "Project 2 React",
    desc: "My portfolio",
    link: "https://burinib.github.io/portfolio/",
  },
  {
    src: "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=392&q=80",
    alt: "Project 3",
    agreg: "Project 3 jS",
    desc: "Bahia",
    link: "https://burinib.github.io/proyecto-bahia/",
  },
  {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    alt: "Project 4",
    agreg: "Project 4",
    desc: "Working",
    link: "#",
  },
];

const slides = slidesInfo.map((slide, index) => (
    <div className="slide-container">
    <a href={slide.link} target="blank">
      <img src={slide.src} alt={slide.alt} />
    </a>
      <div className="slide-desc">
        <span>{slide.desc}</span>
        <span className="slideAgreg">{slide.agreg}</span>
      </div>
    </div>
));

export default slides;
