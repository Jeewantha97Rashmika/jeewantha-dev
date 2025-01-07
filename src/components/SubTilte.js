import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";

export default function SubTilte() {

  const theme = useTheme();
  return (
    <Grid container>
      <Grid item>
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: "16px", sm: "20px" },
            border: `1px dashed ${theme.palette.borderColor?.main}`,
            display: "inline-block",
            padding: "0px 10px 0px 10px",
            position: "relative",
            backgroundColor: "#FF7262",
            transition: "background-color 0.5s ease, color 0.5s ease",
            transform: "rotate(5deg)",
            mb:2
          }}
        >
          UI / UX Engineer + Designer
        </Typography>
      </Grid>
      <Grid item>
        <Box
          sx={{
            // position: "",
            // bottom: { xs: 390, sm: 270, md: 390, lg: 360 },
            width: { xs: 100, md: 100 },
            // left: { xs: 250, sm: 290, md: 260, lg: 300 },
            
          }}
        >
          {/* <img src={Designer} alt="Designer" width={"100%"} height={"auto"} /> */}
        </Box>
      </Grid>
    </Grid>
  );
}
