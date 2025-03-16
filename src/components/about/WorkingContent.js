import React from "react";
import Knovik from "../../images/knovik.png";
import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
export default function WorkingContent() {
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
        UI/UX Engineer ( Intern )
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
        2022 - 2023 - Colombo Sri Lanka | Remote
      </Typography>
      <br></br>

      <Box>
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
      </Box>
      <Typography
        component={"p"}
        sx={{
          textAlign: "justify",
          color: theme.palette.textColor?.main,
          fontSize: "14px",
          fontWeight: 400,
          fontFamily: "Montserrat",
        }}
      >
        Assisted in designing user-friendly interfaces for web and mobile
        applications, focusing on enhancing the overall user experience.It was
        great to explore and discover new opportunities and to be able to make
        some improvements in new projects. Team work with seniors, made me to
        inherit more knowledge and wisdom.
      </Typography>
    </motion.div>
  );
}
