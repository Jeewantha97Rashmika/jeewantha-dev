import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

export default function ReviewCard({ img, name, review, date }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        zIndex: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth:{xs:"100%", md :"50vw"},
        gap: 2,
        padding: "2rem",
        borderRadius: "10px",
        // boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={img}
        alt="img"
        style={{
       
          // borderRadius: "50%",
          width: "200px",
          height: "auto",
          objectFit: "cover",
        }}
      />
      <Typography
        sx={{
          color: theme.palette.textColor?.secondary,
          fontSize: "26px",
          fontWeight: 600,
          fontFamily: "Montserrat",
          lineHeight: "1.5rem",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          color: theme.palette.textColor?.main,
          fontSize: {xs:"14px", md:"18px"},
          fontWeight: 400,
          fontFamily: "Montserrat",
          lineHeight: "1.8rem",
        }}
      >
        {review}
      </Typography>
      <Typography
        sx={{
          color: theme.palette.textColor?.main,
          fontSize: "16px",
          fontWeight: 400,
          fontFamily: "Montserrat",
          lineHeight: "1.5rem",

        }}
      >
        {date}
      </Typography>
    </Box>
  );
}
