import React from "react";
import School from "../../images/schoool.jpg";
import { Typography } from "@mui/material";
export default function Education02() {
  return (
    <div style={{ marginTop: "30px" }}>
      <img
        src={School}
        style={{ maxWidth: "20%", height: "auto" }}
        alt="knovik"
      />
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
        2003 - 2016 - Sri Lanka
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
        Berrewaerts National college kandy
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
        Passed Technology Stram with Infomation and Communication Technology
      </Typography>{" "}
      <br></br>
    </div>
  );
}
