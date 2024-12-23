import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  Snackbar,
  Alert,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SecondaryBtn from "./common/SecondaryBtn";

export default function ContactForm({ setIsOpen }) {
  const theme = useTheme();

  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    projectType: "", // New state for the project type
  });

  // State to handle form submission result
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.projectType
    ) {
      setSnackbarMessage("All fields are required!");
      setOpenSnackbar(true);
      return;
    }

    // Process the form submission (send data to server, etc.)
    setSnackbarMessage("Your message has been sent successfully!");
    setOpenSnackbar(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);

    // Clear form data
    setFormData({ name: "", email: "", message: "", projectType: "" });
  };

  // Handle Close button
  const handleClose = () => {
    setFormData({ name: "", email: "", message: "", projectType: "" });
    setIsOpen(false); // Reset form data
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "0 auto",
        padding: 3,
        color: "white",
        zIndex: 5,
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Name Input */}
          <Grid item xs={12}>
            <TextField
              required
              label="Full Name"
              // variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              // sx={{
              //   color: "white",
              // }}
              // InputLabelProps={{ style: { color: "white" } }} // White label color
              // InputProps={{
              //   sx: {
              //     "& .MuiOutlinedInput-root": {
              //       "& fieldset": {
              //         borderColor: "white",
              //         color: "white", // White border color
              //       },
              //       "&:hover fieldset": {
              //         borderColor: "white", // White border on hover
              //       },
              //       "&.Mui-focused fieldset": {
              //         borderColor: "white", // White border when focused
              //       },
              //     },
              //   },
              // }} // Apply border color change
            />
          </Grid>
          {/* Email Input */}
          <Grid item xs={12}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              // InputLabelProps={{ sx: { color: "white" } }} // White label color
              // InputProps={{
              //   sx: {
              //     "& .MuiOutlinedInput-root": {
              //       "& fieldset": {
              //         borderColor: "white", // White border color
              //       },
              //       "&:hover fieldset": {
              //         borderColor: "white", // White border on hover
              //       },
              //       "&.Mui-focused fieldset": {
              //         borderColor: "white", // White border when focused
              //       },
              //     },
              //   },
              // }} // Apply border color change
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth required>
              {/* <InputLabel sx={{ color: "white" }}>Project Type</InputLabel> */}
              <RadioGroup
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                sx={{
                  // color: "white",
                  display: "flex",
                  flexDirection: "row",
                  // justifyContent: "space-around",
                  // White text color for radio labels
                }}
              >
                <FormControlLabel
                  value="UI/UX Design"
                  control={<Radio />}
                  label="UI/UX Design"
                  sx={{ color: theme.palette.textColor?.secondary }} // White color for the label
                />
                <FormControlLabel
                  value="Development"
                  control={<Radio />}
                  label="Development"
                  sx={{ color: theme.palette.textColor?.secondary }} // White color for the label
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {/* Message Input */}
          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              multiline
              rows={4}
              // InputLabelProps={{ style: { color: "white" } }} // White label color
              // InputProps={{
              //   sx: {
              //     "& .MuiOutlinedInput-root": {
              //       "& fieldset": {
              //         borderColor: "white", // White border color
              //       },
              //       "&:hover fieldset": {
              //         borderColor: "white", // White border on hover
              //       },
              //       "&.Mui-focused fieldset": {
              //         borderColor: "white", // White border when focused
              //       },
              //     },
              //   },
              // }} // Apply border color change
            />
          </Grid>
          {/* Project Type Dropdown */}
          {/* Submit and Close Buttons */}
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {/* Close Button */}
              <Grid item xs={12} md={6}>
     
                <SecondaryBtn title="Close" handleClick={handleClose} />
              </Grid>

              {/* Send Button */}
              <Grid item xs={12} md={6}>
                <Button
                  type="submit"
                  color="inherit"
                  sx={{
                    color: theme.palette.btnColor?.text,
                    width: { xs: "100%" },
                    backgroundColor: theme.palette.btnColor?.main,
                    transition:
                      "background-color 0.5s ease, color 0.5s ease, border-radius 0.5s ease",
                    // display: isMobile ? "none" : "inline-flex",
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
                  {"Send me message"}
                  <ArrowForwardIcon
                    sx={{
                      backgroundColor: "#fff",

                      color: "#333",
                      marginLeft: "10px",
                      padding: "3px",
                      borderRadius: "50%",
                      fontSize: { xs: "24px", sm: "28px" },
                    }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>

      {/* Snackbar for showing success or error message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarMessage.includes("success") ? "success" : "error"}
          sx={{ width: "100%", backgroundColor: "white", color: "black" }} // White background and black text
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
