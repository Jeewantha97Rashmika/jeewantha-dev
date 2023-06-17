import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import Logo from "../images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";


export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

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
  return (
    <div style={{ backgroundColor: "#f6fafd", paddingTop: "40px" }}>
      {" "}
      <Container>
        <AppBar
          position="static"
          sx={{ backgroundColor: "#f6fafd", boxShadow: "none" }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "none",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "black",
                "&:hover": {
                  transform: "scale(0.95)",
                },
                transition: "transform 0.2s",
              }}
            >
              <a href="/">
                <img src={Logo} alt="logo" width={200} />
              </a>
            </Typography>
            <div sx={{ display: "flex", alignItems: "center" }}>
              <Button
                onClick={handleAboutClick}
                color="inherit"
                sx={{
                  color: "black",
                  ml: 5,
                  display: { xs: "none", md: "inline" },
                  "&:hover": {
                    backgroundColor: "#e8f5ff",
                    padding: "5px 20px",
                    borderRadius: "40px",
                    transform: "scale(0.95)",
                  },
                  fontFamily: "Work Sans",
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
                  ml: 5,
                  display: { xs: "none", md: "inline" },
                  "&:hover": {
                    backgroundColor: "#e8f5ff",
                    padding: "5px 20px",
                    borderRadius: "40px",
                    transform: "scale(0.95)",
                  },
                  fontFamily: "Work Sans",
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
                sx={{
                  color: "black",
                  ml: 5,
                  display: { xs: "none", md: "inline" },
                  "&:hover": {
                    backgroundColor: "#e8f5ff",
                    padding: "5px 20px",
                    borderRadius: "40px",
                    transform: "scale(0.95)",
                  },
                  fontFamily: "Work Sans",
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
                  ml: 5,
                  display: { xs: "none", md: "inline" },
                  "&:hover": {
                    backgroundColor: "#e8f5ff",
                    padding: "5px 20px",
                    borderRadius: "40px",
                    transform: "scale(0.95)",
                  },
                  fontFamily: "Work Sans",
                  textAlign: "center",
                  textTransform: "none",
                  fontSize: "20px",
                  padding: "5px 20px",
                  transition: "transform 0.2s",
                }}
              >
                Linkedin
              </Button>
              <IconButton
                color="black"
                aria-label="toggle menu"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ display: { xs: "inline", md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
            >
              <List sx={{ width: 250 }} onClick={handleDrawerToggle}>
                <ListItem button component="a"  href="/about">
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem button component="a"  href="/#work">
                  <ListItemText primary="Work" />
                </ListItem>
                <ListItem button component="a"  href="/knowledge-sharing">
                  <ListItemText primary="Knowledge Sharing" />
                </ListItem>
                <ListItem button component="a"  href="/linkedin">
                  <ListItemText primary="Linkedin" />
                </ListItem>
              </List>
            </Drawer>
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
}
