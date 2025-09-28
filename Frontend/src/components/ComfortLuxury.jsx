import React from "react";
import bgImg from "../assets/comfort_luxury.png";

const sectionStyle = {
  width: "100vw",
  minHeight: 550,
  background: `url(${bgImg}) center center/cover no-repeat`,
  position: "relative",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  overflow: "hidden"
};

const headingStyle = {
  fontFamily: "'Cinzel', serif",
  fontWeight: 500,
  fontSize: 40,
  color: "#fff",
  textAlign: "center",
  marginTop: -250,
  marginBottom: 18,
  letterSpacing: "2px",
  textShadow: "0 2px 12px #000a"
};

const subHeadingStyle = {
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 400,
  fontSize: 22,
  color: "#fff",
  textAlign: "center",
  marginBottom: 0,
  textShadow: "0 2px 8px #000a"
};

const bottomRowStyle = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 38,
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const experienceStyle = {
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 400,
  fontSize: 22,
  color: "#fff",
  textAlign: "center",
  marginBottom: 18,
  textShadow: "0 2px 8px #000a"
};

const btnStyle = {
  display: "flex",
  alignItems: "center",
  background: "#fff",
  color: "#3a2416",
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 700,
  fontSize: 18,
  border: "none",
  borderRadius: 24,
  padding: "8px 28px 8px 18px",
  boxShadow: "0 2px 8px #0002",
  cursor: "pointer",
  outline: "none"
};

const btnIconStyle = {
  width: 32,
  height: 32,
  borderRadius: "50%",
  background: "#3a2416",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 10,
  fontSize: 20
};

export default function ComfortLuxury() {
  return (
    <section style={sectionStyle}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Montserrat:wght@400;700&display=swap');
          @media (max-width: 900px) {
            .cl-heading {
              font-size: 28px !important;
              margin-top: -120px !important;
            }
            .cl-subheading, .cl-experience {
              font-size: 16px !important;
            }
            .cl-btn {
              font-size: 15px !important;
              padding: 7px 18px 7px 12px !important;
            }
            .cl-btn-icon {
              width: 26px !important;
              height: 26px !important;
              font-size: 16px !important;
              margin-right: 7px !important;
            }
            .cl-bottom-row {
              bottom: 18px !important;
            }
            section {
              min-height: 380px !important;
            }
          }
          @media (max-width: 600px) {
            .cl-heading {
              font-size: 20px !important;
              margin-top: -60px !important;
              margin-bottom: 10px !important;
            }
            .cl-subheading, .cl-experience {
              font-size: 13px !important;
            }
            .cl-btn {
              font-size: 13px !important;
              padding: 6px 12px 6px 8px !important;
            }
            .cl-btn-icon {
              width: 20px !important;
              height: 20px !important;
              font-size: 12px !important;
              margin-right: 5px !important;
            }
            .cl-bottom-row {
              bottom: 10px !important;
            }
            section {
              min-height: 260px !important;
            }
          }
        `}
      </style>
      <div style={{ width: "100%" }}>
        <div className="cl-heading" style={headingStyle}>
          “REDEFINE COMFORT. REDEFINE LUXURY.”
        </div>
        <div className="cl-subheading" style={subHeadingStyle}>
          Crafted With Premium Fabrics, Timeless Design, And Ultimate Comfort.
        </div>
      </div>
      <div className="cl-bottom-row" style={bottomRowStyle}>
        <div className="cl-experience" style={experienceStyle}>
          Experience World-Class Craftsmanship, Tailored To Perfection
        </div>
        <button className="cl-btn" style={btnStyle}>
          <span className="cl-btn-icon" style={btnIconStyle}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="9" fill="#3a2416"/>
              <path d="M7.5 12L10.5 9L7.5 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          Shop Now
        </button>
      </div>
    </section>
  );
}
