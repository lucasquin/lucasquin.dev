import React, { useState, useEffect } from "react";
import "./index.css";

function ImageZoom({ imagePath, imageDescription }) {
  const [scale, setScale] = useState();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    function handleScroll() {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY * 0.0005;
      setScale(newScale);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="container">
      <img
        className="image"
        src={imagePath}
        alt={imageDescription}
        style={{ transform: `scale(${scale})` }}
      />
    </div>
  );
}

export default ImageZoom;
