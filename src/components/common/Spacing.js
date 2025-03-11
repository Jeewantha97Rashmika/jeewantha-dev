import { Box } from "@mui/material";
import React from "react";

export default function Spacing() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "50px", md: "100px" },
      }}
    ></Box>
  );
}
