import React from "react";
import "./index.css";

export default function VerticalLine({ color = "var(--unselected)" }) {
  return (
    <hr
      className="cssVerticalLine"
      style={{
        borderColor: `${color}`,
      }}
    />
  );
}
