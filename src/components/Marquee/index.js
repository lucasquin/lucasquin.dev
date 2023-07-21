import React, { useState, useEffect } from "react";

function Marquee({ text, textColor, fontSize, fontWeight }) {
  const screenWidth = window.innerWidth;
  const textWidth = text.length;
  const textStartPosition = -textWidth * fontSize;
  const [position, setPosition] = useState(textStartPosition);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPosition = position + 5;
      setPosition((position) => {
        return newPosition > screenWidth + textWidth
          ? textStartPosition
          : newPosition;
      });
    }, 30);
    return () => clearInterval(interval);
  });

  const style = {
    position: "absolute",
    left: `${position}px`,
    whiteSpace: "nowrap",
    color: `${textColor}`,
    fontWeight: fontWeight,
    fontSize: fontSize,
  };

  return <p style={style}>{text}</p>;
}

export default Marquee;
