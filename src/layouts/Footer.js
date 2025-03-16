import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
} from "@mui/material";

import Logo2 from "../images/JeewanthaLogowhite.svg";
import { useMediaQuery } from "@mui/material";
import MainBtn from "../components/MainBtn";
import GridImage from "../images/grid2.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareBehance } from "react-icons/fa6";

export default function Footer() {
  // const handleLinkedinClick = () => {
  //   window.location.href =
  //     "https://www.linkedin.com/in/jeewantha-rashmika-b5a56820a/"; // Replace with your desired URL
  // };

  const handleBlogClick = () => {
    window.location.href = "/#testimonials"; // Replace with your desired URL
  };
  // const handleAboutClick = () => {
  //   window.location.href = "/#about"; // Replace with your desired URL
  // };
  const handleServicesClick = () => {
    window.location.href = "/#services"; // Replace with your desired URL
  };
  const handleWordClick = () => {
    window.location.href = "/#work"; // Replace with your desired URL
  };
  // const handleKnowledgeClick = () => {
  //   window.location.href = "/#knowledge-sharing"; // Replace with your desired URL
  // };
  //time now

  const [times, setTimes] = useState({
    colombo: "",
    usa: "",
  });

  useEffect(() => {
    const updateTimes = () => {
      const colomboTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Colombo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(new Date());

      const usaTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York", // Change to another timezone if needed
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(new Date());

      setTimes({ colombo: colomboTime, usa: usaTime });
    };

    updateTimes(); // Set time immediately
    const intervalId = setInterval(updateTimes, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  //social links
  const socialLinks = [
    {
      name: "Linkedin",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/jeewantha-rashmika-b5a56820a/",
    },
    {
      name: "Github",
      icon: <FaSquareGithub />,
      link: "https://github.com/Jeewantha97Rashmika",
    },
    {
      name: "Email",
      icon: <MdAttachEmail />,
      link: "mailto:jeewantharashmika80@gmail.com",
    },
    {
      name: "instagram",
      icon: <FaSquareInstagram />,
      link: "https://www.instagram.com/jeewantha_rashmika97/",
    },
    {
      name: "facebook",
      icon: <FaFacebookSquare />,
      link: "https://www.facebook.com/jeewatharashmika.calyso",
    },
    {
      name: "Behance",
      icon: <FaSquareBehance />,
      link: "https://www.behance.net/jeewantharashmika",
    },
  ];
  const isMobile = useMediaQuery("(max-width: 920px)");

  return (
    <div
      style={{
        backgroundColor: "#1D1D1E",
        // backgroundColor:theme.palette.bgColor.main,

        transition: "background-color 0.5s ease, color 0.5s ease",
        backgroundImage: `url(${GridImage})`,
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "300px", md: "400px" },
          height: { xs: "300px", md: "400px" },
          borderRadius: "50%",
          backgroundColor: "rgba(255, 0, 0, 0.2)",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      ></Box>
      <Container sx={{ pt: { xs: 10 } }}>
        <Box
          sx={{
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Logo2} alt="logo" width={200} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 3,
            color: "white",
          }}
        >
          {socialLinks.map((val, key) => {
            return (
              <a href={val.link} target="_blank" rel="noreferrer" key={key}>
                <Typography
                  sx={{
                    color: "white",
                    mx: 1.5,
                    "&:hover": {
                      color: "#FF7262",
                      scale: 0.95,
                      transition: "color 0.2s ease, scale 0.2s ease",
                    },
                    cursor: "pointer",
                    transition: "color 0.2s ease , scale 0.2s ease",
                    fontSize: {xs:"30px",md:"40px"},
                  }}
                >
                  {val.icon}
                </Typography>
              </a>
            );
          })}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            mt: 3,
            color: "white",
          }}
        >
          <Typography sx={{ color: "white", mx: 2, my: 2, fontSize: "20px" }}>
            SL : {times.colombo}
          </Typography>
          <MainBtn title={"Contact Me"} color={"#FF7262"}/>
          <Typography sx={{ color: "white", mx: 2, my: 2, fontSize: "20px" }}>
            USA : {times.usa}
          </Typography>
        </Box>
        <Box sx={{ mt: { md: 5, xs: 5 } }}>
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={handleServicesClick}
                color="inherit"
                sx={{
                  color: "white",
                  ml: 2,
                  display: isMobile ? "block" : "inline",
                  "&:hover": {
                    // backgroundColor: "#e8f5ff",
                    padding: "5px 20px",
                    borderRadius: "40px",
                    transform: "scale(0.95)",
                  },
                  fontFamily: "Montserrat",
                  textAlign: "center",
                  textTransform: "none",
                  fontSize: "16px",
                  padding: "5px 20px",
                  transition: "transform 0.2s",
                }}
              >
                Services
              </Button>
              <Button
                onClick={handleWordClick}
                color="inherit"
                sx={{
                  color: "white",
                  ml: 2,
                  display: isMobile ? "block" : "inline",
                  "&:hover": {
                    // backgroundColor: "#e8f5ff",
                    padding: "5px 20px",
                    borderRadius: "40px",
                    transform: "scale(0.95)",
                  },
                  fontFamily: "Montserrat",
                  textAlign: "center",
                  textTransform: "none",
                  fontSize: "16px",
                  padding: "5px 20px",
                  transition: "transform 0.2s",
                }}
              >
                Work
              </Button>
              {/* <Button
                color="inherit"
                onClick={handleKnowledgeClick}
                sx={{
                  color: "white",
                  ml: 2,
                  display: isMobile ? "none" : "inline",
                  "&:hover": {
                    // backgroundColor: "#e8f5ff",
                    padding: "5px 20px",
                    borderRadius: "40px",
                    transform: "scale(0.95)",
                  },
                  fontFamily: "Montserrat",
                  textAlign: "center",
                  textTransform: "none",
                  fontSize: "16px",
                  padding: "5px 20px",
                  transition: "transform 0.2s",
                }}
              >
                Knowledge Sharing
              </Button> */}
              <Button
                onClick={handleBlogClick}
                color="inherit"
                sx={{
                  color: "white",
                  ml: 2,
                  display: isMobile ? "block" : "inline",
                  "&:hover": {
                    // backgroundColor: "#e8f5ff",
                    padding: "5px 20px",
                    borderRadius: "40px",
                    transform: "scale(0.95)",
                  },
                  fontFamily: "Montserrat",
                  textAlign: "center",
                  textTransform: "none",
                  fontSize: "16px",
                  padding: "5px 20px",
                  transition: "transform 0.2s",
                }}
              >
          Testimonials
              </Button>
            </div>
          </Grid>
        </Box>
      </Container>
     
      <hr style={{ border: "1px solid #2B2B2B", marginTop: "20px" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pb: { md: 3, xs: 3 },
        }}
      >
        <Typography
      
          sx={{
            mt: { md: 5, xs: 5 },
            transition: "transform 0.2s",
            color: "#f1f1f1",
            fontSize: { xs: "12px", md: "14px" },
            fontWeight: 600,
            fontFamily: "Montserrat",
          }}
        >
          Copyright © {new Date().getFullYear()} Jeewantha Rashmika. 
        </Typography>
        <Typography
        
          sx={{
            transition: "transform 0.2s",
            color: "#f1f1f1",
            fontSize: { xs: "10px", md: "12px" },
            fontWeight: 400,
            fontFamily: "Montserrat",
          }}
        >
          All rights reserved.
          {/* Designed & developed by Jeewantha Rashmika */}
        </Typography>
      </Box>
    </div>
  );
}
