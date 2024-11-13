import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function MainBtn({ handleLinkedinClick, isMobile }) {
  return (
    <Button
      onClick={handleLinkedinClick}
      color="inherit"
      sx={{
        color: "white",
        width: { xs: "100%", sm: "auto" },
        backgroundColor: "#333",
        display: isMobile ? "none" : "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          backgroundColor: "#333333",
          padding: "5px 20px",
          transform: "scale(0.95)",
        },
        fontFamily: "Montserrat",
        textAlign: "center",
        textTransform: "none",
        fontSize: "16px",
        padding: "5px 20px",
        transition: "transform 0.2s",
      }}
    >
      Let’s Talk
      <ArrowForwardIcon
        sx={{
          color: "white",
          marginLeft: "10px",
          fontSize: { xs: "18px", sm: "24px" },
        }}
      />
    </Button>
  );
}
