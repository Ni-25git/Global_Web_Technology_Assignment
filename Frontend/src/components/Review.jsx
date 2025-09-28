import React, { useEffect, useState } from "react";
import axios from "axios";
import bgImg from "../assets/discover_premium.png";

const FONT_FAMILY = "'Playfair Display', serif";
const SUB_FONT = "'Montserrat', sans-serif";

const sectionStyle = {
  width: "100vw",
  minHeight: 650,
  background: `url(${bgImg}) center center/cover no-repeat`,
  position: "relative",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start"
};

const topStyle = {
  width: "100%",
  background: "#fbeee0",
  padding: "32px 0 12px 0",
  textAlign: "center"
};

const headingStyle = {
  fontFamily: FONT_FAMILY,
  fontWeight: 700,
  fontSize: 38,
  color: "#7a4a2f",
  letterSpacing: "1.5px",
  margin: 0
};

const subHeadingStyle = {
  fontFamily: SUB_FONT,
  fontWeight: 600,
  fontSize: 18,
  color: "#2e1a10",
  margin: "8px 0 0 0"
};

const carouselWrapperStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  marginTop: -40,
  marginBottom: 0,
  position: "relative"
};

const carouselStyle = {
  display: "flex",
  gap: "32px",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: 1200,
  minHeight: 280
};

const cardStyle = {
  background: "#fff",
  borderRadius: "16px",
  boxShadow: "0 2px 12px #0001",
  minWidth: 340,
  maxWidth: 370,
  minHeight: 220,
  marginTop:80,
  padding: "32px 24px 24px 24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  zIndex: 1
};

const cardActiveStyle = {
  ...cardStyle,
  background: "#6d3b23",
  color: "#fff",
  minWidth: 370,
  maxWidth: 400,
  zIndex: 2
};

const testimonialBadgeStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  background: "#7a4a2f",
  color: "#fff",
  fontFamily: SUB_FONT,
  fontWeight: 700,
  fontSize: 15,
  borderRadius: "16px 0 32px 0",
  padding: "8px 24px 6px 18px",
  zIndex: 3
};

const starsStyle = {
  display: "flex",
  gap: "2px",
  margin: "32px 0 0 0"
};

const avatarStyle = {
  width: 78,
  height: 78,
  borderRadius: "50%",
  objectFit: "cover",
  border: "4px solid #fff",
  margin: "18px 0 12px 0",
  background: "#eee"
};

const nameStyle = {
  fontFamily: SUB_FONT,
  fontWeight: 700,
  fontSize: 18,
  color: "inherit",
  marginBottom: 2,
  textAlign: "center"
};

const roleStyle = {
  fontFamily: SUB_FONT,
  fontWeight: 400,
  fontSize: 13,
  color: "#bfa17a",
  marginBottom: 10,
  textAlign: "center"
};

const reviewStyle = {
  fontFamily: SUB_FONT,
  fontWeight: 400,
  fontSize: 16,
  color: "inherit",
  textAlign: "center",
  margin: 0
};

const arrowBtnStyle = {
  width: 44,
  height: 44,
  borderRadius: "50%",
  background: "#fff",
  color: "#7a4a2f",
  border: "2px solid #bfa17a",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 26,
  cursor: "pointer",
  boxShadow: "0 2px 8px #0002",
  margin: "0 12px",
  zIndex: 10
};

const bottomQuoteStyle = {
  width: "100%",
  textAlign: "center",
  fontFamily: FONT_FAMILY,
  fontWeight: 700,
  fontSize: 22,
  color: "#fff",
  letterSpacing: "1.5px",
  margin: "38px 0 0 0",
  textShadow: "0 2px 8px #000a"
};

// Simple ErrorBoundary class
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // Optionally log error
  }
  render() {
    if (this.state.hasError) {
      return (
        <section style={{ ...sectionStyle, justifyContent: "center", alignItems: "center" }}>
          <div style={{ color: "#7a4a2f", fontFamily: FONT_FAMILY, fontSize: 24, textAlign: "center" }}>
            Sorry, something went wrong while loading reviews.
          </div>
        </section>
      );
    }
    return this.props.children;
  }
}

function Stars() {
  return (
    <span style={starsStyle}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: "#ffd700", fontSize: 18 }}>★</span>
      ))}
    </span>
  );
}

// Responsive helper
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

