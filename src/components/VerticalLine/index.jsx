import React from "react";
import "./index.css";

const VerticalLine = ({ color = "var(--unselected)" }) => {
  return (
    <hr
      className="cssVerticalLine"
      style={{
        borderColor: `${color}`,
      }}
    />
  );
};

export default VerticalLine;
