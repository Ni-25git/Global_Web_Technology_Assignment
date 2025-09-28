import React from "react";
import woodBg from "../assets/wooden_bg.jpg"; 

const barStyle = {
  width: "100vw",
  minHeight: 44,
  background: `url(${woodBg}) center center/cover no-repeat`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw",
  position: "relative",
  padding: "2vw 4vw", // Add responsive padding
  boxSizing: "border-box"
};

const textStyle = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  fontSize: "4vw", // Responsive font size
  color: "#fff",
  letterSpacing: "1px",
  textAlign: "center",
  textShadow: "0 2px 8px #000a",
  maxWidth: "90vw", // Prevent overflow
  lineHeight: 1.2,
  wordBreak: "break-word"
};

export default function Caption() {
  return (
    <div style={barStyle}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
          @media (max-width: 600px) {
            .caption-text {
              font-size: 6vw !important;
              padding: 3vw 2vw !important;
            }
          }
        `}
      </style>
      <span className="caption-text" style={textStyle}>
        “WE DON’T JUST SELL FURNITURE. WE DELIVER COMFORT, DESIGN, AND JOY.”
      </span>
    </div>
  );
}
