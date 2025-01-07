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
        applications, focusing on enhancing the overall user experience.It was
        great to explore and discover new opportunities and to be able to make
        some improvements in new projects. Team work with seniors, made me to
        inherit more knowledge and wisdom.
      </Typography>
    </div>
  );
}
