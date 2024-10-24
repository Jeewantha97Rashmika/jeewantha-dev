import { Button } from "@mui/material";
import React from "react";

export default function MainBtn({handleLinkedinClick}) {
  return (
    <Button
    onClick={handleLinkedinClick}
    color="inherit"
    sx={{
      color: "white",

      backgroundColor: "#333",
      display: { xs: "none", md: "inline" },
      "&:hover": {
        backgroundColor: "#333333",
        padding: "5px 20px",
        // borderRadius: "40px",
        transform: "scale(0.95)",
      },
      fontFamily: "Work Sans",
      textAlign: "center",
      textTransform: "none",
      fontSize: "16px",
      padding: "5px 20px",
      transition: "transform 0.2s",
    }}
  >
    Let’s Talk
  </Button>
  );
}
