import React from "react";
import "@fontsource/playfair-display/700.css";
import "@fontsource/montserrat/400.css";
import { FiSearch, FiArrowRight } from "react-icons/fi";
import sofaImg from "../assets/Start.jpg"; 

const responsiveStyles = {
  container: {
    width: "100vw",
    minHeight: "60vh",
    position: "relative",
    overflow: "hidden",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${sofaImg})`,
  },
  content: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
    boxSizing: "border-box",
  },
  title: {
    fontFamily: "Playfair Display, serif",
    fontWeight: 700,
    fontSize: "6vw", // Responsive font size
    color: "#6d3b2f",
    letterSpacing: 2,
    marginBottom: 8,
    textAlign: "center",
    textShadow: "0 2px 8px rgba(255,255,255,0.7)",
    maxWidth: 700,
    lineHeight: 1.1,
  },
  subtitle: {
    fontFamily: "Montserrat, Arial, sans-serif",
    fontSize: "3.5vw", // Responsive font size
    color: "#888",
    textAlign: "center",
    marginBottom: 18,
    maxWidth: 600,
    textShadow: "0 2px 8px rgba(255,255,255,0.7)",
    lineHeight: 1.3,
  },
  buttonRow: {
    display: "flex",
    gap: 18,
    marginBottom: 24,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    background: "#6d3b2f",
    color: "#fff",
    border: "none",
    borderRadius: 24,
    padding: "10px 28px",
    fontFamily: "Montserrat, Arial, sans-serif",
    fontWeight: 600,
    fontSize: "3.5vw",
    minWidth: 120,
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    marginBottom: 8,
    transition: "background 0.2s",
  },
  buttonOutline: {
    background: "#fff",
    color: "#6d3b2f",
    border: "2px solid #6d3b2f",
    borderRadius: 24,
    padding: "10px 28px",
    fontFamily: "Montserrat, Arial, sans-serif",
    fontWeight: 600,
    fontSize: "3.5vw",
    minWidth: 120,
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    marginBottom: 8,
    transition: "background 0.2s",
  },
  searchBar: {
    display: "flex",
    alignItems: "center",
    background: "#fff",
    borderRadius: 24,
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    padding: "6px 18px",
    width: "90vw",
    maxWidth: 340,
    marginTop: 8,
    border: "1px solid #e0e0e0",
  },
  input: {
    border: "none",
    outline: "none",
    fontFamily: "Montserrat, Arial, sans-serif",
    fontSize: "3.5vw",
    minWidth: 0,
    flex: 1,
    background: "transparent",
    color: "#6d3b2f",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(255,255,255,0.05)",
    zIndex: 1,
  },
  // Media queries
  "@media (min-width: 600px)": {
    title: { fontSize: 38 },
    subtitle: { fontSize: 15 },
    button: { fontSize: 15 },
    buttonOutline: { fontSize: 15 },
    input: { fontSize: 15 },
    searchBar: { width: 340 },
  },
};

function mergeStyles(...styles) {
  // Simple utility to merge style objects (last overrides previous)
  return Object.assign({}, ...styles);
}

const Home = () => {
  // Responsive style selection
  const isMobile = window.innerWidth < 600;
  const styles = {
    ...responsiveStyles,
    title: mergeStyles(responsiveStyles.title, isMobile ? {} : responsiveStyles["@media (min-width: 600px)"].title),
    subtitle: mergeStyles(responsiveStyles.subtitle, isMobile ? {} : responsiveStyles["@media (min-width: 600px)"].subtitle),
    button: mergeStyles(responsiveStyles.button, isMobile ? {} : responsiveStyles["@media (min-width: 600px)"].button),
    buttonOutline: mergeStyles(responsiveStyles.buttonOutline, isMobile ? {} : responsiveStyles["@media (min-width: 600px)"].buttonOutline),
    input: mergeStyles(responsiveStyles.input, isMobile ? {} : responsiveStyles["@media (min-width: 600px)"].input),
    searchBar: mergeStyles(responsiveStyles.searchBar, isMobile ? {} : responsiveStyles["@media (min-width: 600px)"].searchBar),
  };

  return (
    <div style={responsiveStyles.container}>
      <div style={responsiveStyles.content}>
        <h1 style={styles.title}>
          FURNITURE THAT FEELS LIKE HOME
        </h1>
        <div style={styles.subtitle}>
          Discover Timeless Designs, Modern Comfort, And Premium Quality – Crafted To Transform Every Corner Of Your Space.
        </div>
        <div style={responsiveStyles.buttonRow}>
          <button style={styles.button}>
            SHOP NOW
          </button>
          <button style={styles.buttonOutline}>
            KNOW MORE
          </button>
        </div>
        <div style={styles.searchBar}>
          <input
            type="text"
            placeholder="Search Here"
            style={styles.input}
          />
          <FiSearch size={isMobile ? 18 : 20} color="#6d3b2f" style={{ marginLeft: 8, cursor: "pointer" }} />
          <FiArrowRight size={isMobile ? 18 : 20} color="#2196f3" style={{ marginLeft: 8, cursor: "pointer" }} />
        </div>
      </div>
      {/* Optionally add a semi-transparent overlay for better text readability */}
      <div style={responsiveStyles.overlay} />
    </div>
  );
};

export default Home;
