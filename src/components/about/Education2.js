import React from "react";
import School from "../../images/school.png";
import { Typography, useTheme } from "@mui/material";
export default function Education02() {
  const theme = useTheme();
  return (
    <div
      style={{
        marginTop: "30px",
        backgroundColor: theme.palette.cardBgColor?.main,
        padding: "1rem 1rem",
        borderRadius: "1rem",
      }}
    >
      <img
        src={School}
        style={{
          maxWidth: "160px",
          height: "auto",
          backgroundColor: "#fff",
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
          fontSize: "16px",
          fontWeight: 400,
          fontFamily: "Montserrat",
        }}
      >
        2003 - 2016 - Sri Lanka
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
        Berrewaerts National college kandy
      </Typography>
      <Typography
        component={"p"}
        sx={{
          color: theme.palette.textColor?.main,
          fontSize: "16px",
          fontWeight: 400,
          fontFamily: "Montserrat",
        }}
      >
        Passed Technology Stream with Information and Communication Technology
      </Typography>{" "}
      <br></br>
    </div>
  );
}
