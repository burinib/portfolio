import React from "react";
import coverVideo from "../../media/coverVideo3.mp4";

import "./Cover.css";

export const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Burini Braian</h1>
      <p> Front-end Developer | JavaScript | React </p>
    </div>
  );
};

export default Cover;
