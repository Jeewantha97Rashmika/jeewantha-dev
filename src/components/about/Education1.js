import React from "react";
import UOJ from "../../images/uoj_logo.png";
import { Typography } from "@mui/material";
export default function Education01() {
  return (
    <div style={{ marginTop: "30px" ,backgroundColor: "#fafafa", padding: "1rem 1rem", borderRadius: "1rem"}}>
      <img src={UOJ} style={{ maxWidth: "40%", height: "auto" }} alt="knovik" />
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
        2018 - 2023 - Sri Lanka
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
        University of Jaffna, Sri Lanka
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
        Information and Communication Technology - BICT(horns)
      </Typography>{" "}
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
        Consisting with the modules are Applied and Software Engineering, Java,
        C++, Mobile Computing, HTML, CSS, JS, React Native, UI/UX Designing ,
        etc.
      </Typography>
    </div>
  );
}
