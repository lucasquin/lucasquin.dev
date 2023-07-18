import React from "react";
import "./BackgroundImageZoom.css";

function BackgroundImageZoom({ imagePath, imageDescription }) {
  return (
    <div className="image-wrapper">
      <img src={imagePath} alt={imageDescription} />
    </div>
  );
}

export default BackgroundImageZoom;
