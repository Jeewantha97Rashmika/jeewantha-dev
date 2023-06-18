import React from "react";
import { Typography } from "@mui/material";

export default function Heading2({ text, component, color }) {
  return (
    <>
      <Typography
        component={component}
        sx={{
          mb:{md:5},
          fontSize: "36px",
          fontWeight: 800,
          lineHeight: "1.2",
          fontFamily: "Work Sans",
        }}
      >
        {text}
      </Typography>
    </>
  );
}
