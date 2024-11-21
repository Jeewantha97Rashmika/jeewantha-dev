import { Box, Typography } from "@mui/material";
import React from "react";

export default function ReviewCard({ img, name, review, date }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth:"50vw",
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
          borderRadius: "50%",
          width: "100px",
          height: "100px",
          objectFit: "cover",
        }}
      />
      <Typography
        sx={{
          color: "rgba(112, 112, 112, 1)",
          fontSize: "20px",
          fontWeight: 600,
          fontFamily: "Montserrat",
          lineHeight: "1.5rem",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          color: "rgba(112, 112, 112, 1)",
          fontSize: "18px",
          fontWeight: 400,
          fontFamily: "Montserrat",
          lineHeight: "2rem",
        }}
      >
        {review}
      </Typography>
      <Typography
        sx={{
          color: "rgba(112, 112, 112, 1)",
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
