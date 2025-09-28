import React, { useEffect, useState } from "react";
import axios from "axios";

const FONT_FAMILY = "'Playfair Display', serif";
const SUB_FONT = "'Montserrat', sans-serif";

const sectionStyle = {
  background: "#fde8d4",
  width: "100vw",
  padding: "0",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw",
  position: "relative"
};

const containerStyle = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "0 24px 48px 24px",
  boxSizing: "border-box"
};

const headingStyle = {
  textAlign: "center",
  fontWeight: 700,
  fontSize: 36,
  letterSpacing: "1px",
  margin: "0 0 4px 0",
  fontFamily: FONT_FAMILY,
  color: "#7a4a2f"
};

const subHeadingStyle = {
  textAlign: "center",
  fontWeight: 600,
  fontSize: 18,
  margin: "0 0 32px 0",
  fontFamily: SUB_FONT,
  color: "#4c2e1e"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "32px 24px",
  justifyItems: "center",
  width: "100%"
};

const cardStyle = {
  background: "#fff",
  borderRadius: "16px",
  boxShadow: "0 2px 12px #0001",
  padding: "24px 12px 18px 12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minWidth: 0,
  minHeight: 220,
  transition: "box-shadow 0.2s, border 0.2s"
};

const activeCardStyle = {
  ...cardStyle,
  border: "3px solid #2e7bcf",
  boxShadow: "0 4px 20px #2e7bcf22"
};

const imgStyle = {
  width: 140,
  height: 90,
  objectFit: "contain",
  marginBottom: 12
};

const titleStyle = {
  fontWeight: 700,
  fontSize: 18,
  fontFamily: FONT_FAMILY,
  color: "#7a4a2f",
  letterSpacing: "0.5px",
  marginBottom: 4,
  textAlign: "center"
};

const subtitleStyle = {
  fontWeight: 400,
  fontSize: 14,
  color: "#4c2e1e",
  fontFamily: SUB_FONT,
  textAlign: "center"
};

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://global-web-technology-assignment.onrender.com/shopbycategories`)
      .then((res) => {
        const data = Array.isArray(res.data.categories)
          ? res.data.categories
          : Array.isArray(res.data)
          ? res.data
          : [];
        setCategories(data);
        setLoading(false);
      })
      .catch(() => {
        setCategories([]);
        setLoading(false);
      });
  }, []);

  return (
    <section style={sectionStyle}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Playfair+Display:wght@700&display=swap');
          /* Responsive grid and typography */
          @media (max-width: 1024px) {
            .categories-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 28px 16px !important;
            }
            .categories-heading {
              font-size: 28px !important;
            }
          }
          @media (max-width: 700px) {
            .categories-grid {
              grid-template-columns: 1fr !important;
              gap: 20px 0 !important;
            }
            .categories-heading {
              font-size: 22px !important;
            }
            .categories-subheading {
              font-size: 15px !important;
            }
          }
          @media (max-width: 500px) {
            .categories-container {
              padding: 0 6px 32px 6px !important;
            }
            .categories-card {
              padding: 16px 6px 12px 6px !important;
              min-height: 160px !important;
            }
            .categories-img {
              width: 90px !important;
              height: 60px !important;
            }
            .categories-title {
              font-size: 15px !important;
            }
            .categories-subtitle {
              font-size: 12px !important;
            }
          }
        `}
      </style>
      <div style={containerStyle} className="categories-container">
        <div style={headingStyle} className="categories-heading">SHOP BY CATEGORIES</div>
        <div style={subHeadingStyle} className="categories-subheading">
          MORE THAN FURNITURE – A LIFESTYLE UPGRADE.”
        </div>
        {loading ? (
          <div style={{ textAlign: "center", fontFamily: SUB_FONT, margin: "32px 0" }}>Loading...</div>
        ) : categories.length === 0 ? (
          <div style={{ textAlign: "center", fontFamily: SUB_FONT, margin: "32px 0" }}>No categories found.</div>
        ) : (
          <div style={gridStyle} className="categories-grid">
            {categories.map((item, idx) => (
              <div
                key={item._id || idx}
                style={idx === 0 ? activeCardStyle : cardStyle}
                className="categories-card"
              >
                <img src={item.imageUrl} alt={item.title} style={imgStyle} className="categories-img" />
                <div style={titleStyle} className="categories-title">{item.title?.toUpperCase()}</div>
                <div style={subtitleStyle} className="categories-subtitle">{item.description}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
