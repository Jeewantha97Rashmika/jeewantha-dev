import React, { useState } from "react";
import { Button, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SpringModal from "./SpringModal";
export default function MainBtn({ handleLinkedinClick, isMobile, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  return (
    <div>
      <Button
        // onClick={handleLinkedinClick}
        onClick={() => setIsOpen(true)}
        color="inherit"
        sx={{
          color: theme.palette.btnColor?.text,
          width: { xs: "100%", sm: "auto" },
          backgroundColor: theme.palette.btnColor?.main,
          transition:
            "background-color 0.5s ease, color 0.5s ease, border-radius 0.5s ease",
          display: isMobile ? "none" : "inline-flex",
          alignItems: "center",
          borderRadius: "30px",
          justifyContent: "center",
          height: "46px",
          padding: "5px 10px 5px 20px",
          "&:hover": {
            backgroundColor: theme.palette.btnColor?.main,
            transition:
              "background-color 0.5s ease, color 0.5s ease , border-radius 0.5s ease",

            // transform: "scale(0.95)",
            borderRadius: "0px",
          },
          fontFamily: "Montserrat",
          textAlign: "center",
          textTransform: "none",
          fontSize: "16px",

          // transition: "transform 0.1s",
        }}
      >
        {title}
        <ArrowForwardIcon
          sx={{
            backgroundColor: "#fff",
            rotate: "-45deg",
            color: "#333",
            marginLeft: "10px",
            padding: "3px",
            borderRadius: "50%",
            fontSize: { xs: "24px", sm: "28px" },
          }}
        />
        {/* <img src={Arrow} alt="arrow" style={{
        paddingLeft:"10px",
        }}/> */}
      </Button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
