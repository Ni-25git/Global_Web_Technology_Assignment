import React, { useEffect, useState } from "react";
import axios from "axios";

const BG_COLOR = "#fbe9db";
const FONT_FAMILY = "'Playfair Display', serif";
const SUB_FONT = "'Montserrat', sans-serif";

const sectionStyle = {
  background: BG_COLOR,
  width: "100vw",
  minHeight: "80vh",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw",
  position: "relative",
  padding: "0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const containerStyle = {
  maxWidth: 1400,
  margin: "0 auto",
  padding: "0 24px"
};

const headingStyle = {
  fontFamily: FONT_FAMILY,
  fontWeight: 700,
  fontSize: 56,
  color: "#7a4a2f",
  textAlign: "center",
  margin: "48px 0 8px 0",
  letterSpacing: "2px"
};

const subHeadingStyle = {
  fontFamily: SUB_FONT,
  fontWeight: 600,
  fontSize: 22,
  color: "#2e1a10",
  textAlign: "center",
  marginBottom: 48
};

const gridStyle = {
  display: "flex",
  flexDirection: "row",
  gap: "32px",
  justifyContent: "center",
  marginTop: 0
};

const cardStyle = {
  display: "flex",
  flexDirection: "row",
  borderRadius: "12px",
  overflow: "hidden",
  minWidth: 420,
  maxWidth: 440,
  minHeight: 220,
  background: "#fff",
  boxShadow: "0 2px 8px #0001",
  position: "relative"
};

const leftColStyle = {
  flex: 1.2,
  background: "#f5f2ef",
  padding: "28px 0 24px 28px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative"
};

const rightColStyle = {
  flex: 1,
  background: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 0 0 8px"
};

const discountStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  background: "#6d3b23",
  color: "#fff",
  fontFamily: SUB_FONT,
  fontWeight: 700,
  fontSize: 18,
  borderRadius: "12px 0 18px 0",
  padding: "10px 28px 7px 18px",
  zIndex: 2
};

const titleStyle = {
  fontFamily: SUB_FONT,
  fontWeight: 700,
  fontSize: 20,
  color: "#7a4a2f",
  marginBottom: 6,
  marginTop: 0,
  letterSpacing: "0.5px"
};

const descStyle = {
  fontFamily: SUB_FONT,
  fontWeight: 400,
  fontSize: 15,
  color: "#3a2416",
  marginBottom: 14,
  marginTop: 0,
  lineHeight: 1.4
};

const priceRowStyle = {
  display: "flex",
  alignItems: "baseline",
  marginBottom: 8
};

const priceLabelStyle = {
  fontFamily: SUB_FONT,
  fontWeight: 500,
  fontSize: 15,
  color: "#3a2416",
  marginRight: 6
};

const priceStyle = {
  fontFamily: FONT_FAMILY,
  fontWeight: 700,
  fontSize: 28,
  color: "#222",
  marginRight: 6
};

const onwardsStyle = {
  fontFamily: SUB_FONT,
  fontWeight: 500,
  fontSize: 15,
  color: "#b0a9a2"
};

const shippingRowStyle = {
  display: "flex",
  alignItems: "center",
  marginTop: 6,
  fontFamily: SUB_FONT,
  fontWeight: 500,
  fontSize: 15,
  color: "#7a4a2f"
};

const shippingIconStyle = {
  fontSize: 22,
  marginRight: 6
};

const imgStyle = {
  width: 150,
  height: 150,
  objectFit: "contain",
  borderRadius: "8px",
  background: "#fff"
};

export default function Explore() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`api/explore`)
      .then((res) => {
        const data = Array.isArray(res.data.explore)
          ? res.data.explore
          : Array.isArray(res.data)
          ? res.data
          : [];
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setProducts([]);
        setLoading(false);
      });
  }, []);

  return (
    <section style={sectionStyle}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Playfair+Display:wght@700&display=swap');
          /* Responsive styles */
          @media (max-width: 1200px) {
            .explore-grid {
              flex-wrap: wrap;
              gap: 24px;
            }
            .explore-card {
              min-width: 340px !important;
              max-width: 95vw !important;
            }
          }
          @media (max-width: 900px) {
            .explore-grid {
              flex-direction: column;
              gap: 24px;
              align-items: center;
            }
            .explore-card {
              min-width: 90vw !important;
              max-width: 98vw !important;
              min-height: 180px !important;
            }
            .explore-img {
              width: 110px !important;
              height: 110px !important;
            }
          }
          @media (max-width: 600px) {
            .explore-heading {
              font-size: 32px !important;
              margin: 32px 0 8px 0 !important;
            }
            .explore-subheading {
              font-size: 16px !important;
              margin-bottom: 28px !important;
            }
            .explore-card {
              flex-direction: column !important;
              min-width: 98vw !important;
              max-width: 100vw !important;
              min-height: unset !important;
              padding: 0 !important;
            }
            .explore-leftcol {
              padding: 18px 12px 12px 12px !important;
              align-items: flex-start !important;
            }
            .explore-img {
              width: 90px !important;
              height: 90px !important;
              margin: 0 0 12px 0 !important;
            }
            .explore-discount {
              font-size: 14px !important;
              padding: 7px 18px 5px 10px !important;
            }
            .explore-card {
              box-shadow: 0 1px 4px #0001 !important;
            }
          }
          @media (max-width: 400px) {
            .explore-heading {
              font-size: 22px !important;
            }
            .explore-subheading {
              font-size: 12px !important;
            }
            .explore-card {
              min-width: 100vw !important;
              max-width: 100vw !important;
            }
            .explore-img {
              width: 70px !important;
              height: 70px !important;
            }
          }
        `}
      </style>
      <div style={containerStyle}>
        <div style={{ ...headingStyle }} className="explore-heading">EXPLORE MORE</div>
        <div style={{ ...subHeadingStyle }} className="explore-subheading">&quot;FIND OUR VARIOUS ITEMS.&quot;</div>
        {loading ? (
          <div style={{ textAlign: "center", fontFamily: SUB_FONT, margin: "32px 0" }}>Loading...</div>
        ) : products.length === 0 ? (
          <div style={{ textAlign: "center", fontFamily: SUB_FONT, margin: "32px 0" }}>No products found.</div>
        ) : (
          <div style={gridStyle} className="explore-grid">
            {products.map((item, idx) => (
              <div key={item._id || idx} style={cardStyle} className="explore-card">
                <div style={discountStyle} className="explore-discount">UP TO 35% OFF</div>
                <div style={leftColStyle} className="explore-leftcol">
                  <div style={titleStyle}>{item.title?.toUpperCase()}</div>
                  <div style={descStyle}>&quot;{item.description}&quot;</div>
                  <div style={priceRowStyle}>
                    <span style={priceLabelStyle}>Starts From</span>
                    <span style={priceStyle}>₹{item.price}</span>
                    <span style={onwardsStyle}>Onwards</span>
                  </div>
                  <div style={shippingRowStyle}>
                    <span style={shippingIconStyle}>🚚</span>
                    Shipping In 2 Days
                  </div>
                </div>
                <div style={rightColStyle}>
                  <img src={item.imageUrl} alt={item.title} style={imgStyle} className="explore-img" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
