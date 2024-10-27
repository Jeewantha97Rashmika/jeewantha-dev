import React from "react";
import Knovik from "../../images/knovik.png";
import { Typography } from "@mui/material";
export default function WorkingContent02() {
  return (
    <div style={{marginTop:"30px",backgroundColor: "#fafafa", padding: "1rem 1rem", borderRadius: "1rem"}}>
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
        Supporting roles
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
        UI/UX Designer (Web apps, Mobile apps ,IOS apps , and Desktop
        applications)
      </Typography>
    </div>
  );
}
