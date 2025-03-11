import React from "react";
import Knovik from "../../images/knovik.png";
import { Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
export default function WorkingContent02() {
  const theme = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }} // Start with hidden and below position
      whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and position
      viewport={{ once: true, amount: 0.2 }} // Only animate once when 20% of the component is in view
      transition={{ type: "spring", stiffness: 100 }}
      style={{
        marginTop: "10px",
        // backgroundColor: theme.palette.cardBgColor?.main,
        transition: "background-color 0.5s ease, color 0.5s ease",
        padding: "1rem 1rem",
        borderRadius: "1rem",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor:theme.palette.cardBgColor?.main
      }}
    >
      <Typography
        component={"p"}
        sx={{
          color: "#FF7262",
          fontSize: "16px",
          fontWeight: 600,
          fontFamily: "Montserrat",
        }}
      >
        Associate UI/UX Engineer
      </Typography>

      <Typography
        component={"p"}
        sx={{
          color: theme.palette.textColor?.main,
          fontSize: "14px",
          fontWeight: 400,
          fontFamily: "Montserrat",
        }}
      >
        2023 - 2025 - Colombo Sri Lanka | Hybrid - Full Time
      </Typography>
      <br></br>

      <img
        src={Knovik}
        style={{
          maxWidth: "100px",
          height: "auto",
          backgroundColor: "#fff",
          transition: "background-color 0.5s ease, color 0.5s ease",
          padding: "4px",
          borderRadius: "5px",
        }}
        alt="knovik"
      />
      <Typography
        component={"p"}
        sx={{
          color: theme.palette.textColor?.main,
          fontSize: "14px",
          fontWeight: 400,
          fontFamily: "Montserrat",
          textAlign: "justify",
        }}
      >
        Designed productive, cooperative, and modern user interfaces for both
        web and mobile solutions, enhancing user engagement and satisfaction.
        Developed responsive websites and applications using the MERN stack,
        Shopify, Wordpress ensuring high performance and scalability.
        Experienced in developing mobile applications using Flutter, delivering
        cross-platform solutions with responsive and user-friendly interfaces.
      </Typography>
    </motion.div>
  );
}
