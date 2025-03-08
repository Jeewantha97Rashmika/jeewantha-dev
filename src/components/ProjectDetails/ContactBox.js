import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import MainBtn from "../MainBtn";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function ContactBox() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        py: 5,
        my: { xs: 5, md: 10 },
        backgroundColor: theme.palette.bgColor?.main,
        borderRadius: { xs: "1rem" },
        height: { xs: "40vh", md: "40vh" },
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 3px 8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.palette.cardBgColor?.main,
          padding: "10px 25px 10px 0px",
          borderRadius: "2rem",
        }}
      >
        <DotLottieReact
          src="https://lottie.host/cc17803a-7e70-4317-a769-67aff66c168a/TvtC26OSYH.lottie"
          loop
          autoplay
          style={{ width: "60px", height: "auto" }}
        />
        <Typography
          sx={{
            color: theme.palette.textColor?.secondary,
            fontSize: "14px",
            fontWeight: "bold",
            fontFamily: "Montserrat",
            textAlign: "center",
          }}
        >
          Available now
        </Typography>
      </Box>
      <Typography
        sx={{
          color: theme.palette.textColor?.secondary,
          fontSize: { xs: "32px", md: "46px" },
          fontWeight: "bold",
          fontFamily: "Montserrat",
          textAlign: "center",
          mt: 2,
        }}
      >
        Let's create your
      </Typography>
      <Typography
        sx={{
          color: theme.palette.textColor?.secondary,
          fontSize: { xs: "32px", md: "46px" },
          fontWeight: "bold",
          fontFamily: "Montserrat",
          textAlign: "center",
          mb: 2,
        }}
      >
        next big idea.
      </Typography>
      <MainBtn title={"Contact Me"} color={"#FF7262"} />
    </Box>
  );
}
