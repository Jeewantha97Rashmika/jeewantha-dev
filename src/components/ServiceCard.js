import React, { useState } from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import SpringModal from "./SpringModal";

export default function ServiceCard({ title, description, image }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  // Handle click event to open the modal
  const handleClick = () => {
    setIsOpen(true); // Set isOpen to true when clicked
  };

  return (
    <>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 0.98 }} // Framer Motion hover effect
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 0.3,
        }}
        onClick={handleClick} // Trigger handleClick on Box click
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: theme.palette.cardBgColor?.main,
          border: `1px solid ${theme.palette.borderColor?.main}`,
          padding: "20px",
          borderRadius: "1rem",
          cursor: "pointer", // Make sure it's visually clickable
          mb: 2,
          transition:
            "background-color 0.5s ease, color 0.1s ease ,scale 0.3s ease",
          ":hover": {
            // scale: 0.98,
            boxShadow: theme.palette.shadow?.secondary,
            transition:
              "background-color 0.5s ease, color 0.1s ease ,scale 0.3s ease",
            border: "1px solidrgba(139, 139, 139, 0)",
          },
        }}
      >
        <Grid container gap={3}>
          <Grid item xs={1}>
            <motion.div
              dangerouslySetInnerHTML={{ __html: image }}
              style={{
                width: "60px",
                height: "60px",
              }}
              whileHover={{ rotate: 30 }} // Framer Motion effect to rotate 30 degrees on hover
              transition={{ duration: 0.3 }} // Smooth transition for the rotation
            />
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ ml: 2 }}>
              <Typography
                variant="h3"
                sx={{
                  color: theme.palette.textColor?.secondary,
                  fontSize: "1rem",
                  fontWeight: 600,
                  fontFamily: "Montserrat",
                  mb: 1,
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.textColor?.main,
                  fontSize: "12PX",
                  fontWeight: 500,
                  fontFamily: "Montserrat",
                }}
              >
                {description}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <ArrowForwardIcon
              sx={{
                backgroundColor: "#FF7262",
                color: "#fff",
                marginLeft: "10px",
                padding: "3px",
                borderRadius: "50%",
                rotate: "-45deg",
                fontSize: { xs: "28px", sm: "28px" },
              }}
            />
          </Grid>
        </Grid>
        {/* Pass isOpen and setIsOpen to SpringModal */}
      </Box>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} title={title} />
    </>
  );
}
