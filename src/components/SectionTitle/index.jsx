import React from "react";
import VerticalLine from "../VerticalLine";

const SectionTitle = ({ color, title }) => {
  return (
    <>
      <h3
        style={{
          color: `${color}`,
          fontWeight: 600,
          fontSize: "var(--size3)",
        }}
      >
        {title}
      </h3>
      <VerticalLine />
    </>
  );
};

export default SectionTitle;
