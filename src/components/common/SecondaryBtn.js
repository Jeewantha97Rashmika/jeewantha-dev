import * as React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function SecondaryBtn({ title, handleClick }) {
  return (
    <Button
      variant="outlined"
      onClick={handleClick}
      sx={{
        width: { xs: "100%" },
        marginRight: "10px",
        borderColor: "black",
        borderRadius: "30px",
        padding: "10px 10px ",
        textTransform: "none",
        transition:
          "background-color 0.5s ease, color 0.5s ease , border-radius 0.5s ease",
        "&:hover": {
          transition:
            "background-color 0.5s ease, color 0.5s ease , border-radius 0.5s ease",
          backgroundColor: "none",
          borderRadius: "0px",
          borderColor: "black",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: 400,
          fontFamily: "Montserrat",
          color: "black",
        }}
      >
        {title}
      </Typography>
    </Button>
  );
}
