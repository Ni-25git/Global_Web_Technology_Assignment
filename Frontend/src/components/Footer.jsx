import React from "react";
import bgImg from "../assets/Footer_bg.png";
import logo from "../assets/Logo.png"

const FONT_FAMILY = "'Montserrat', sans-serif";

const sectionStyle = {
  width: "100vw",
  background: `url(${bgImg}) center center/cover no-repeat`,
  position: "relative",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw",
  color: "#fff",
  fontFamily: FONT_FAMILY,
  padding: 0,
  overflow: "hidden"
};

const overlayStyle = {
  background: "rgba(0,0,0,0.74)",
  width: "100%",
  minHeight: 450,
  padding: "0 0 18px 0"
};

const containerStyle = {
  maxWidth: 1400,
  margin: "0 auto",
  padding: "0 48px"
};

const topRowStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
  paddingTop: 36,
  paddingBottom: 18,
  flexWrap: "wrap"
};

const logoColStyle = {
  flex: "1 1 220px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start"
};

const logoStyle = {
  width: 180,
  height: 60,
  objectFit: "contain",
  marginBottom: 18
};

const taglineStyle = {
  fontFamily: FONT_FAMILY,
  fontWeight: 400,
  fontSize: 15,
  color: "#fff",
  marginTop: 8,
  marginBottom: 0,
  letterSpacing: "0.5px"
};

const colTitleStyle = {
  fontWeight: 700,
  fontSize: 15,
  marginBottom: 12,
  color: "#fff"
};

const colListStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0
};

const colItemStyle = {
  fontWeight: 400,
  fontSize: 15,
  color: "#fff",
  marginBottom: 8,
  cursor: "pointer"
};

const contactIconStyle = {
  fontSize: 22,
  marginRight: 10,
  verticalAlign: "middle"
};

const subscribeRowStyle = {
  display: "flex",
  alignItems: "center",
  marginTop: 24
};

const subscribeLabelStyle = {
  fontWeight: 700,
  fontSize: 20,
  marginRight: 18
};

const inputStyle = {
  borderRadius: 32,
  border: "none",
  padding: "12px 24px",
  fontSize: 18,
  fontFamily: FONT_FAMILY,
  outline: "none",
  width: 320,
  marginRight: -36,
  background: "#fff",
  color: "#222"
};

const subscribeBtnStyle = {
  borderRadius: 32,
  border: "none",
  background: "#6d3b23",
  color: "#fff",
  fontWeight: 700,
  fontSize: 20,
  padding: "12px 36px",
  cursor: "pointer",
  marginLeft: 0,
  zIndex: 1
};

const dividerStyle = {
  width: "100%",
  height: 2,
  background: "#fff2",
  margin: "32px 0 18px 0"
};

const bottomRowStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap"
};

const copyrightStyle = {
  fontWeight: 400,
  fontSize: 16,
  color: "#fff",
  opacity: 0.85
};

const linksRowStyle = {
  display: "flex",
  gap: "32px",
  alignItems: "center"
};

const linkStyle = {
  fontWeight: 400,
  fontSize: 16,
  color: "#fff",
  opacity: 0.85,
  textDecoration: "none",
  cursor: "pointer"
};

const followRowStyle = {
  display: "flex",
  alignItems: "center",
  gap: "18px"
};

const followLabelStyle = {
  fontWeight: 700,
  fontSize: 18,
  marginRight: 10
};

const iconBtnStyle = {
  color: "#fff",
  fontSize: 24,
  background: "none",
  border: "none",
  cursor: "pointer",
  margin: "0 2px"
};

