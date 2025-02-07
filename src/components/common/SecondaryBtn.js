import * as React from "react";
import Button from "@mui/material/Button";
import { Typography, useTheme } from "@mui/material";

export default function SecondaryBtn({ title, handleClick }) {
  const theme = useTheme();

  return (
    <Button
      variant="outlined"
      onClick={handleClick}
      sx={{
        width: { xs: "100%" },

        mt: { xs: 2, md: 0 },
        borderColor: theme.palette.borderColor?.main,
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
          borderColor: theme.palette.borderColor?.main,
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: 400,
          fontFamily: "Montserrat",
          color: theme.palette.borderColor?.main,
        }}
      >
        {title}
      </Typography>
    </Button>
  );
}
