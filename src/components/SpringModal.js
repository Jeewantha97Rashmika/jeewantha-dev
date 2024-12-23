import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { Box, Typography } from "@mui/material";
import ContactForm from "./ContactForm";

export default function SpringModal({ isOpen, setIsOpen }) {
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
              background: "linear-gradient(to bottom right, #7e22ce, #4338ca)",
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
            <FiAlertCircle
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
                  backgroundColor: "white",
                  width: "64px",
                  height: "64px",
                  marginBottom: "8px",
                  borderRadius: "50%",
                  fontSize: "32px",
                  color: "#4338ca",
                  display: "grid",
                  placeItems: "center",
                  margin: "0 auto",
                }}
              >
                <FiAlertCircle />
              </div>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "24px",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "8px",
                }}
              >
          Send me your Enquiry
              </Typography>
              <Typography sx={{ textAlign: "center", marginBottom: "24px",fontSize:"16px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                aperiam vitae, sapiente ducimus eveniet in velit.
              </Typography>
              <ContactForm setIsOpen={setIsOpen} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
