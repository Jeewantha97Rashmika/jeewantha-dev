import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import MyImage1 from "../../images/myImages (1).jpg";
import MyImage2 from "../../images/myImages (2).jpg";
import MyImage3 from "../../images/myImages (3).jpg";
import MyImage4 from "../../images/myImages (4).jpg";
import MyImage5 from "../../images/myImages (5).jpg";
import { useMediaQuery, useTheme } from "@mui/material";
export default function PhotoSet() {
  const theme = useTheme();
  return (
    <section
      style={{
        position: "relative",
        display: "grid",
        minHeight: "100vh",
        width: "100%",
        placeContent: "center",
        overflow: "hidden",
        backgroundColor: theme.palette.bgColor?.main,
        transition: "background-color 0.5s ease, color 0.5s ease",

        paddingBottom: "10rem",
      }}
    >
      <h2
        style={{
          position: "relative",
          zIndex: 0,
          fontSize: "20vw",
          fontWeight: "900",
          color: theme.palette.textColor?.funTextColor ,
          lineHeight: "1",
          textAlign: "center",
        }}
      >
        Play Now
        <span style={{ color: theme.palette.textColor?.funTextColor }}>.</span>
      </h2>
      <Cards />
    </section>
  );
}

const Cards = () => {
  const containerRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <div
      style={{
        position: "absolute",
        inset: "0",
        zIndex: 10,
      }}
      ref={containerRef}
    >
      <Card
        containerRef={containerRef}
        src={MyImage1}
        alt="Example image"
        rotate="6deg"
        top="20%"
        left="25%"
        width={isMobile ? "12rem" : "25em"}
      />
      <Card
        containerRef={containerRef}
        src={MyImage2}
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="60%"
        width={isMobile ? "12rem" : "35em"}
      />
      <Card
        containerRef={containerRef}
        src={MyImage3}
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="40%"
        width={isMobile ? "12rem" : "25em"}
      />
      <Card
        containerRef={containerRef}
        src={MyImage4}
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        width={isMobile ? "12rem" : "25em"}
      />
      <Card
        containerRef={containerRef}
        src={MyImage5}
        alt="Example image"
        rotate="18deg"
        top="20%"
        left="65%"
        width={isMobile ? "12rem" : "25em"}
      />
      <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1622313762347-3c09fe5f2719?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Example image"
        rotate="-3deg"
        top="35%"
        left="55%"
        width={isMobile ? "12rem" : "25em"}
      />
    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, width }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        position: "absolute",
        top,
        left,
        transform: `rotate(${rotate})`,
        zIndex,
        width,
        backgroundColor: "#e5e7eb",
        transition: "background-color 0.5s ease, color 0.5s ease",

        padding: "0.25rem",
        paddingBottom: "1rem",
      }}
      className="drag-elements"
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.65}
    />
  );
};
