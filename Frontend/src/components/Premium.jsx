import bgImg from "../assets/discover_premium.png";
import logo from "../assets/Logo.png"

const FONT_FAMILY = "'Montserrat', sans-serif";
const HEAD_FONT = "'Bebas Neue', sans-serif";

const sectionStyle = {
  width: "100vw",
  minHeight: 500,
  background: `#fbeee0 url(${bgImg}) center center/cover no-repeat`,
  position: "relative",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "0",
  overflow: "hidden"
};

const cardStyle = {
  background: "rgba(34, 27, 22, 0.92)",
  borderRadius: "32px",
  padding: "40px 48px 36px 48px",
  marginLeft: 48,
  minWidth: 480,
  maxWidth: 520,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  boxShadow: "0 8px 32px #0003"
};

const logoStyle = {
  width: 230,
  height: 80,
  objectFit: "contain",
  background: "#fff",
  borderRadius: 12,
  marginBottom: 32,
  display: "block"
};

const headingStyle = {
  fontFamily: HEAD_FONT,
  fontWeight: 900,
  fontSize: 38,
  color: "#fff",
  marginBottom: 12,
  letterSpacing: "1px"
};

const arrowStyle = {
  color: "#fff",
  fontSize: 28,
  margin: "0 0 18px 2px"
};

const quoteStyle = {
  fontFamily: FONT_FAMILY,
  fontWeight: 400,
  fontSize: 18,
  color: "#fff",
  margin: "0 0 32px 0",
  lineHeight: 1.4,
  textAlign: "left"
};

const btnRowStyle = {
  display: "flex",
  alignItems: "center",
  marginTop: 8
};

const btnStyle = {
  background: "#fff",
  color: "#4c2e1e",
  fontFamily: FONT_FAMILY,
  fontWeight: 700,
  fontSize: 18,
  border: "none",
  borderRadius: "24px",
  padding: "8px 28px 8px 18px",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  boxShadow: "0 2px 8px #0002"
};

const btnIconStyle = {
  width: 32,
  height: 32,
  borderRadius: "50%",
  background: "#4c2e1e",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 10,
  fontSize: 20
};

export default function Premium() {
  return (
    <section style={sectionStyle}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue:wght@400;700&family=Montserrat:wght@400;700&display=swap');
          @media (max-width: 900px) {
            .premium-card {
              margin-left: 16px !important;
              min-width: 320px !important;
              max-width: 95vw !important;
              padding: 32px 16px 28px 16px !important;
            }
            .premium-logo {
              width: 160px !important;
              height: 56px !important;
              margin-bottom: 20px !important;
            }
            .premium-heading {
              font-size: 28px !important;
              margin-bottom: 8px !important;
            }
            .premium-quote {
              font-size: 15px !important;
              margin-bottom: 24px !important;
            }
            .premium-btn {
              font-size: 16px !important;
              padding: 8px 18px 8px 12px !important;
            }
            .premium-btn-icon {
              width: 26px !important;
              height: 26px !important;
              font-size: 16px !important;
              margin-right: 7px !important;
            }
          }
          @media (max-width: 600px) {
            .premium-section {
              min-height: 340px !important;
              padding: 0 !important;
              justify-content: center !important;
            }
            .premium-card {
              margin-left: 0 !important;
              min-width: 0 !important;
              width: 95vw !important;
              max-width: 98vw !important;
              padding: 18px 6vw 18px 6vw !important;
              border-radius: 18px !important;
              align-items: center !important;
            }
            .premium-logo {
              width: 110px !important;
              height: 38px !important;
              margin-bottom: 12px !important;
            }
            .premium-heading {
              font-size: 20px !important;
              margin-bottom: 6px !important;
              text-align: center !important;
            }
            .premium-arrow {
              font-size: 20px !important;
              margin-bottom: 10px !important;
            }
            .premium-quote {
              font-size: 12px !important;
              margin-bottom: 14px !important;
              text-align: center !important;
            }
            .premium-btn-row {
              margin-top: 4px !important;
              justify-content: center !important;
              width: 100%;
            }
            .premium-btn {
              font-size: 14px !important;
              padding: 7px 10px 7px 8px !important;
            }
            .premium-btn-icon {
              width: 20px !important;
              height: 20px !important;
              font-size: 12px !important;
              margin-right: 5px !important;
            }
          }
        `}
      </style>
      <div className="premium-card" style={cardStyle}>
        <img
          src={logo}
          alt="Ask Me Furniture"
          className="premium-logo"
          style={logoStyle}
        />
        <div className="premium-heading" style={headingStyle}>Discover Premium Furnitures</div>
        <div className="premium-arrow" style={arrowStyle}>&#8594;</div>
        <div className="premium-quote" style={quoteStyle}>
          “Your home should tell the story of who you are,<br />
          and be a collection of what you love.”
        </div>
        <div className="premium-btn-row" style={btnRowStyle}>
          <button className="premium-btn" style={btnStyle}>
            <span className="premium-btn-icon" style={btnIconStyle}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="9" fill="#4c2e1e"/>
                <path d="M7.5 12L10.5 9L7.5 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}
