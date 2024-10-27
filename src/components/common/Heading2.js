import React from "react";
import { Typography } from "@mui/material";

export default function Heading2({ text, component, color }) {
  return (
    <>
      <Typography
        component={component}
        sx={{
          mb: { md: 5 },
          fontSize: "30px",
          fontWeight: "bold",
          lineHeight: "1.2",
          fontFamily: "Montserrat",
          color: "#0B0C0C",
        }}
      >
        {text}
      </Typography>
    </>
  );
}
