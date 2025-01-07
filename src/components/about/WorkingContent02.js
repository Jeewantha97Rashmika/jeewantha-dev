import React from "react";
import Knovik from "../../images/knovik.png";
import { Typography, useTheme } from "@mui/material";
export default function WorkingContent02() {
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
        2023 - 2025 - Colombo Sri Lanka | Hybrid - Full Time
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
        Associate UI/UX Engineer
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
        Designed productive, cooperative, and modern user interfaces for both
        web and mobile solutions, enhancing user engagement and satisfaction.
        Developed responsive websites and applications using the MERN stack,
        Shopify, Wordpress ensuring high performance and scalability.
        Experienced in developing mobile applications using Flutter, delivering
        cross-platform solutions with responsive and user-friendly interfaces.
      </Typography>
    </div>
  );
}
