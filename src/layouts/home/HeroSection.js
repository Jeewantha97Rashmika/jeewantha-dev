import React, { useRef } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Heading1 from "../../components/common/Heading1";
import { Container, Typography } from "@mui/material";
import GridImage from "../../images/grid.svg";
import ProfileImage from "../../images/gridux.svg";
import MainBtn from "../../components/MainBtn";
import HarlfCircel from "../../images/circel.svg";
import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";

export default function HeroSection() {
  const handleLinkedinClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/jeewantha-rashmika-b5a56820a/"; // Replace with your desired URL
  };

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  const skewXRaw = useTransform(
    scrollVelocity,
    [-0.5, 0.5],
    ["45deg", "-45deg"]
  );
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -4000]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  return (
    <div
      style={{
        backgroundColor: "#f6fafd",
        minHeight: "550px",
        backgroundImage: `url(${GridImage})`,
      }}
    >
      <Container
        sx={{
          position: "relative",
          zIndex: 100,
        }}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}

            // justifyContent={"center"}
            // alignItems={"center"}
          >
            <Grid item xs={12} md={5} sx={{ order: { xs: 1, md: 2 }, mt: 10 }}>
              <Box
                sx={{
                  paddingLeft: "15px",
                }}
              >
                <Typography
                  sx={{
                    color: "rgba(112, 112, 112, 1)",
                    fontSize: { xs: "16px", sm: "20px" },
                    border: "1px solid #2E90FA",
                    display: "inline-block",
                    padding: "0px 10px 0px 10px",
                  }}
                >
                  UI / UX Designer & Developer
                </Typography>
              </Box>
              <Box
                sx={{
                  paddingLeft: "15px",
                }}
              >
                <Heading1 component={"h1"} text1={"Hello, I'm Jeewantha."} />
              </Box>
              <br></br>
              <Typography
                component={"p"}
                sx={{
                  color: "rgba(112, 112, 112, 1)",
                  fontSize: { xs: "16px", sm: "16px" },
                  fontWeight: 400,
                  lineHeight: 1.8,
                  fontFamily: "Work Sans",
                  paddingLeft: "15px",
                }}
              >
                {
                  <span>
                    I am a passionate <b> UI/UX designer</b> who is interested
                    in solving complex problems through designing and
                    <b> mobile app/web development </b> dedicated to crafting
                    exceptional digital experiences.
                  </span>
                }
              </Typography>
              <br></br>
              <br />
              <Box
                sx={{
                  paddingLeft: "15px",
                }}
              >
                <MainBtn handleLinkedinClick={handleLinkedinClick} />
              </Box>
              {/* <SecondaryBtn title={"View my CV"} /> */}
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                order: { xs: 2, md: 1 },
                display: "flex",
                justifyContent: "start",
                alignItems: "left",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                <img
                  src={ProfileImage}
                  style={{ maxWidth: "100%", height: "auto" }}
                  alt="knovik"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <section
        ref={targetRef}
        style={{
          zIndex: 1,
          position: "absolute",
          top: 650,
          height: "40vh",
          color: "#1A1A1A",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "static",
            top: 0,
            display: "flex",
            height: "20vh",
            alignItems: "center",
          }}
        >
          <motion.p
            style={{
              transformOrigin: "bottom left",
              whiteSpace: "nowrap",
              fontSize: "10rem", // text-5xl size
              textTransform: "uppercase",
              lineHeight: 0.85,
              ...(skewX && { skewX }), // If you have dynamic values for skewX and x, keep them
              ...(x && { x }),
              "@media (min-width: 768px)": {
                fontSize: "4.5rem", // md:text-7xl size
                lineHeight: 0.85,
                overflow: "hidden",
              },
            }}
          >
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px #1d1d1d",
                overflow: "hidden",
              }}
            >
              Freelancer - UI/UX Designer & Developer
            </span>{" "}
          </motion.p>
        </div>
      </section>

      <Box
        sx={{
          position: "absolute",
          top: -50, // Align to top
          left: 700, // Align to left
          width: "auto",
          height: "auto",
        }}
      >
        <img
          src={HarlfCircel}
          style={{
            transform: "rotate(90deg)",
          }}
        />
      </Box>

      {/* Right HarlfCircel */}
      <Box
        sx={{
          position: "absolute",
          top: 200, // Align to top
          right: 0, // Align to right
          width: "auto",
          height: "auto",
        }}
      >
        <img
          src={HarlfCircel}
          style={{
            transform: "rotate(180deg)", // Rotating to position it on the right
          }}
        />
      </Box>

      {/* Bottom HarlfCircel */}
      <Box
        sx={{
          position: "absolute",
          bottom: 400, // Align to the bottom of the container
          left: 0, // Adjusting positioning from the left side
          width: "auto",
          height: "auto",
        }}
      >
        <img
          src={HarlfCircel}
          style={{
            transform: "rotate(0deg)", // Rotating for the bottom placement
          }}
        />
      </Box>
    </div>
  );
}
