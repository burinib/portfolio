import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";

import "./Slider.css";

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>My projects</h2>
      </div>

      <Carousel
        slidesPerPage={3}
        animationSpeed={200}
        centered
        offset={50}
        itemWidth={400}
        slides={Slides}
        plugins={["arrows", "infinite"]}
        breakpoints={{
          960: {
            plugins: ["infinite"   ],
            itemWidth: 250,
            slidesPerPage: 3,
          },
        }}
      />
    </div>
  );
};

export default Slider;
