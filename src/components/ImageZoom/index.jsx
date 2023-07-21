import React, { useState, useEffect } from "react";
import "./index.css";

function ImageZoom({ imagePath, imageDescription }) {
  const [scale, setScale] = useState(1);

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
    <div
      style={{
        backgroundImage: `url(${imagePath})`,
        backgroundSize: `${scale * 100}%`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    ></div>
  );
}

export default ImageZoom;
