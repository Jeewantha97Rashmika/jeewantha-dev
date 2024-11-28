import React from "react";
import { Button, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function MainBtn({ handleLinkedinClick, isMobile ,title}) {
  const theme = useTheme();
  return (
    <Button
      onClick={handleLinkedinClick}
      color="inherit"
      sx={{
        color: theme.palette.btnColor?.text,
        width: { xs: "100%", sm: "auto" },
        backgroundColor: theme.palette.btnColor?.main,
        transition: "background-color 0.5s ease, color 0.5s ease, border-radius 0.5s ease",
        display: isMobile ? "none" : "inline-flex",
        alignItems: "center",
        borderRadius:"30px",
        justifyContent: "center",
        "&:hover": {
          backgroundColor: theme.palette.btnColor?.main,
          transition: "background-color 0.5s ease, color 0.5s ease , border-radius 0.5s ease",
          padding: "5px 20px",
          // transform: "scale(0.95)",
          borderRadius:"0px"
        },
        fontFamily: "Montserrat",
        textAlign: "center",
        textTransform: "none",
        fontSize: "16px",
        padding: "5px 20px",
        transition: "transform 0.1s",
      }}
    >
  {title}
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
