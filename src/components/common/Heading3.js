import React from "react";
import { Typography } from "@mui/material";

export default function Heading3({ text, component }) {
  return (
    <>
      <Typography
        component={component}
        sx={{
          fontSize: "28px",
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
