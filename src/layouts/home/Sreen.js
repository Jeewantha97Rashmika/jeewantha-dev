import React from "react";
import PaintReveal from "./PaintReveal";
import { Typography } from "@mui/material";

export default function Sreen() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "60vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "50px" },
          fontWeight: 600,
          fontFamily: "Montserrat",
          position: "absolute",
        }}
      >
        Hello Jeewantha Rashmika
      </Typography>
      <PaintReveal />
    </div>
  );
}
