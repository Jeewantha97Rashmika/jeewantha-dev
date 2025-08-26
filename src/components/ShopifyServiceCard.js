import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { navigate } from "gatsby";

export default function ShopifyServiceCard({ item }) {
  const theme = useTheme();
  
  const { title, description, image } = item;

  // Handle click event to navigate to Shopify page
  const handleClick = () => {
    navigate("/shopify-store-setup");
  };

  return (
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
        border: `1px solid #5E8E3E`,
        padding: "20px",
        borderRadius: "1rem",
        cursor: "pointer", // Make sure it's visually clickable
        mb: 2,
        transition:
          "background-color 0.5s ease, color 0.1s ease ,scale 0.3s ease",
        ":hover": {
          boxShadow: theme.palette.shadow?.secondary,
          transition:
            "background-color 0.5s ease, color 0.1s ease ,scale 0.3s ease",
          border: "1px solid #5E8E3E",
          backgroundColor: "rgba(94, 142, 62, 0.05)",
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
              backgroundColor: "#5E8E3E",
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
    </Box>
  );
}
