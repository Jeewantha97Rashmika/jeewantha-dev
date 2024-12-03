import React from "react";
import UOJ from "../../images/uoj_logo.png";
import { Typography, useTheme } from "@mui/material";
export default function Education01() {
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
        src={UOJ}
        style={{
          maxWidth: "160px",
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
        2018 - 2023 - Sri Lanka
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
        University of Jaffna, Sri Lanka
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
        Information and Communication Technology - BICT(horns)
      </Typography>{" "}
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
        Consisting with the modules are Applied and Software Engineering, Java,
        C++, Mobile Computing, HTML, CSS, JS, React Native, UI/UX Designing ,
        etc.
      </Typography>
    </div>
  );
}
