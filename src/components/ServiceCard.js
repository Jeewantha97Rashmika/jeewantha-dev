import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function ServiceCard({ title, description, image }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: theme.palette.cardBgColor?.main,
        border: "1px solid rgb(228, 228, 228)",
        padding: "20px",
        borderRadius: "1rem",
        img: {
          fill: "red",
          color: "red",
        },
        mb: 2,
        transition:
          "background-color 0.5s ease, color 0.1s ease ,scale 0.3s ease",
        ":hover": {
          scale: 0.98,
          backgroundColor: theme.palette.btnColor?.main,
          color: "#fff",
          transition:
            "background-color 0.5s ease, color 0.1s ease ,scale 0.3s ease",
          border: "1px solidrgba(139, 139, 139, 0)",
        },
        cursor: "pointer",
      }}
    >
      <Grid container gap={3}>
        <Grid xs={1}>
          <div
            dangerouslySetInnerHTML={{ __html: image }}
            style={{ width: "60px", height: "60px" }}
          />
        </Grid>
        <Grid xs={8}>
          <Box sx={{ ml: 2 }}>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 600,
                fontFamily: "Montserrat",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontSize: "12PX",
                fontWeight: 500,
                fontFamily: "Montserrat",
              }}
            >
              {description}
            </Typography>
          </Box>
        </Grid>
        <Grid xs={1} sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <ArrowForwardIcon
            sx={{
              backgroundColor: theme.palette.bgColor?.main,
              color: theme.palette.textColor?.main,
              marginLeft: "10px",
              padding: "3px",
              borderRadius: "50%",
              rotate: "-45deg",
              fontSize: { xs: "28px", sm: "28px" },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
