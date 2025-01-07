import React from "react";
import Knovik from "../../images/knovik.png";
import { Typography, useTheme } from "@mui/material";

export default function WorkingContent03() {
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
        2025 - present - Colombo Sri Lanka | Hybrid - Full Time
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
        UI/UX Engineer
      </Typography>

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
        As a UI/UX Engineer, I have designed and developed intuitive,
        user-friendly interfaces for both web and mobile applications, focusing
        on enhancing user engagement. Mentored junior developers, fostering growth and knowledge sharing.
        Collaborated with senior stakeholders to align technical solutions with business objectives.
        Integrated emerging technologies to enhance project efficiency and innovation.
      </Typography>
    </div>
  );
}
