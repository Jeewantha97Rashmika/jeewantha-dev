import React from "react";
import Knovik from "../../images/knovik.png";
import { Typography } from "@mui/material";
export default function WorkingContent02() {
  return (
    <div style={{marginTop:"30px"}}>
      <img src={Knovik} style={{ maxWidth: "20%", height: "auto" }} alt="knovik" />
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
        2023-03-01 - present - Sri Lanka
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
        Associate Software Engineer
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
        Mobile App development and web app develpment
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
        Supporting roles
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
        UI/UX Designer (Web apps, Mobile apps ,IOS apps , and Desktop
        applications)
      </Typography>
    </div>
  );
}
