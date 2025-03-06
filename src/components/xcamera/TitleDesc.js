import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function TitleDesc() {
  return (
    <div> <Typography
    sx={{
      fontSize: { xs: "30px", md: "40px" },
      fontWeight: "bold",
      color: "#0B0C0C",
      fontFamily: "Montserrat",
    }}
  >
    X camera
  </Typography>

  <Grid container>
    <Grid item xs={12} md={8}>
      <Typography
        sx={{
          fontSize: { xs: "16px" },

          color: "#0B0C0C",
          fontFamily: "Montserrat",
        }}
      >
        The Video Sharing App is an engaging platform that empowers users to
        connect through video content. It allows users to seamlessly upload,
        view, and share videos with others in the app's community, fostering
        creativity and interaction.
      </Typography>
    </Grid>

    <Grid >
      <Box
        sx={{
          display: "flex",
          mb:2,
        }}
      >
        <Typography sx={{ fontWeight: "bold",mr:2 }}>Role: </Typography>
        <Typography>UI/UX desiner</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Typography sx={{ fontWeight: "bold",mr:2 }}>Client: </Typography>
        <Typography>Personal Project</Typography>
      </Box>
    </Grid>
  </Grid></div>
  )
}
