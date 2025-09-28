import React from "react";
import "@fontsource/playfair-display/700.css";
import "@fontsource/montserrat/400.css";
import { FaInfoCircle } from "react-icons/fa";
import aboutImg from "../assets/AboutUs.jpg";

const useWindowWidth = () => {
	const [width, setWidth] = React.useState(window.innerWidth);
	React.useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return width;
};

const AboutUs = () => {
	const width = useWindowWidth();
	const isMobile = width < 768;

	return (
		<div
			style={{
				background: "#fbeee3",
				minHeight: "60vh",
				padding: isMobile ? "0 0 32px 0" : "0 0 60px 0",
			}}
		>
			<h2
				style={{
					fontFamily: "Playfair Display, serif",
					fontWeight: 700,
					fontSize: isMobile ? 28 : 40,
					color: "#6d3b2f",
					textAlign: "center",
					margin: 0,
					paddingTop: isMobile ? 24 : 40,
					letterSpacing: 2,
				}}
			>
				ABOUT US
			</h2>
			<div
				style={{
					fontFamily: "Montserrat, Arial, sans-serif",
					fontWeight: 700,
					fontSize: isMobile ? 16 : 22,
					color: "#222",
					textAlign: "center",
					margin: isMobile ? "12px 0 20px 0" : "18px 0 32px 0",
				}}
			>
				“CRAFTING COMFORT, ONE PIECE AT A TIME.”
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: isMobile ? "column" : "row",
					justifyContent: "center",
					alignItems: isMobile ? "stretch" : "stretch",
					gap: isMobile ? 16 : 0,
					maxWidth: 1200,
					margin: "0 auto",
					width: "100%",
				}}
			>
				<div
					style={{
						background: "#fff",
						borderRadius: isMobile ? "20px 20px 0 0" : "20px 0 0 20px",
						boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
						padding: isMobile ? "20px 14px 18px 14px" : "36px 32px 32px 32px",
						flex: 1,
						minWidth: 0,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						order: isMobile ? 2 : 1,
					}}
				>
					<div
						style={{
							fontFamily: "Montserrat, Arial, sans-serif",
							fontSize: isMobile ? 14 : 16,
							color: "#222",
							marginBottom: isMobile ? 12 : 18,
							lineHeight: 1.7,
						}}
					>
						At Ask Me Furniture, We Believe Furniture Isn’t Just About Utility – It’s About Creating Spaces That Inspire, Relax, And Connect People. Our Collections Blend Fine Craftsmanship, Durable Materials, And Modern Design To Give You Furniture That Lasts A Lifetime.<br /><br />
						With Years Of Expertise, We Curate And Design Pieces That Adapt To Your Lifestyle – Whether It’s A Cozy Home, A Chic Apartment, Or A Professional Workspace.
					</div>
					<div
						style={{
							fontFamily: "Playfair Display, serif",
							fontWeight: 700,
							fontSize: isMobile ? 16 : 22,
							color: "#6d3b2f",
							marginBottom: isMobile ? 12 : 18,
							letterSpacing: 1,
						}}
					>
						“FURNITURE IS THE BACKBONE OF A BEAUTIFUL HOME – STRONG, SUPPORTIVE, AND FULL OF CHARACTER.”
					</div>
					<button
						style={{
							background: "#6d3b2f",
							color: "#fff",
							border: "none",
							borderRadius: 24,
							padding: isMobile ? "8px 18px" : "10px 28px",
							fontFamily: "Montserrat, Arial, sans-serif",
							fontWeight: 600,
							fontSize: isMobile ? 14 : 16,
							cursor: "pointer",
							boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
							display: "flex",
							alignItems: "center",
							gap: 10,
							marginTop: 8,
							width: "fit-content",
						}}
					>
						<FaInfoCircle size={isMobile ? 15 : 18} style={{ marginRight: 4 }} />
						Know More
					</button>
				</div>
				<div
					style={{
						background: "#fff",
						borderRadius: isMobile ? "0 0 20px 20px" : "0 20px 20px 0",
						boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
						flex: 1,
						minWidth: 0,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						padding: 0,
						order: isMobile ? 1 : 2,
						minHeight: isMobile ? 180 : "auto",
						maxHeight: isMobile ? 220 : "none",
					}}
				>
					<img
						src={aboutImg}
						alt="About Us"
						style={{
							width: "100%",
							height: isMobile ? 180 : "100%",
							objectFit: "cover",
							borderRadius: isMobile ? "0 0 20px 20px" : "0 20px 20px 0",
							maxHeight: isMobile ? 220 : "none",
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
