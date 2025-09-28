import React, { useEffect, useState } from "react";
import "@fontsource/montserrat/400.css";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaTruck } from "react-icons/fa";
import axios from "axios";

const colorOptions = ["#000", "#6d3b2f", "#d2cfc9", "#e74c3c", "#2196f3"];

// Responsive styles using CSS-in-JS
const styles = {
  container: {
    fontFamily: "Montserrat, Arial, sans-serif",
    background: "#fff",
    padding: "40px 0",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    color: "#6d3b2f",
    fontWeight: 700,
    fontSize: 32,
    letterSpacing: 1,
    marginBottom: 32,
  },
  productsWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: 40,
    flexWrap: "wrap",
    marginBottom: 32,
  },
  card: {
    width: 260,
    background: "#fff",
    borderRadius: 16,
    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
    padding: "24px 18px 18px 18px",
    position: "relative",
    textAlign: "center",
    margin: "10px",
    // Responsive
    transition: "width 0.2s",
  },
  image: {
    width: "100%",
    height: 120,
    objectFit: "contain",
    margin: "32px 0 12px 0",
  },
  viewAllBtn: {
    background: "#6d3b2f",
    color: "#fff",
    border: "none",
    borderRadius: 24,
    padding: "10px 32px",
    fontWeight: 700,
    fontSize: 18,
    display: "flex",
    alignItems: "center",
    gap: 10,
    cursor: "pointer",
  },
  // Media queries
  "@media (max-width: 900px)": {
    productsWrapper: {
      gap: 24,
    },
    card: {
      width: 210,
      padding: "18px 10px 14px 10px",
    },
    title: {
      fontSize: 26,
    },
    viewAllBtn: {
      fontSize: 16,
      padding: "8px 20px",
    },
  },
  "@media (max-width: 600px)": {
    container: {
      padding: "18px 0",
    },
    productsWrapper: {
      flexDirection: "column",
      alignItems: "center",
      gap: 16,
    },
    card: {
      width: "90vw",
      minWidth: 0,
      padding: "14px 6vw 10px 6vw",
    },
    image: {
      height: 90,
      margin: "18px 0 8px 0",
    },
    title: {
      fontSize: 20,
      marginBottom: 18,
    },
    viewAllBtn: {
      fontSize: 15,
      padding: "7px 16px",
    },
  },
};

function useResponsiveStyles() {
  // Helper to merge responsive styles based on window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  let merged = { ...styles };
  if (windowWidth <= 600) {
    Object.keys(styles["@media (max-width: 600px)"]).forEach((k) => {
      merged[k] = { ...merged[k], ...styles["@media (max-width: 600px)"][k] };
    });
  } else if (windowWidth <= 900) {
    Object.keys(styles["@media (max-width: 900px)"]).forEach((k) => {
      merged[k] = { ...merged[k], ...styles["@media (max-width: 900px)"][k] };
    });
  }
  return merged;
}

const Collection = () => {
  const [products, setProducts] = useState([]);
  const responsive = useResponsiveStyles();

  useEffect(() => {
    axios.get(`api/collections`)
      .then(res => {
        if (Array.isArray(res.data.collections)) {
          setProducts(res.data.collections);
        } else {
          setProducts([]);
        }
      })
      .catch(() => setProducts([]));
  }, []);

  return (
    <div style={responsive.container}>
      <h2 style={responsive.title}>
        NEW COLLECTIONS
      </h2>
      <div style={responsive.productsWrapper}>
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product, idx) => (
            <div key={product.id || idx} style={responsive.card}>
              <div style={{ position: "absolute", top: 18, left: 18 }}>
                <span style={{ background: "#6d3b2f", color: "#fff", borderRadius: 16, padding: "4px 16px", fontSize: 13, fontWeight: 600 }}>
                  DEAL PRICE.!
                </span>
              </div>
              <div style={{ position: "absolute", top: 18, right: 18, display: "flex", gap: 16 }}>
                <FiHeart size={22} color="#222" style={{ cursor: "pointer" }} />
                <FiShoppingCart size={22} color="#222" style={{ cursor: "pointer" }} />
              </div>
              <img src={product.imageUrl} alt={product.title} style={responsive.image} />
              <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 12 }}>
                {(product.colors || colorOptions).map((color, i) => (
                  <span key={i} style={{ display: "inline-block", width: 16, height: 16, borderRadius: "50%", background: color, border: "1.5px solid #222", margin: "0 2px" }} />
                ))}
              </div>
              <div style={{ fontSize: 17, fontWeight: 500, color: "#222", marginBottom: 6 }}>
                {product.title}
              </div>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#000", display: "inline-block" }}>
                ₹{product.price}
              </div>
              <span style={{ fontSize: 16, color: "#888", textDecoration: "line-through", margin: "0 8px" }}>
                ₹{product.oldPrice}
              </span>
              <span style={{ fontSize: 18, color: "#00ff00", fontWeight: 700 }}>
                {product.discount}% OFF
              </span>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 10, fontSize: 15, color: "#6d3b2f" }}>
                <FaTruck size={18} style={{ marginRight: 2 }} />
                Shipping In 2 Days
              </div>
            </div>
          ))
        ) : (
          <div style={{ fontSize: 18, color: "#888", textAlign: "center", width: "100%" }}>
            No products available.
          </div>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={responsive.viewAllBtn}>
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default Collection;
