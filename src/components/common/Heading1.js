import React from "react";
import { Typography } from "@mui/material";

export default function Heading1({ text1, component }) {
  return (
    <>
      <Typography
        component={component}
        sx={{
          fontSize: "58px",
          fontWeight: "bold",
          lineHeight: "1.2",
        fontFamily: "Montserrat",
          color:"#FF595A"
        }}
      >
        {text1}
      </Typography>

    </>
  );
}
