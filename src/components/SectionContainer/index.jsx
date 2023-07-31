import React from "react";
import "./index.css";

const SectionContainer = ({ children }) => {
  return (
    <div className="cssSectionContainer">
      <section>{children}</section>
    </div>
  );
};

export default SectionContainer;
