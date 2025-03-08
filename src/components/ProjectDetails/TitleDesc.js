import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";

export default function TitleDesc({ title, description, roles, client }) {
  const theme = useTheme();
  return (
    <div>
      {" "}
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "40px" },
          fontWeight: "bold",
          color: theme.palette.textColor?.secondary,
          fontFamily: "Montserrat",
        }}
      >
        {title}
      </Typography>
      <Grid container gap={2}>
        <Grid item xs={12} md={8}>
          <Typography
            sx={{
              fontSize: { xs: "16px" },

              color: theme.palette.textColor?.secondary,
              fontFamily: "Montserrat",
            }}
          >
            {description}
          </Typography>
        </Grid>

        <Grid>
          <Box
            sx={{
              display: "flex",
              my: 1,
            }}
          >
            <Typography sx={{ fontWeight: "bold", mr: 2 }}>Roles: </Typography>
            <Typography>{roles}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography sx={{ fontWeight: "bold", mr: 2 }}>Client: </Typography>
            <Typography>{client}</Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
