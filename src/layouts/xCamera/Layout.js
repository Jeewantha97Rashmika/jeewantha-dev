import { useTheme, Container, Typography, Grid, Box } from "@mui/material";
import React from "react";
import TitleDesc from "../../components/xcamera/TitleDesc";
import Xcamera from "../../images/xcamera.png";
export default function Layout() {
  const theme = useTheme();

  return (
    <Container>
      <TitleDesc />
      <Typography
        sx={{
          fontSize: { xs: "30px" },

          color: "#0B0C0C",
          fontFamily: "Montserrat",
        }}
      >
        Design Screens
      </Typography>
      <Box sx={{ width: "100%", mt: 5,border: `1px solid ${theme.palette.borderColor?.main}` }}>
        <img src={Xcamera} alt="xcamera" width={"100%"} />
      </Box>
    </Container>
  );
}
