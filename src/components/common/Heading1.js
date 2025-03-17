import React from "react";
import { Typography,useTheme } from "@mui/material";

export default function Heading1({ text1, component, text2 }) {
  const theme = useTheme();
  return (
    <>
      <Typography
        component={component}
        sx={{
          fontSize: {xs:"44px", md:"48px",lg:"58px"},
          fontWeight: "bold",
          lineHeight: "1.1",
          fontFamily: "Montserrat",
          color: theme.palette.textColor?.secondary,
        }}
      >
       <span style={{color: "#FF7262"}}>{text1}</span>
       <span style={{color: theme.palette.textColor?.secondary}}>{text2}</span>
      </Typography>
      {/* <Typography
        component={component}
        sx={{
          fontSize: {xs:"44px", md:"48px",lg:"58px"},
          fontWeight: "bold",
          lineHeight: "1.1",
          fontFamily: "Montserrat",
          color: "#FF7262",
        }}
      >
        {text2}
      </Typography> */}
    </>
  );
}
