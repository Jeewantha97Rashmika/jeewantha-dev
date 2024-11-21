import React from "react";
import { Button, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function MainBtn({ handleLinkedinClick, isMobile }) {
  const theme = useTheme();
  return (
    <Button
      onClick={handleLinkedinClick}
      color="inherit"
      sx={{
        color: theme.palette.btnColor?.text,
        width: { xs: "100%", sm: "auto" },
        backgroundColor: theme.palette.btnColor?.main,
        display: isMobile ? "none" : "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          backgroundColor: theme.palette.btnColor?.main,
          padding: "5px 20px",
          transform: "scale(0.95)",
        },
        fontFamily: "Montserrat",
        textAlign: "center",
        textTransform: "none",
        fontSize: "16px",
        padding: "5px 20px",
        transition: "transform 0.1s",
      }}
    >
      Let’s Talk
      <ArrowForwardIcon
        sx={{
          color: theme.palette.btnColor?.text,
          marginLeft: "10px",
          fontSize: { xs: "18px", sm: "24px" },
        }}
      />
    </Button>
  );
}
