import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Blog1 from "../../images/blog1.jpg";
import Blog2 from "../../images/blog2.jpg";
import Blog3 from "../../images/blog3.jpg";
import DescriptionLayout from "./DescriptionLayout";
import { motion } from "framer-motion";
export default function BlogSection() {
  const blog = [
    {
      img: Blog1,
      title: "How to make Responsive web design",
      dec: "To use color variables across your entire application in a single file (e.g., to ensure consistency in your theme or style), you can centralize your color palette in a separate file and then import those values wherever you need them.",
      link: "",
    },
    {
      img: Blog2,
      title: "How to make Responsive web design",
      dec: "To use color variables across your entire application in a single file (e.g., to ensure consistency in your theme or style), you can centralize your color palette in a separate file and then import those values wherever you need them.",
      link: "",
    },
    {
      img: Blog3,
      title: "How to make Responsive web design",
      dec: "To use color variables across your entire application in a single file (e.g., to ensure consistency in your theme or style), you can centralize your color palette in a separate file and then import those values wherever you need them.",
      link: "",
    },
    {
        img: Blog1,
        title: "How to make Responsive web design",
        dec: "To use color variables across your entire application in a single file (e.g., to ensure consistency in your theme or style), you can centralize your color palette in a separate file and then import those values wherever you need them.",
        link: "",
      },
      {
        img: Blog2,
        title: "How to make Responsive web design",
        dec: "To use color variables across your entire application in a single file (e.g., to ensure consistency in your theme or style), you can centralize your color palette in a separate file and then import those values wherever you need them.",
        link: "",
      },
      {
        img: Blog3,
        title: "How to make Responsive web design",
        dec: "To use color variables across your entire application in a single file (e.g., to ensure consistency in your theme or style), you can centralize your color palette in a separate file and then import those values wherever you need them.",
        link: "",
      },
  ];
  return (
    <div>
    <DescriptionLayout />
    <br />
    <Container>
      <Grid
        container
        sx={{
          pt: 5,
          pb: 15,
        }}
      >
        {blog.map((val, key) => {
          return (
            <Grid key={key} item xs={12} md={4}>
              <Box
               component={motion.div}
              whileHover={{
                scale: 0.98, // Scale up on hover
                transition: { duration: 0.2, ease: "easeInOut" }, // Smooth transition
              }}
                sx={{
                  p: 1.5,
                  m: 1,
                  border: "1px solid #FFF",
                  borderRadius: "15px",
                  cursor: "pointer",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                //   transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition for transform and shadow
                //   '&:hover': {
                //     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",  // Shadow effect on hover
                //     transform: "scale(0.98)",
                //   }
                }}
              >
                <img
                  src={val.img}
                  alt="pro"
                  width={"100%"}
                  style={{
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                
                />
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: 600,
                    lineHeight: "1.2",
                  }}
                >
                  {val.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    textAlign: "justify",
                    color: "#7E7E7E",
                  }}
                >
                  {val.dec}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  </div>
  );
}
