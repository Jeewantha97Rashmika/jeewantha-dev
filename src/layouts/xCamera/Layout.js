import React from "react";
import { Container, Box } from "@mui/material";
import TitleDesc from "../../components/ProjectDetails/TitleDesc";
import ContactBox from "../../components/ProjectDetails/ContactBox";
import SecondaryBtn from "../../components/common/SecondaryBtn";

export default function Layout({
  cover,
  title,
  description,
  roles,
  client,
  checkLive,
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

      {/* Container for aligning the SecondaryBtn to the right */}
      <Box
        sx={{
          display: checkLive ? "flex" : "none",  // Show the button only when checkLive is true"flex",
          justifyContent: "flex-end",  // Aligns the button to the right
          my: 2,  // Adds vertical margin around the button
        }}
      >
        <SecondaryBtn
          title="Check Live"
        href={checkLive}
          width="240px"
         
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          my: 5,
          borderRadius: { xs: "1rem", md: "3rem" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={projectImage}
          alt="xcamera"
          width={"100%"}
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            borderRadius: "1rem",
            border: "4px solid #3f3f3f",
          }}
        />
      </Box>
      <ContactBox />
    </Container>
  );
}
