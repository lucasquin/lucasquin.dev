import React from "react";
import "./index.css";

export default function SectionContainer({ children }) {
  return (
    <div className="cssSectionContainer">
      <section>{children}</section>
    </div>
  );
}
