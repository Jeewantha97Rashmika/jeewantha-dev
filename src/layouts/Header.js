import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  useMediaQuery
} from "@mui/material";
import Logo from "../images/JRLogo.svg";

import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import ProImage from "../images/pro02.png";
import MainBtn from "../components/MainBtn";
export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
const isMobile = useMediaQuery('(max-width: 920px)');
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleLinkedinClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/jeewantha-rashmika-b5a56820a/"; // Replace with your desired URL
  };
  const handleAboutClick = () => {
    window.location.href = "/about"; // Replace with your desired URL
  };
  const handleWordClick = () => {
    window.location.href = "/#work"; // Replace with your desired URL
  };
  const handleKnowledgeClick = () => {
    window.location.href = "/#knowledge-sharing"; // Replace with your desired URL
  };

  return (
    <div style={{ backgroundColor: "#f6fafd" }}>
      <Container
        sx={{
          paddingTop: { md: "20px", xs: "20px" },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            color: "black",
            "&:hover": {
              transform: "scale(0.95)",
            },
            transition: "transform 0.2s",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <a href="/">
            <img src={Logo} alt="logo" width={"auto"} height={40} />
          </a>
        </Box>
        <div>
          <Button
            onClick={handleAboutClick}
            color="inherit"
            sx={{
              color: "black",
              ml: 2,
              display: isMobile ? "none" : "inline",
              "&:hover": {
                backgroundColor: "#e8f5ff",
                padding: "5px 20px",
                borderRadius: "40px",
                transform: "scale(0.95)",
              },
            fontFamily: "Montserrat",
              textAlign: "center",
              textTransform: "none",
              fontSize: "20px",
              padding: "5px 20px",
              transition: "transform 0.2s",
            }}
          >
            About
          </Button>
          <Button
            onClick={handleWordClick}
            color="inherit"
            sx={{
              color: "black",
              ml: 2,
              display: isMobile ? "none" : "inline",
              "&:hover": {
                backgroundColor: "#e8f5ff",
                padding: "5px 20px",
                borderRadius: "40px",
                transform: "scale(0.95)",
              },
            fontFamily: "Montserrat",
              textAlign: "center",
              textTransform: "none",
              fontSize: "20px",
              padding: "5px 20px",
              transition: "transform 0.2s",
            }}
          >
            Work
          </Button>
          <Button
            color="inherit"
            onClick={handleKnowledgeClick}
            sx={{
              color: "black",
              ml: 2,
              display: isMobile ? "none" : "inline",
              "&:hover": {
                backgroundColor: "#e8f5ff",
                padding: "5px 20px",
                borderRadius: "40px",
                transform: "scale(0.95)",
              },
            fontFamily: "Montserrat",
              textAlign: "center",
              textTransform: "none",
              fontSize: "20px",
              padding: "5px 20px",
              transition: "transform 0.2s",
            }}
          >
            Knowledge Sharing
          </Button>
          <Button
            onClick={handleLinkedinClick}
            color="inherit"
            sx={{
              color: "black",
              ml: 2,
              display: isMobile ? "none" : "inline",
              "&:hover": {
                backgroundColor: "#e8f5ff",
                padding: "5px 20px",
                borderRadius: "40px",
                transform: "scale(0.95)",
              },
            fontFamily: "Montserrat",
              textAlign: "center",
              textTransform: "none",
              fontSize: "20px",
              padding: "5px 20px",
              transition: "transform 0.2s",
            }}
          >
            Linkedin
          </Button>
          <MainBtn handleLinkedinClick={handleLinkedinClick} isMobile={isMobile} />
          <Box>
            <IconButton
              color="black"
              aria-label="toggle menu"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{   display: isMobile ? "block" : "none", }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </div>

        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
          <Container>
            <div
              style={{
                padding: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                src={ProImage}
                alt="Profile Picture"
                sx={{ width: 150, height: 150 }}
              />
            </div>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              fontFamily: "Montserrat",
              }}
            >
              Jeewantha Rashmika
            </p>
            <p
              style={{
                marginBottom: "20px",
                fontSize: "13px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              fontFamily: "Montserrat",
              }}
            >
              jeewantharashmika80@gmail.com
            </p>
            <hr></hr>
            <List sx={{ width: 260 }} onClick={handleDrawerToggle}>
              <ListItem button component="a" href="/about">
                <ListItemText
                  primary="About"
                  primaryTypographyProps={{
                    style: { fontFamily: "Work Sans" },
                  }}
                />
              </ListItem>
              <ListItem button component="a" href="/#work">
                <ListItemText
                  primary="Work"
                  primaryTypographyProps={{
                    style: { fontFamily: "Work Sans" },
                  }}
                />
              </ListItem>
              <ListItem button component="a" href="/knowledge-sharing">
                <ListItemText
                  primary="Knowledge Sharing"
                  primaryTypographyProps={{
                    style: { fontFamily: "Work Sans" },
                  }}
                />
              </ListItem>
              <ListItem
                button
                component="a"
                href="https://www.linkedin.com/in/jeewantha-rashmika-b5a56820a/"
              >
                <ListItemText
                  primary="LinkedIn"
                  primaryTypographyProps={{
                    style: { fontFamily: "Work Sans" },
                  }}
                />
              </ListItem>
            </List>
          </Container>
        </Drawer>
        {/* </Toolbar>
        </AppBar> */}
      </Container>
    </div>
  );
}
