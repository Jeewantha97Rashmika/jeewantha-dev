import React from "react";
import { Typography } from "@mui/material";

export default function BodyText({ bodyText, component }) {
  return (
    <>
      <Typography
        component={component}
        sx={{
          color: "rgba(112, 112, 112, 1)",
          fontSize: { xs: "14px", sm: "20px" },
          fontWeight: 400,
          fontFamily:'Montserrat',
        }}
      >
        {bodyText}
      </Typography>
    </>
  );
}
