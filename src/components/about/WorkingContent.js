import React from "react";
import Knovik from "../../images/knovik.png";
import { Box, Typography, useTheme } from "@mui/material";
export default function WorkingContent() {
  const theme = useTheme();
  return (
    <div
      style={{
        marginTop: "10px",
        // backgroundColor: theme.palette.cardBgColor?.main,
        transition: "background-color 0.5s ease, color 0.5s ease",
        padding: "1rem 1rem",
        borderRadius: "1rem",
      }}
    >
      <Box>
        <img
          src={Knovik}
          style={{
            maxWidth: "120px",
            height: "auto",
            backgroundColor: "#fff",
            transition: "background-color 0.5s ease, color 0.5s ease",
            padding: "4px",
            borderRadius: "5px",
          }}
          alt="knovik"
        />
      </Box>
      <br></br>
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
          textAlign: "justify",
          color: theme.palette.textColor?.main,
          fontSize: "14px",
          fontWeight: 400,
          fontFamily: "Montserrat",
        }}
      >
        Assisted in designing user-friendly interfaces for web and mobile
        applications, focusing on enhancing the overall user experience.
        Collaborated with senior designers to create wireframes, prototypes, and
        visual designs that align with project goals. Gained proficiency in
        design tools such as Adobe XD, Figma, and Sketch, as well as front-end
        technologies like HTML, CSS, and JavaScript ,React JS , Gatsby JS .
        Developed a strong understanding of responsive design principles and
        accessibility standards to create inclusive digital experiences..
      </Typography>
    </div>
  );
}
