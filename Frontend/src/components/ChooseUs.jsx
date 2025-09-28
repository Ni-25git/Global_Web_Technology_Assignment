import React, { useEffect, useState } from "react";
import axios from "axios";

const FONT_FAMILY = "'Playfair Display', serif";
const SUB_FONT = "'Montserrat', sans-serif";

const sectionStyle = {
  background: "#fbeee0",
  border: "2px solid #bfa17a",
  borderRadius: "6px",
  padding: "24px 0 32px 0", 
  width: "100vw",
  position: "relative",
  color: "#4c2e1e",
  fontFamily: FONT_FAMILY,
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw"
};

const containerStyle = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "0 16px"
};

const headingStyle = {
  textAlign: "center",
  fontWeight: 700,
  fontSize: 36,
  letterSpacing: "1px",
  marginBottom: 0,
  fontFamily: FONT_FAMILY,
  color: "#6d3b23"
};

const subHeadingStyle = {
  textAlign: "center",
  fontWeight: 600,
  fontSize: 18,
  margin: "8px 0 32px 0",
  fontFamily: SUB_FONT,
  color: "#4c2e1e"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "24px",
  marginBottom: 32
};

const gridStyle2 = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "24px"
};

const cardStyle = {
  background: "#fff",
  borderRadius: "14px",
  boxShadow: "0 2px 12px #0001",
  padding: "0 0 12px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const imgStyle = {
  width: "100%",
  height: 160,
  objectFit: "cover",
  borderRadius: "12px 12px 0 0"
};

const titleStyle = {
  fontWeight: 700,
  fontSize: 20,
  margin: "12px 0 4px 0",
  fontFamily: FONT_FAMILY,
  color: "#6d3b23",
  letterSpacing: "0.5px"
};

const subtitleStyle = {
  fontWeight: 400,
  fontSize: 14,
  color: "#4c2e1e",
  fontFamily: SUB_FONT,
  textAlign: "center",
  margin: "0 12px"
};

const dottedLineStyle = {
  border: "none",
  borderTop: "2px dotted #bfa17a",
  margin: "0 0 16px 0"
};

export default function ChooseUs() {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4500/chooseus")
      .then((res) => {
        if (Array.isArray(res.data.chooseUs)) {
          setFeatures(res.data.chooseUs);
          setError("");
        } else {
          setFeatures([]);
          setError("Invalid data format from backend.");
        }
        setLoading(false);
      })
      .catch((err) => {
        setFeatures([]);
        setError("Failed to fetch products from backend.");
        setLoading(false);
      });
  }, []);

  const topRow = features.slice(0, 3);
  const bottomRow = features.slice(3, 5);

  return (
    <section style={sectionStyle}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Playfair+Display:wght@700&display=swap');
          @media (max-width: 1100px) {
            .chooseus-container { max-width: 100vw !important; padding: 0 2vw !important; }
            .chooseus-grid { grid-template-columns: 1fr 1fr !important; }
            .chooseus-grid2 { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 700px) {
            .chooseus-container { padding: 0 1vw !important; }
            .chooseus-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
            .chooseus-grid2 { grid-template-columns: 1fr !important; gap: 14px !important; }
            .chooseus-card img { height: 90px !important; }
            .chooseus-title { font-size: 15px !important; }
            .chooseus-subtitle { font-size: 11px !important; }
            .chooseus-heading { font-size: 18px !important; }
            .chooseus-subheading { font-size: 12px !important; }
          }
          @media (max-width: 500px) {
            .chooseus-container { padding: 0 0.5vw !important; }
            .chooseus-card { border-radius: 8px !important; }
            .chooseus-card img { border-radius: 8px 8px 0 0 !important; }
          }
        `}
      </style>
      <div className="chooseus-container" style={containerStyle}>
        <div className="chooseus-heading" style={headingStyle}>WHY CHOOSE US</div>
        <div className="chooseus-subheading" style={subHeadingStyle}>
          “MORE THAN FURNITURE – A LIFESTYLE UPGRADE.”
        </div>
        {loading ? (
          <div style={{ textAlign: "center", fontFamily: SUB_FONT, margin: "32px 0" }}>Loading...</div>
        ) : error ? (
          <div style={{ textAlign: "center", fontFamily: SUB_FONT, margin: "32px 0", color: "red" }}>{error}</div>
        ) : features.length === 0 ? (
          <div style={{ textAlign: "center", fontFamily: SUB_FONT, margin: "32px 0" }}>No features found.</div>
        ) : (
          <>
            <div className="chooseus-grid" style={gridStyle}>
              {topRow.map((item, idx) => (
                <div key={idx} className="chooseus-card" style={cardStyle}>
                  <img src={item.imageUrl} alt={item.title} style={imgStyle} />
                  <div className="chooseus-title" style={titleStyle}>{item.title}</div>
                  {idx < 2 && (
                    <hr style={{ ...dottedLineStyle, width: "80%" }} />
                  )}
                  <div className="chooseus-subtitle" style={subtitleStyle}>{item.description}</div>
                </div>
              ))}
            </div>
            <div className="chooseus-grid2" style={gridStyle2}>
              {bottomRow.map((item, idx) => (
                <div key={idx} className="chooseus-card" style={cardStyle}>
                  <img src={item.imageUrl} alt={item.title} style={imgStyle} />
                  <div className="chooseus-title" style={titleStyle}>{item.title}</div>
                  <div className="chooseus-subtitle" style={subtitleStyle}>{item.description}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

