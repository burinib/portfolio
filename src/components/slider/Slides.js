import React from "react";
import "./Slider.css"

const slidesInfo = [
    {
        src: "https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt:"Project 1",
        agreg:"Project 1",
        desc:"Ecommerce-BahiaInformal",
    },
    {
        src: "https://images.unsplash.com/photo-1580568287125-ae9bad4f0eef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        alt:"Project 2",
        agreg:"Project 2",
        desc:"Project 2",
    },
    {
        src: "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=392&q=80",
        alt:"Project 3",
        agreg:"Project 3",
        desc:"Project 3",
        
    },
]


const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt}/>
        <div className="slide-desc">
            <span>{slide.desc}</span>
            <span className="slideAgreg">{slide.agreg}</span>
        </div>
    </div>
));

export default slides;