export default function Footer() {
  return (
    <footer style={sectionStyle}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
          /* Responsive styles */
          @media (max-width: 1100px) {
            .footer-container {
              padding: 0 18px !important;
            }
            .footer-toprow {
              flex-wrap: wrap !important;
              gap: 24px;
            }
            .footer-col {
              min-width: 180px !important;
              margin-bottom: 18px;
            }
          }
          @media (max-width: 900px) {
            .footer-toprow {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 0 !important;
            }
            .footer-col {
              width: 100% !important;
              min-width: unset !important;
              margin-bottom: 18px;
            }
            .footer-logo {
              margin-bottom: 12px !important;
            }
            .footer-subscribe-row {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 10px;
            }
            .footer-input {
              width: 90vw !important;
              min-width: 0 !important;
              margin-right: 0 !important;
            }
            .footer-subscribe-btn {
              width: 100% !important;
              margin-left: 0 !important;
              margin-top: 8px;
            }
          }
          @media (max-width: 600px) {
            .footer-container {
              padding: 0 6px !important;
            }
            .footer-logo {
              width: 120px !important;
              height: 40px !important;
            }
            .footer-tagline {
              font-size: 12px !important;
            }
            .footer-col-title {
              font-size: 14px !important;
            }
            .footer-col-item {
              font-size: 13px !important;
            }
            .footer-subscribe-label {
              font-size: 16px !important;
            }
            .footer-input {
              font-size: 15px !important;
              padding: 8px 12px !important;
              width: 98vw !important;
            }
            .footer-subscribe-btn {
              font-size: 16px !important;
              padding: 10px 18px !important;
            }
            .footer-bottomrow {
              flex-direction: column !important;
              gap: 10px;
              align-items: flex-start !important;
            }
            .footer-links-row {
              flex-direction: column !important;
              gap: 6px !important;
              align-items: flex-start !important;
            }
            .footer-follow-row {
              gap: 8px !important;
            }
          }
        `}
      </style>
      <div style={overlayStyle}>
        <div style={containerStyle} className="footer-container">
          <div style={topRowStyle} className="footer-toprow">
            <div style={logoColStyle} className="footer-col">
              <img
                src={logo}
                alt="Ask Me Furniture"
                style={logoStyle}
                className="footer-logo"
              />
              <div style={taglineStyle} className="footer-tagline">
                Discover Timeless Designs, Modern Comfort, And Premium Quality – Crafted To Transform Every Corner Of Your Space.
              </div>
            </div>
            <div style={{ flex: "1 1 120px" }} className="footer-col">
              <div style={colTitleStyle} className="footer-col-title">Top Product</div>
              <ul style={colListStyle}>
                <li style={colItemStyle} className="footer-col-item">Sofas</li>
                <li style={colItemStyle} className="footer-col-item">Recliners</li>
                <li style={colItemStyle} className="footer-col-item">Chairs</li>
                <li style={colItemStyle} className="footer-col-item">Beds</li>
                <li style={colItemStyle} className="footer-col-item">Wardrobes</li>
              </ul>
            </div>
            <div style={{ flex: "1 1 160px" }} className="footer-col">
              <div style={colTitleStyle} className="footer-col-title">Shop By Room</div>
              <ul style={colListStyle}>
                <li style={colItemStyle} className="footer-col-item">Living Room</li>
                <li style={colItemStyle} className="footer-col-item">Bedroom</li>
                <li style={colItemStyle} className="footer-col-item">Dining Room</li>
                <li style={colItemStyle} className="footer-col-item">Office Furniture</li>
                <li style={colItemStyle} className="footer-col-item">Outdoor Furniture</li>
              </ul>
            </div>
            <div style={{ flex: "1 1 140px" }} className="footer-col">
              <div style={colTitleStyle} className="footer-col-title">Need Help</div>
              <ul style={colListStyle}>
                <li style={colItemStyle} className="footer-col-item">Track your order</li>
                <li style={colItemStyle} className="footer-col-item">Feedback</li>
                <li style={colItemStyle} className="footer-col-item">Returns Process</li>
                <li style={colItemStyle} className="footer-col-item">Returns Policy</li>
              </ul>
            </div>
            <div style={{ flex: "1 1 120px" }} className="footer-col">
              <div style={colTitleStyle} className="footer-col-title">Company</div>
              <ul style={colListStyle}>
                <li style={colItemStyle} className="footer-col-item">About Us</li>
                <li style={colItemStyle} className="footer-col-item">Contact Us</li>
                <li style={colItemStyle} className="footer-col-item">FAQs</li>
              </ul>
            </div>
            <div style={{ flex: "1 1 220px" }} className="footer-col">
              <div style={colTitleStyle} className="footer-col-title">Contact Us</div>
              <ul style={colListStyle}>
                <li style={colItemStyle} className="footer-col-item">
                  <span style={contactIconStyle}>📍</span>
                  Nargis Dutt Rd, Pali Hill, Mumbai,<br />Maharashtra 400050
                </li>
                <li style={colItemStyle} className="footer-col-item">
                  <span style={contactIconStyle}>✉️</span>
                  support@askmefurnitures.com
                </li>
              </ul>
            </div>
          </div>
          <div style={subscribeRowStyle} className="footer-subscribe-row">
            <span style={subscribeLabelStyle} className="footer-subscribe-label">Subscribe</span>
            <input
              type="email"
              placeholder="Enter your email Address"
              style={inputStyle}
              className="footer-input"
            />
            <button style={subscribeBtnStyle} className="footer-subscribe-btn">Subscribe</button>
          </div>
          <div style={dividerStyle}></div>
          <div style={bottomRowStyle} className="footer-bottomrow">
            <span style={copyrightStyle}>
              © 2021 All Rights Reserved
            </span>
            <div style={linksRowStyle} className="footer-links-row">
              <a style={linkStyle}>Privacy Policy</a>
              <a style={linkStyle}>Terms of Use</a>
              <a style={linkStyle}>Sales and Refunds</a>
              <a style={linkStyle}>Legal</a>
              <a style={linkStyle}>Site Map</a>
            </div>
            <div style={followRowStyle} className="footer-follow-row">
              <span style={followLabelStyle}>Follow us</span>
              <button style={iconBtnStyle} aria-label="Facebook">
                <i className="fa fa-facebook"></i>
              </button>
              <button style={iconBtnStyle} aria-label="Instagram">
                <i className="fa fa-instagram"></i>
              </button>
              <button style={iconBtnStyle} aria-label="Twitter">
                <i className="fa fa-twitter"></i>
              </button>
              <button style={iconBtnStyle} aria-label="Telegram">
                <i className="fa fa-telegram"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
