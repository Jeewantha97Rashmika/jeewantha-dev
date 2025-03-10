import React from "react";
import { Container, Box } from "@mui/material";
import TitleDesc from "../../components/ProjectDetails/TitleDesc";
import ContactBox from "../../components/ProjectDetails/ContactBox";

export default function Layout({
  cover,
  title,
  description,
  roles,
  client,
projectImage,
}) {
  return (
    <Container>
      <img
        src={cover}
        alt="xcamera"
        width={"100%"}
        style={{
          marginTop: "3rem",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          borderRadius: "1rem",
          marginBottom: "3rem",
        }}
      />

      <TitleDesc
        title={title}
        description={description}
        roles={roles}
        client={client}
      />

      <Box
        sx={{
          width: "100%",
          my: 5,
          borderRadius: { xs: "1rem", md: "3rem" },
        }}
      >
        <img
          src={projectImage}
          alt="xcamera"
          width={"100%"}
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            borderRadius: "1rem",
          }}
        />
      </Box>
      <ContactBox />
    </Container>
  );
}
