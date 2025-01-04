import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMessageSquare } from "react-icons/fi";
import {  Typography,useTheme } from "@mui/material";
import ContactForm from "./ContactForm";

export default function SpringModal({ isOpen, setIsOpen }) {
  const theme = useTheme();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          style={{
            backgroundColor: "rgba(31, 41, 55, 0.2)",
            backdropFilter: "blur(10px)",
            padding: "15px",
            position: "fixed",
            inset: 0,
            zIndex: 99999, // Ensure this is at the highest layer
            display: "grid",
            placeItems: "center",
            overflowY: "scroll",
            cursor: "pointer",
          }}
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: theme.palette.cardBgColor?.main,
              // background: "linear-gradient(to bottom right,rgb(236, 76, 76),rgb(202, 46, 46) )",
              color: "white",
              padding: "10px",
              borderRadius: "12px",
              width: "100%",
              maxWidth: "600px",
              boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.15)",
              cursor: "default",
              position: "relative",
              overflow: "hidden",
              zIndex: 100000, // Modal content should be above the background
            }}
          >
            <FiMessageSquare 
              style={{
                color: "rgba(255, 255, 255, 0.1)",
                transform: "rotate(12.5deg)",
                fontSize: "250px",
                position: "absolute",
                zIndex: 0,
                top: "-100px",
                left: "-100px",
              }}
            />
            <div style={{ position: "relative", zIndex: 10 }}>
              <div
                style={{
                  backgroundColor: "#B5B5B5",
                  width: "64px",
                  height: "64px",
                  marginBottom: "8px",
                  borderRadius: "50%",
                  fontSize: "32px",
                  color: "#2B2B2B",
                  display: "grid",
                  placeItems: "center",
                  margin: "0 auto",
                }}
              >
           <FiMessageSquare />
              </div>
              <Typography
                sx={{
                  color: theme.palette.textColor?.secondary,
                  fontFamily: "Montserrat",
                  fontSize: "24px",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "8px",
                  mt:2,
                }}
              >
                Send me your Enquiry
              </Typography>
              {/* <Typography
                sx={{
                  color: theme.palette.textColor?.secondary,
                  textAlign: "center",
             
                  fontSize: "16px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                aperiam vitae, sapiente ducimus eveniet in velit.
              </Typography> */}
              <ContactForm setIsOpen={setIsOpen} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
