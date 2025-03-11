import { Box } from '@mui/material'
import React from 'react'

export default function HalfSpacing() {
  return (
    <Box
    sx={{
      width: "100%",
      height: { xs: "25px", md: "50px" },
    }}
  ></Box>
  )
}
