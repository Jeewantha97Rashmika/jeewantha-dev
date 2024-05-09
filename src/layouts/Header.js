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
import Logo2 from "../images/logo2.png";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import ProImage from "../images/pro02.png";
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
  const handleKnowledgeClick = () => {
    window.location.href = "/#knowledge-sharing"; // Replace with your desired URL
  };

  return (
    <div style={{ backgroundColor: "#f6fafd" }}>
      {" "}
      <Container sx={{ paddingTop: { md: "20px", xs: "20px" } }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "#f6fafd", boxShadow: "none" }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

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
              <a
                href="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={Logo2} alt="logo" width={180} height={20} style={{marginLeft: "-20px"}} />
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
                onClick={handleKnowledgeClick}
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
                    fontFamily: "Work Sans",
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
                    fontFamily: "Work Sans",
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
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
}
