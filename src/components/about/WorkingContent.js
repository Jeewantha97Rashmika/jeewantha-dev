import React from "react";
import Knovik from "../../images/knovik.png";
import { Typography } from "@mui/material";
export default function WorkingContent() {
  return (
    <div style={{marginTop:"30px"}}>
      <img src={Knovik} style={{ maxWidth: "20%", height: "auto" }} alt="knovik"/>
      <br></br>
      <Typography
        component={"p"}
        sx={{
          color: "rgba(112, 112, 112, 1)",
          fontSize: "16px",
          fontWeight: 400,
          fontFamily: "Work Sans",
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
          fontFamily: "Work Sans",
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
          fontFamily: "Work Sans",
        }}
      >
        Android apps and IOS app
      </Typography>
    </div>
  );
}
