import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";

import { SiGooglemeet } from "react-icons/si";
export default function SheduleMeting() {
  const theme = useTheme();
  return (
    <div>
      {" "}
      <Box
        sx={{
          mb: 2,
        }}
      >
       

        <Button
          href="https://calendly.com/jeewantharashmika/30min"
          target="_blank"
          color="inherit"
          sx={{
            color: theme.palette.btnColor?.text,
            width: { xs: "100%" },
            backgroundColor: "#FF7262",
            transition:
              "background-color 0.5s ease, color 0.5s ease, border-radius 0.5s ease",
            display: "inline-flex",
            alignItems: "center",
            borderRadius: "30px",
            justifyContent: "center",
            height: "46px",
            padding: "5px 10px 5px 20px",
            "&:hover": {
              backgroundColor: "#FF7262",
              transition:
                "background-color 0.5s ease, color 0.5s ease , border-radius 0.5s ease",
              borderRadius: "0px",
            },
            fontFamily: "Montserrat",
            textAlign: "center",
            textTransform: "none",
            fontSize: "16px",
          }}
        >
          {"Shechedule a call"}
          <Box sx={{ fontSize: { xs: "24px", sm: "28px" } }}>
            <SiGooglemeet
              style={{
                color: "#fff",
                marginLeft: "10px",
              }}
            />
          </Box>
        </Button>
        <Typography
          sx={{
            color: theme.palette.textColor?.secondary,
            textAlign: "center",
            fontSize: "16px",
            my: 2,
          }}
        >
          OR
        </Typography>
      </Box>
    </div>
  );
}
