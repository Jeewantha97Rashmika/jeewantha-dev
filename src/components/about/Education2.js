import React from "react";
import School from "../../images/school.png";
import { Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
export default function Education02() {
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
          color: theme.palette.textColor?.secondary,
          fontSize: "16px",
          fontWeight: 600,
          fontFamily: "Montserrat",
        }}
      >
        Engineering Technologies
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
        2003 - 2016 - Sri Lanka
      </Typography>
      <Typography
        component={"p"}
        sx={{
          color: theme.palette.textColor?.secondary,
          fontSize: "14px",
          fontWeight: 400,
          fontFamily: "Montserrat",
          mb: 2,
        }}
      >
        Berrewaerts National college kandy
      </Typography>
      <img
        src={School}
        style={{
          maxWidth: "130px",
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
        }}
      >
        Passed Technology Stream with Information and Communication Technology
      </Typography>{" "}
      <br></br>
    </motion.div>
  );
}
