import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Logo from "../images/mylogo4.svg";
import Logo2 from "../images/mylogo3.svg";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import ProImage from "../images/pro02.png";
import MainBtn from "../components/MainBtn";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 920px)");
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleLinkedinClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/jeewantha-rashmika-b5a56820a/"; // Replace with your desired URL
  };
  const handleAboutClick = () => {
    window.location.href = "/#services"; // Replace with your desired URL
  };
  const handleWordClick = () => {
    window.location.href = "/#projects"; // Replace with your desired URL
  };
  const handleKnowledgeClick = () => {
    window.location.href = "/#knowledge-sharing"; // Replace with your desired URL
  };
  const them = useTheme();
  const [themeMode, setThemeMode] = useState("");
  useEffect(() => {
    setThemeMode(localStorage.getItem("themeMode"));
  }, [localStorage.getItem("themeMode")]);
  return (
    <div
      style={{
        backgroundColor: them.palette.bgColor.main,

        position: "sticky",
        top: 0,
        zIndex: 100000,
        overflow: " hidden",
      }}
    >
      <Container
        sx={{
          paddingTop: { md: "10px", xs: "10px" },
          pb: 1,
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
            <img
              src={themeMode === "dark" ? Logo2 : Logo}
              alt="logo"
              width={"auto"}
              height={40}
            />
          </a>
        </Box>
        <div>
          <Button
            onClick={handleAboutClick}
            color="inherit"
            sx={{
              color: them.palette.textColor.main,
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
              fontSize: "18px",
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
              color: them.palette.textColor.main,
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
              fontSize: "18px",
              padding: "5px 20px",
              transition: "transform 0.2s",
            }}
          >
            Projects
          </Button>
          <Button
            color="inherit"
            onClick={handleKnowledgeClick}
            sx={{
              color: them.palette.textColor.main,
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
              fontSize: "18px",
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
              color: them.palette.textColor.main,
              ml: 2,
              mr: 2,
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
              fontSize: "18px",
              padding: "5px 20px",
              transition: "transform 0.2s",
            }}
          >
            Linkedin
          </Button>
          <MainBtn
            handleLinkedinClick={handleLinkedinClick}
            isMobile={isMobile}
          />
          <Box>
            <IconButton
              color="black"
              aria-label="toggle menu"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: isMobile ? "block" : "none" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </div>

        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
          <Container
            sx={{
              mt: 8,
            }}
          >
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
                    style: { fontFamily: "Montserrat" },
                  }}
                />
              </ListItem>
              <ListItem button component="a" href="/#work">
                <ListItemText
                  primary="Work"
                  primaryTypographyProps={{
                    style: { fontFamily: "Montserrat" },
                  }}
                />
              </ListItem>
              <ListItem button component="a" href="/knowledge-sharing">
                <ListItemText
                  primary="Knowledge Sharing"
                  primaryTypographyProps={{
                    style: { fontFamily: "Montserrat" },
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
                    style: { fontFamily: "Montserrat" },
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
