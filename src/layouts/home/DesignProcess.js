import React from "react";
import { Box, Grid, Typography, useTheme, Paper } from "@mui/material";
import { motion } from "framer-motion";
export default function DesignProcess() {
  const theme = useTheme();
  
  const data = [
    {
      id: 1,
      title: "Research",
      dec: "To create something awesome, one must first talk about the details. Planning is essential.",
      icon: "",
    },
    {
      id: 2,
      title: "Wireframe",
      dec: "After hashing out the details of the website, it's easy to throw the ideas onto pen & paper.",
      icon: "",
    },
    {
      id: 3,
      title: "Design",
      dec: "The most fun part of all - adding pizzaz to the wirefreames and bring it to life.",
      icon: "",
    },
    {
      id: 4,
      title: "Development",
      dec: "The design may be final but it needs to be functional and practical. Development is key.",
      icon: "",
    },
  ];

  return (
    <Box >
      <Grid container spacing={3}>
        {data.map((item, key) => (
          <Grid item xs={12} sm={6} md={3} key={key}>
            <Paper
              component={motion.div}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 0.98 }} // Framer Motion hover effect
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      duration: 0.3,
                    }}
              elevation={0}
              sx={{
                height: "100%",
                p: 3,
                borderRadius: 5,
                border: `1px solid ${theme.palette.mode === 'dark' ? '#3f3f3f' : '#e0e0e0'}`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                //   transform: "translateY(-5px)",
                // boxShadow: theme.palette.shadow?.secondary,
                },
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 600,
                  fontFamily: "Montserrat",
                }}
              >
                <Box
                  sx={{
                    mr: 1.5,
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor:  '#FF7262',
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: "bold",
                    fontFamily: "Montserrat",
                  }}
                >
                  {item.id}
                </Box>
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                    fontFamily: "Montserrat",
                  color: theme.palette.text?.secondary || 'text.secondary',
                  lineHeight: 1.6,
                }}
              >
                {item.dec}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}