import React from "react";
import { Typography } from "@mui/material";

export default function NormalText({ bodyText, component }) {
  return (
    <>
      <Typography
        component={component}
        sx={{
          color: "black",
          fontSize: { xs: "14px", sm: "20px" },
          fontWeight: 400,
          fontFamily: "Work Sans",
        }}
      >
        {bodyText}
      </Typography>
    </>
  );
}
