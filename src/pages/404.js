import * as React from "react";
import Cuate from "../images/cuate.svg";
import { Button, Container, Typography } from "@mui/material";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const paragraphStyles = {
  marginBottom: 48,
};

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      {/* <h1 style={headingStyles}>Page not found</h1> */}
      <p style={paragraphStyles}>
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            {" "}
            <br /> <br />
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={Cuate} alt="" width={370} height={"auto"} />
            </Container>
            <br />
          </>
        ) : null}
        <br />
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            href="/"
            sx={{
              marginRight: "10px",
              backgroundColor: "black",
              borderRadius: "30px",
              padding: "10px 40px ",
              textTransform: "none",
              transition: "background-color 0.3s, transform 0.3s",
              "&:hover": {
                backgroundColor: "black",
                transform: "scale(0.95)",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "20px" },
                fontWeight: 400,
                fontFamily: "Work Sans",
                color: "white",
              }}
            >
              Go home
            </Typography>
          </Button>
        </Container>
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
