import * as React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function PrimaryBtn({ title }) {
  return (
    <Button
    href="/#work"
      sx={{
        marginRight: "10px",
        backgroundColor: "black",
        borderRadius: "30px",
        padding: "10px 40px ",
        textTransform: "none",
        transition: "background-color 0.3s, transform 0.3s",
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
    </Button>
  );
}
