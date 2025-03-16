import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

export default function TitleDescription({ title, description, align }) {
  const theme = useTheme();
  return (
    <Box sx={{ my: 1 }}>
      <Typography
      variant="h2"
        sx={{
          fontSize: { xs: "30px", md: "40px" },
          fontWeight: "bold",
          color: theme.palette.textColor?.secondary,
          fontFamily: "Montserrat",
          textAlign: align && "center",
          lineHeight: "1.5",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "16px" },
          textAlign: align && "center",
          color: theme.palette.textColor?.main,
          fontFamily: "Montserrat",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
