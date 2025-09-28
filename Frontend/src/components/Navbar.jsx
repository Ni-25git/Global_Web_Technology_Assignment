import React from "react";
import "@fontsource/montserrat/400.css";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import logo from '../assets/Logo.png'

const navItems = [
	"HOME",
	"SHOP",
	"ABOUT US",
	"CONTACT US",
	"BLOG",
];

const navbarStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  zIndex: 1000,
  background: "#fff",
  boxShadow: "0 2px 8px #0001",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 48px",
  minHeight: 64,
  fontFamily: "'Montserrat', sans-serif",
  transition: "padding 0.2s"
};

export default function Navbar() {
  return (
    <nav style={navbarStyle}>
      <style>
        {`
          @media (max-width: 900px) {
            nav { padding: 0 18px !important; min-height: 54px !important; }
            .nav-logo { font-size: 20px !important; }
            .nav-links { font-size: 15px !important; }
          }
          @media (max-width: 600px) {
            nav { flex-direction: column !important; padding: 0 6px !important; }
            .nav-links { flex-direction: column !important; gap: 8px !important; }
          }
        `}
      </style>
			<div style={{ display: "flex", alignItems: "center", marginLeft: 20 }}>
		       <img
			       src={logo}
			       alt="Logo"
			       style={{ height: 45, marginRight: 8 }}
		       />
			</div>
			<div style={{ display: "flex", alignItems: "center", gap: 32 }}>
				{navItems.map((item) => (
					<span
						key={item}
						style={{
							color: "#222",
							fontSize: "17px",
							letterSpacing: "0.5px",
							cursor: "pointer",
							fontWeight: 400,
						}}
					>
						{item}
					</span>
				))}
			</div>
			<div style={{ display: "flex", alignItems: "center", gap: 24, marginRight: 20 }}>
				<FiHeart size={20} color="#222" style={{ cursor: "pointer" }} />
				<FiShoppingCart size={20} color="#222" style={{ cursor: "pointer" }} />
				<FiUser size={20} color="#222" style={{ cursor: "pointer" }} />
			</div>
		</nav>
	);
};
