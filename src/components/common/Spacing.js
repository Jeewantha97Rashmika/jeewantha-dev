import { Box } from "@mui/material";
import React from "react";

export default function Spacing(color) {
  return (
    <Box
      sx={{
        backgroundColor: color ? color : "transparent",
        width: "100%",
        height: { xs: "50px", md: "100px" },
      }}
    ></Box>
  );
}
