import * as React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function PrimaryBtn({ title }) {
  return (
    <Button
      sx={{
        display: "flex",
        alignItems: "center",
        marginRight: "10px",
        backgroundColor: "black",
        borderRadius: "30px",
        padding: "10px 40px",
        textTransform: "none",
        transition: "background-color 0.5s ease, color 0.5s ease",

        "&:hover": {
          backgroundColor: "black",
          transform: "scale(0.95)",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "20px" },
          fontWeight: 400,
          fontFamily: "Montserrat",
          color: "white",
        }}
      >
        {title}
      </Typography>
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
