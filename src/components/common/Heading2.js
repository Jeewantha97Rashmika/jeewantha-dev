import React from "react";
import { Typography, useTheme } from "@mui/material";

export default function Heading2({ text, component, color }) {
  const theme= useTheme();
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
          color: theme.palette.textColor?.secondary,
        }}
      >
        {text}
      </Typography>
    </>
  );
}
