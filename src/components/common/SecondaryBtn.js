import * as React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function SecondaryBtn({ title,url }) {
  return (
    <Button
      variant="outlined"
      href={url}
      sx={{
        marginRight: "10px",
        borderColor: "black",
        borderRadius: "30px",
        padding: "10px 40px ",
        textTransform: "none",
        transition: "background-color 0.3s, transform 0.3s",
        "&:hover": {
          backgroundColor: "none",
          transform: "scale(0.95)",
          borderColor: "black",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "20px" },
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
