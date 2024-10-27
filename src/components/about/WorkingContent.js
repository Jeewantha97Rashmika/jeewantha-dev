import React from "react";
import Knovik from "../../images/knovik.png";
import { Typography } from "@mui/material";
export default function WorkingContent() {
  return (
    <div style={{marginTop:"30px" ,backgroundColor: "#fafafa", padding: "1rem 1rem", borderRadius: "1rem" }}>
      <img src={Knovik} style={{ maxWidth: "20%", height: "auto" }} alt="knovik"/>
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
        2022-10-01 - 2023-03-01 - Sri Lanka
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
       Mobile developer ( Intern )
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
        Android apps and IOS apps
      </Typography>
    </div>
  );
}
