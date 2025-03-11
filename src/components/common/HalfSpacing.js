import { Box } from '@mui/material'
import React from 'react'

export default function HalfSpacing({color}) {
  return (
    <Box
    sx={{
      backgroundColor: color ? color : "transparent",
      width: "100%",
      height: { xs: "25px", md: "50px" },
    }}
  ></Box>
  )
}