function ReviewComponent() {
  const [reviews, setReviews] = useState([]);
  const [active, setActive] = useState(1);
  const width = useWindowWidth();

  // Responsive styles
  const isMobile = width < 600;
  const isTablet = width >= 600 && width < 900;

  // Responsive section style
  const responsiveSectionStyle = {
    ...sectionStyle,
    minHeight: isMobile ? 500 : 650,
    padding: isMobile ? "0 0 32px 0" : 0,
    alignItems: "center",
  };

  const responsiveTopStyle = {
    ...topStyle,
    padding: isMobile ? "20px 0 8px 0" : topStyle.padding,
  };

  const responsiveHeadingStyle = {
    ...headingStyle,
    fontSize: isMobile ? 22 : isTablet ? 28 : 38,
  };

  const responsiveSubHeadingStyle = {
    ...subHeadingStyle,
    fontSize: isMobile ? 13 : isTablet ? 15 : 18,
  };

  const responsiveCarouselWrapperStyle = {
    ...carouselWrapperStyle,
    flexDirection: isMobile ? "column" : "row",
    marginTop: isMobile ? 0 : carouselWrapperStyle.marginTop,
  };

  const responsiveCarouselStyle = {
    ...carouselStyle,
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? "16px" : carouselStyle.gap,
    minHeight: isMobile ? 0 : carouselStyle.minHeight,
    width: isMobile ? "100%" : carouselStyle.width,
    maxWidth: isMobile ? "100%" : carouselStyle.maxWidth,
  };

  const responsiveCardStyle = {
    ...cardStyle,
    minWidth: isMobile ? "90vw" : isTablet ? 260 : cardStyle.minWidth,
    maxWidth: isMobile ? "95vw" : isTablet ? 300 : cardStyle.maxWidth,
    minHeight: isMobile ? 180 : cardStyle.minHeight,
    marginTop: isMobile ? 20 : cardStyle.marginTop,
    padding: isMobile ? "18px 8px 16px 8px" : cardStyle.padding,
  };

  const responsiveCardActiveStyle = {
    ...cardActiveStyle,
    minWidth: isMobile ? "90vw" : isTablet ? 280 : cardActiveStyle.minWidth,
    maxWidth: isMobile ? "95vw" : isTablet ? 320 : cardActiveStyle.maxWidth,
    minHeight: isMobile ? 200 : cardActiveStyle.minHeight,
    marginTop: isMobile ? 10 : cardActiveStyle.marginTop,
    padding: isMobile ? "20px 10px 18px 10px" : cardActiveStyle.padding,
  };

  const responsiveAvatarStyle = {
    ...avatarStyle,
    width: isMobile ? 54 : avatarStyle.width,
    height: isMobile ? 54 : avatarStyle.height,
    margin: isMobile ? "10px 0 8px 0" : avatarStyle.margin,
  };

  const responsiveNameStyle = {
    ...nameStyle,
    fontSize: isMobile ? 15 : nameStyle.fontSize,
  };

  const responsiveRoleStyle = {
    ...roleStyle,
    fontSize: isMobile ? 11 : roleStyle.fontSize,
    marginBottom: isMobile ? 6 : roleStyle.marginBottom,
  };

  const responsiveReviewStyle = {
    ...reviewStyle,
    fontSize: isMobile ? 13 : reviewStyle.fontSize,
  };

  const responsiveArrowBtnStyle = {
    ...arrowBtnStyle,
    width: isMobile ? 34 : arrowBtnStyle.width,
    height: isMobile ? 34 : arrowBtnStyle.height,
    fontSize: isMobile ? 18 : arrowBtnStyle.fontSize,
    margin: isMobile ? "0 4px" : arrowBtnStyle.margin,
  };

  const responsiveBottomQuoteStyle = {
    ...bottomQuoteStyle,
    fontSize: isMobile ? 13 : isTablet ? 16 : bottomQuoteStyle.fontSize,
    margin: isMobile ? "18px 0 0 0" : bottomQuoteStyle.margin,
    padding: isMobile ? "0 8px" : 0,
  };

  useEffect(() => {
    axios
      .get(`https://global-web-technology-assignment.onrender.com/reviews`)
      .then((res) => {
        // If backend returns { reviews: [...] }
        const data = Array.isArray(res.data.reviews)
          ? res.data.reviews
          : Array.isArray(res.data)
          ? res.data
          : [];
        setReviews(data);
      })
      .catch(() => setReviews([]));
  }, []);

  const getVisible = () => {
    if (reviews.length === 0) return [];
    if (reviews.length <= 3) return reviews;
    const prev = (active - 1 + reviews.length) % reviews.length;
    const next = (active + 1) % reviews.length;
    return [reviews[prev], reviews[active], reviews[next]];
  };

  const visible = getVisible();

  return (
    <section style={responsiveSectionStyle}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Playfair+Display:wght@700&display=swap');
          @media (max-width: 900px) {
            /* Hide arrows if only 1 review */
            .review-arrow-btn { display: ${reviews.length <= 1 ? "none" : "flex"}; }
          }
        `}
      </style>
      <div style={responsiveTopStyle}>
        <div style={responsiveHeadingStyle}>CUSTOMER REVIEWS</div>
        <div style={responsiveSubHeadingStyle}>&quot;LOVED BY THOUSANDS OF HAPPY HOMES.&quot;</div>
      </div>
      <div style={responsiveCarouselWrapperStyle}>
        <button
          style={responsiveArrowBtnStyle}
          className="review-arrow-btn"
          onClick={() => setActive((prev) => (prev - 1 + reviews.length) % reviews.length)}
          aria-label="Previous"
        >
          &#60;
        </button>
        <div style={responsiveCarouselStyle}>
          {visible.map((item, idx) => {
            const isActive = idx === 1 || reviews.length <= 3;
            return (
              <div
                key={item._id || idx}
                style={isActive ? responsiveCardActiveStyle : responsiveCardStyle}
              >
                <div style={testimonialBadgeStyle}>Testimonial</div>
                <Stars />
                <img src={item.profileImage} alt={item.name} style={responsiveAvatarStyle} />
                <div style={responsiveNameStyle}>{item.name}</div>
                <div style={responsiveRoleStyle}>{item.designation}</div>
                <div style={responsiveReviewStyle}>{item.review}</div>
              </div>
            );
          })}
        </div>
        <button
          style={responsiveArrowBtnStyle}
          className="review-arrow-btn"
          onClick={() => setActive((prev) => (prev + 1) % reviews.length)}
          aria-label="Next"
        >
          &#62;
        </button>
      </div>
      <div style={responsiveBottomQuoteStyle}>
        &quot;THE BEST ROOMS HAVE SOMETHING TO SAY ABOUT THE PEOPLE WHO LIVE IN THEM.&quot;
      </div>
    </section>
  );
}

// Export Review wrapped in ErrorBoundary
export default function Review(props) {
  return (
    <ErrorBoundary>
      <ReviewComponent {...props} />
    </ErrorBoundary>
  );
}
