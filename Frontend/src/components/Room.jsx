import React, { useEffect, useState } from "react";
import axios from "axios";

const FONT_FAMILY = "'Playfair Display', serif";
const SUB_FONT = "'Montserrat', sans-serif";

const sectionStyle = {
  background: "#fbeee0",
  border: "2px solid #bfa17a",
  borderRadius: "6px",
  padding: "clamp(16px, 5vw, 40px) 0 clamp(24px, 7vw, 48px) 0",
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
  maxWidth: 1200,
  margin: "0 auto",
  padding: "0 clamp(8px, 4vw, 24px)"
};

const headingStyle = {
  textAlign: "center",
  fontWeight: 700,
  fontSize: "clamp(20px, 4vw, 36px)",
  letterSpacing: "1px",
  marginBottom: 0,
  fontFamily: FONT_FAMILY,
  color: "#6d3b23"
};

const subHeadingStyle = {
  textAlign: "center",
  fontWeight: 600,
  fontSize: "clamp(14px, 2vw, 18px)",
  margin: "8px 0 32px 0",
  fontFamily: SUB_FONT,
  color: "#4c2e1e"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "clamp(12px, 3vw, 32px) clamp(8px, 2vw, 24px)",
  marginTop: 32
};

const cardStyle = {
  background: "#fff",
  borderRadius: "14px",
  boxShadow: "0 2px 12px #0001",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  overflow: "hidden",
  position: "relative",
  minWidth: 0
};

const imgStyle = {
  width: "100%",
  height: "clamp(90px, 20vw, 170px)",
  objectFit: "cover",
  borderRadius: "14px 14px 0 0"
};

const titleRowStyle = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  justifyContent: "space-between",
  marginTop: 12,
  padding: "0 18px"
};

const titleStyle = {
  fontWeight: 700,
  fontSize: "clamp(14px, 2vw, 20px)",
  fontFamily: FONT_FAMILY,
  color: "#6d3b23",
  letterSpacing: "0.5px"
};

const buyNowStyle = {
  fontFamily: SUB_FONT,
  fontWeight: 700,
  fontSize: "clamp(11px, 1.2vw, 14px)",
  color: "#6d3b23",
  background: "none",
  border: "none",
  cursor: "pointer",
  marginLeft: 8,
  display: "flex",
  alignItems: "center",
  textDecoration: "none"
};

const arrowBtnStyle = {
  width: 28,
  height: 28,
  borderRadius: "50%",
  background: "#bfa17a",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  marginLeft: 8,
  fontSize: 18,
  cursor: "pointer"
};

const subtitleStyle = {
  fontWeight: 400,
  fontSize: "clamp(12px, 1.5vw, 15px)",
  color: "#4c2e1e",
  fontFamily: SUB_FONT,
  textAlign: "left",
  margin: "8px 0 18px 18px"
};

export default function Room() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`api/shopbyroom`)
      .then((res) => {
        const data = Array.isArray(res.data.rooms)
          ? res.data.rooms
          : Array.isArray(res.data.rooms)
          ? res.data
          : [];
        setRooms(data);
        setLoading(false);
      })
      .catch(() => {
        setRooms([]);
        setLoading(false);
      });
  }, []);

  return (
    <section style={sectionStyle}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Playfair+Display:wght@700&display=swap');
          .room-container { box-sizing: border-box; }
          .room-grid { box-sizing: border-box; }
          .room-card img { transition: height 0.2s; }
          @media (max-width: 1100px) {
            .room-container { max-width: 98vw !important; padding: 0 2vw !important; }
          }
          @media (max-width: 900px) {
            .room-title { font-size: 18px !important; }
            .room-subtitle { font-size: 14px !important; }
          }
          @media (max-width: 700px) {
            .room-container { padding: 0 1vw !important; }
            .room-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
            .room-card img { height: 110px !important; }
            .room-title { font-size: 16px !important; }
          }
          @media (max-width: 500px) {
            .room-title { font-size: 14px !important; }
            .room-subtitle { font-size: 12px !important; }
            .room-card img { height: 90px !important; }
            .room-card { border-radius: 8px !important; }
          }
          @media (max-width: 400px) {
            .room-title { font-size: 12px !important; }
            .room-subtitle { font-size: 10px !important; }
            .room-card img { height: 70px !important; }
            .room-card { border-radius: 6px !important; }
          }
        `}
      </style>
      <div className="room-container" style={containerStyle}>
        <div style={headingStyle}>SHOP BY ROOM</div>
        <div style={subHeadingStyle}>
          “FIND YOUR PERFECT MATCH.”
        </div>
        {loading ? (
          <div style={{ textAlign: "center", fontFamily: SUB_FONT, margin: "32px 0" }}>Loading...</div>
        ) : rooms.length === 0 ? (
          <div style={{ textAlign: "center", fontFamily: SUB_FONT, margin: "32px 0" }}>No rooms found.</div>
        ) : (
          <div className="room-grid" style={gridStyle}>
            {rooms.map((item, idx) => (
              <div key={item._id || idx} className="room-card" style={cardStyle}>
                <img src={item.imageUrl} alt={item.title} style={imgStyle} />
                <div style={titleRowStyle}>
                  <span style={titleStyle}>{item.title}</span>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <a href="#" style={buyNowStyle}>BUY NOW</a>
                    <button style={arrowBtnStyle}>
                      <span style={{ fontWeight: 700, fontSize: 18, marginTop: -2 }}>&#8594;</span>
                    </button>
                  </span>
                </div>
                <div style={subtitleStyle}>{item.description}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
