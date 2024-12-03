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
            borderRadius:"5px"
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
        2022-10-01 - 2023-03-01 - Sri Lanka
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
        Mobile developer ( Intern )
      </Typography>

      <Typography
        component={"p"}
        sx={{
          textAlign:"justify",
          color: theme.palette.textColor?.main,
          fontSize: "14px",
          fontWeight: 400,
          fontFamily: "Montserrat",
        }}
      >
        As a Mobile Developer Intern, I have gained hands-on experience in
        designing and developing user-friendly mobile applications for both
        Android and iOS platforms. My work includes crafting intuitive user
        interfaces with a focus on seamless user experiences (UI/UX design), as
        well as coding and deploying functional apps.
      </Typography>
    </div>
  );
}
