import React from "react";
import Knovik from "../../images/knovik.png";
import { Typography } from "@mui/material";
export default function WorkingContent02() {
  return (
    <div style={{ marginTop: "30px", backgroundColor: "#fafafa", padding: "1rem 1rem", borderRadius: "1rem" }}>
      <img src={Knovik} style={{ maxWidth: "20%", height: "auto" }} alt="knovik" />
      <br></br>
      <Typography
        component={"p"}
        sx={{
          color: "rgba(112, 112, 112, 1)",
          fontSize: "16px",
          fontWeight: 400,
          fontFamily: "Montserrat",
        }}
      >
        2023-03-01 - present - Sri Lanka
      </Typography>
      <br></br>
      <Typography
        component={"p"}
        sx={{
          color: "black",
          fontSize: "16px",
          fontWeight: 800,
          fontFamily: "Montserrat",
        }}
      >
        Associate Software Engineer
      </Typography>

      <Typography
        component={"p"}
        sx={{
          color: "rgba(112, 112, 112, 1)",
          fontSize: "16px",
          fontWeight: 400,
          fontFamily: "Montserrat",
        }}
      >
        Mobile App development and web app develpment
      </Typography>
     

      <Typography
        component={"p"}
        sx={{
          color: "rgba(112, 112, 112, 1)",
          fontSize: "16px",
          fontWeight: 400,
          fontFamily: "Montserrat",
        }}
      >
        As an Associate Software Engineer, I specialize in developing robust mobile and web applications, with experience in both front-end and back-end development. My expertise spans across creating scalable, efficient apps for Android, iOS, and web platforms using technologies, I take on supporting roles as a UI/UX Designer, focusing on crafting intuitive user interfaces and seamless experiences for mobile, web, iOS, and desktop applications.
      </Typography>
    </div>
  );
}
