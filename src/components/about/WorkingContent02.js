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
        2023-03-01 - present - Sri Lanka
      </Typography>
      <br></br>
      <Typography
        component={"p"}
        sx={{
          color: theme.palette.textColor?.secondary,
          fontSize: "16px",
          fontWeight: 800,
          fontFamily: "Montserrat",
        }}
      >
        Associate Software Engineer
      </Typography>

      <Typography
        component={"p"}
        sx={{
          color: theme.palette.textColor?.main,
          fontSize: "14px",
          fontWeight: 400,
          fontFamily: "Montserrat",
          textAlign:"justify",
        }}
      >
        As an Associate Software Engineer, I specialize in developing robust
        mobile and web applications, with experience in both front-end and
        back-end development. My expertise spans across creating scalable,
        efficient apps for Android, iOS, and web platforms using technologies, I
        take on supporting roles as a UI/UX Designer, focusing on crafting
        intuitive user interfaces and seamless experiences for mobile, web, iOS,
        and desktop applications.
      </Typography>
    </div>
  );
}
