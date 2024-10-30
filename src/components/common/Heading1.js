import React from "react";
import { Typography } from "@mui/material";

export default function Heading1({ text1, component }) {
  return (
    <>
      <Typography
        component={component}
        sx={{
          fontSize: {xs:"44px", md:"48px",lg:"58px"},
          fontWeight: "bold",
          lineHeight: "1.1",
          fontFamily: "Montserrat",
          color: "#FF595A",
        }}
      >
        {text1}
      </Typography>
    </>
  );
}
