import React, { useState, useEffect } from "react";
import "./index.css";

function Marquee({ text }) {
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition((position) => position + 15);
        }, 100);
        return () => clearInterval(interval);
    });

    return (
        <div className="container">
            <div
                style={{
                    position: "absolute",
                    left: `${position}px`,
                    whiteSpace: "nowrap",
                    color: "black"
                }}
            >
                {text}
            </div>
        </div>
    );
}

export default Marquee;
