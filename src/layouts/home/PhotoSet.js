import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
export default function PhotoSet() {
  const theme = useTheme();
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 80 }} // Start with hidden and below position
      whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position
      viewport={{ once :true, amount: 0.2 }} // Only animate once when 20% of the component is in view
      transition={{ type: "spring", stiffness: 100 }}
      sx={{
        position: "relative",
        display: "grid",
        minHeight: {xs:"80vh",md:"100vh"},
        width: "100%",
        placeContent: "center",
        overflow: "hidden",
        backgroundColor: theme.palette.bgColor?.main,
        transition: "background-color 0.5s ease, color 0.5s ease",
        zIndex: 5,
        paddingBottom: "10rem",
      }}
    >
      <Typography
        sx={{
          position: "relative",
          zIndex: 0,
          fontSize: "23vw",
          fontWeight: "900",
          color: theme.palette.textColor?.funTextColor,
          lineHeight: "1",
          textAlign: "center",
          fontFamily: "Montserrat",
        }}
      >
        Fav Memo
        <span style={{ color: theme.palette.textColor?.funTextColor }}>.</span>
      </Typography>
      <Cards />
    </Box>
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
        src={"https://cdn.jeewantharashmika.com/fun_activity_images/traveling_image_01-min.jpg"}
        alt="Example image"
        rotate="6deg"
        top="20%"
        left="25%"
        width={isMobile ? "12rem" : "25em"}
      />
      <Card
        containerRef={containerRef}
        src={"https://cdn.jeewantharashmika.com/fun_activity_images/traveling_image_02-min.jpg"}
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="60%"
        width={isMobile ? "12rem" : "35em"}
      />
      <Card
        containerRef={containerRef}
        src={"https://cdn.jeewantharashmika.com/fun_activity_images/traveling_image_03-min.jpg"}
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="40%"
        width={isMobile ? "12rem" : "25em"}
      />
      <Card
        containerRef={containerRef}
        src={"https://cdn.jeewantharashmika.com/fun_activity_images/traveling_image_04-min.jpg"}
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        width={isMobile ? "12rem" : "25em"}
      />
      <Card
        containerRef={containerRef}
        src={"https://cdn.jeewantharashmika.com/fun_activity_images/traveling_image_07-min.jpg"}
        alt="Example image"
        rotate="18deg"
        top="20%"
        left="65%"
        width={isMobile ? "12rem" : "25em"}
      />
      {/* <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1622313762347-3c09fe5f2719?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Example image"
        rotate="-3deg"
        top="35%"
        left="55%"
        width={isMobile ? "12rem" : "25em"}
      /> */}
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
